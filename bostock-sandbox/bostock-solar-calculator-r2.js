
// Equations based on NOAA’s Solar Calculator; all angles in radians.
// http://www.esrl.noaa.gov/gmd/grad/solcalc/

//	var latitude = 37.796
//	var longitude = -122.398;

	var centuries;
	var J2000 = Date.UTC( 2000, 0, 1, 12 );
	var pi = Math.PI;
	var pi2 = 2 * pi;
	var pi05 = 0.5 * pi;
	var d2r = pi / 180;
	var r2d = 180 / pi;

	hoursOffset = - 7;

	ddate = new Date();

	dateLastMidightUTC = new Date( ddate.getUTCFullYear(), ddate.getUTCMonth(), ddate.getUTCDate() );

	dateLastMidnightLocal = new Date( dateLastMidightUTC.getFullYear(), dateLastMidightUTC.getMonth(), dateLastMidightUTC.getDate(), dateLastMidightUTC.getHours() + hoursOffset );


	function getSunPosition( date ) {

		centuries = ( date - J2000 ) / ( 864e5 * 36525 );

		theta = solarDeclination( centuries );
		var cosθ = Math.cos( theta );
		var sinθ = Math.sin( theta );
		φ = latitude * d2r;
		cosφ = Math.cos(φ);
		sinφ = Math.sin(φ);

//		var azimuth = ((date - d3.time.day.utc.floor(date)) / 864e5 * pi2 + equationOfTime( centuries ) + λ) % pi2 - pi;
		var azimuth = ((date - dateLastMidnightLocal ) / 864e5 * pi2 + equationOfTime( centuries ) + longitude * d2r ) % pi2 - pi;

		var zenith = Math.acos( Math.max( -1, Math.min( 1, sinφ * sinθ + cosφ * cosθ * Math.cos( azimuth ) ) ) );
		var azimuthDenominator = cosφ * Math.sin( zenith );

		if ( azimuth < -pi ) { azimuth += pi2; }
		if ( Math.abs( azimuthDenominator ) > 1e-6 ) { 

			azimuth = ( azimuth > 0 ? -1 : 1 ) * 
				( pi - Math.acos( Math.max( -1, Math.min( 1, ( sinφ * Math.cos( zenith ) - sinθ ) / azimuthDenominator ) ) ) );

		}
		if ( azimuth < 0 ) { azimuth += pi2; }

// Correct for atmospheric refraction.

		var atmosphere = pi05 - zenith;

		if ( atmosphere <= 85 * d2r ) {

			var te = Math.tan( atmosphere );

			zenith -= ( atmosphere > 5 ? 58.1 / te - 0.07 / ( te * te * te ) + 0.000086 / ( te * te * te * te * te )
				: atmosphere > -.575 ? 1735 + atmosphere * ( -518.2 + atmosphere * ( 103.4 + atmosphere * ( -12.79 + atmosphere * 0.711) ) )
				: -20.774 / te ) / 3600 * d2r;

		}

// Note: if zenith > 108°, it’s dark.

		return { azimuth: azimuth * r2d, altitude: 90 - zenith * r2d };

	}


	function noon( date ) {

		minutesOffset = 720 - longitude * 4;

		var centuries = ( d3.time.day.utc.floor( date ) - J2000 ) / ( 864e5 * 36525 );

		var minutes = ( minutesOffset - ( equationOfTime( centuries + ( minutesOffset - ( equationOfTime( centuries - longitude /  (360 * 365.25 * 100)) * r2d * 4)) / (1440 * 365.25 * 100)) * r2d * 4) - date.getTimezoneOffset()) % 1440;

		if ( minutes < 0 ) { minutes += 1440 };

		var newDate = new Date( + d3.time.day.floor( date ) + minutes * 60 * 1000 );

		return newDate;

	}




// https://en.wikipedia.org/wiki/Equation_of_time

	function equationOfTime( centuries ) {

		var e = eccentricityEarthOrbit( centuries );
		var m = solarGeometricMeanAnomaly( centuries );
		var l = solarGeometricMeanLongitude( centuries );
		var y = Math.tan( obliquityCorrection( centuries ) / 2 );

		y *= y;

		return y * Math.sin( 2 * l )
			- 2 * e * Math.sin( m )
			+ 4 * e * y * Math.sin( m ) * Math.cos( 2 * l )
			- 0.5 * y * y * Math.sin( 4 * l )
			- 1.25 * e * e * Math.sin( 2 * m );

	}

	function solarDeclination( centuries ) {

		return Math.asin( Math.sin( obliquityCorrection( centuries ) ) * Math.sin( solarApparentLongitude( centuries ) ) );

	}

	function solarApparentLongitude(centuries) {

		return solarTrueLongitude( centuries ) - ( 0.00569 + 0.00478 * Math.sin( ( 125.04 - 1934.136 * centuries ) * d2r ) ) * d2r;

	}

	function solarTrueLongitude( centuries ) {

		return solarGeometricMeanLongitude( centuries ) + solarEquationOfCenter( centuries );

	}

	function solarGeometricMeanAnomaly( centuries ) {

		return ( 357.52911 + centuries * ( 35999.05029 - 0.0001537 * centuries ) ) * d2r;

	}

	function solarGeometricMeanLongitude( centuries ) {

		var l = (280.46646 + centuries * (36000.76983 + centuries * 0.0003032)) % 360;

		return ( l < 0 ? l + 360 : l ) / 180 * pi;

	}

	function solarEquationOfCenter( centuries ) {

		var m = solarGeometricMeanAnomaly( centuries );

		return ( Math.sin( m ) * ( 1.914602 - centuries * ( 0.004817 + 0.000014 * centuries ) )
			+ Math.sin( m + m ) * (0.019993 - 0.000101 * centuries )
			+ Math.sin(m + m + m) * 0.000289) * d2r;

	}

	function obliquityCorrection( centuries ) {

		return meanObliquityOfEcliptic(centuries) + 0.00256 * Math.cos((125.04 - 1934.136 * centuries) * d2r) * d2r;

	}

	function meanObliquityOfEcliptic( centuries ) {

		return (23 + (26 + (21.448 - centuries * (46.8150 + centuries * (0.00059 - centuries * 0.001813))) / 60) / 60) * d2r;

	}

	function eccentricityEarthOrbit( centuries ) {

		return 0.016708634 - centuries * (0.000042037 + 0.0000001267 * centuries);

	}

