// r1 2016-05-17

// Equations based on NOAA’s Solar Calculator; all angles in radians.
// http://www.esrl.noaa.gov/gmd/grad/solcalc/
// http://www.esrl.noaa.gov/gmd/grad/solcalc/calcdetails.html

	var pi = Math.PI;
	var pi2 = 2 * pi;
	var pi05 = 0.5 * pi;
	var d2r = pi / 180;
	var r2d = 180 / pi;
		var century, now;
	function getSunPosition( date, latitude, longitude ) {

// date is a JavaScript Date object



		var azimuth, zenith, azimuthDenominator, atmosphere;

		var J2000 = Date.UTC( 2000, 0, 1, 12 );
		century = ( date - J2000 ) / ( 864e5 * 36525 );

		var theta = solarDeclination( century );
		var cosTheta = Math.cos( theta );
		var sinTheta = Math.sin( theta );

		var phi = latitude * d2r;
		var cosPhi = Math.cos( phi );
		var sinPhi = Math.sin( phi);

		now = new Date();

		hoursOffset = now.getTimezoneOffset() / 60;

//		hoursOffset = longitude < 0 ? - hoursOffset : hoursOffset;

		var dateLastMidnightUTC = new Date( now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate() );

		var dateLastMidnightLocal = new Date( dateLastMidnightUTC.getFullYear(), dateLastMidnightUTC.getMonth(),
			dateLastMidnightUTC.getDate(), dateLastMidnightUTC.getHours() - hoursOffset );

// now for twenty lines of nearly impenetrable code   ;-(

		azimuth = ( ( date - dateLastMidnightLocal ) / 864e5 * pi2 + equationOfTime( century ) + longitude * d2r ) % pi2 - pi;

		zenith = Math.acos( Math.max( -1, Math.min( 1, sinPhi * sinTheta + cosPhi * cosTheta * Math.cos( azimuth ) ) ) );

		azimuthDenominator = cosPhi * Math.sin( zenith );

		if ( azimuth < -pi ) { azimuth += pi2; }

		if ( Math.abs( azimuthDenominator ) > 1e-6 ) { 

			azimuth = ( azimuth > 0 ? -1 : 1 ) * 
				( pi - Math.acos( Math.max( -1, Math.min( 1, ( sinPhi * Math.cos( zenith ) - sinTheta ) / azimuthDenominator ) ) ) );

		}

		if ( azimuth < 0 ) { azimuth += pi2; }

		atmosphere = pi05 - zenith;

		if ( atmosphere <= 85 * d2r ) {

			var te = Math.tan( atmosphere );

			zenith -= ( atmosphere > 5 ? 58.1 / te - 0.07 / ( te * te * te ) + 0.000086 / ( te * te * te * te * te )
				: atmosphere > -0.575 ? 1735 + atmosphere * ( -518.2 + atmosphere * ( 103.4 + atmosphere * ( -12.79 + atmosphere * 0.711 ) ) )
				: -20.774 / te ) / 3600 * d2r;

		}

		return { azimuth: azimuth * r2d, altitude: 90 - zenith * r2d, century: century };

	}


// https://en.wikipedia.org/wiki/Equation_of_time

	function equationOfTime( century ) {

		var e = eccentricityEarthOrbit( century );
		var y = Math.pow( Math.tan( obliquityCorrection( century ) / 2 ), 2 );
		var m = solarGeometricMeanAnomaly( century );
		var l = solarGeometricMeanLongitude( century );

		return y * Math.sin( 2 * l )
			- 2 * e * Math.sin( m )
			+ 4 * e * y * Math.sin( m ) * Math.cos( 2 * l )
			- 0.5 * y * y * Math.sin( 4 * l )
			- 1.25 * e * e * Math.sin( 2 * m );

	}

	function solarDeclination( century ) {

		return Math.asin( Math.sin( obliquityCorrection( century ) ) * Math.sin( solarApparentLongitude( century ) ) );

	}

	function solarApparentLongitude(century) {

		return solarTrueLongitude( century ) - ( 0.00569 + 0.00478 * Math.sin( ( 125.04 - 1934.136 * century ) * d2r ) ) * d2r;

	}

	function solarTrueLongitude( century ) {

		return solarGeometricMeanLongitude( century ) + solarEquationOfCenter( century );

	}

	function solarGeometricMeanAnomaly( century ) {

		return ( 357.52911 + century * ( 35999.05029 - 0.0001537 * century ) ) * d2r;

	}

	function solarGeometricMeanLongitude( century ) {

		var l = ( 280.46646 + century * ( 36000.76983 + century * 0.0003032 ) ) % 360;

		return ( l < 0 ? l + 360 : l ) / 180 * pi;

	}

	function solarEquationOfCenter( century ) {

		var m = solarGeometricMeanAnomaly( century );

		return ( Math.sin( m ) * ( 1.914602 - century * ( 0.004817 + 0.000014 * century ) )
			+ Math.sin( m + m ) * (0.019993 - 0.000101 * century )
			+ Math.sin(m + m + m) * 0.000289) * d2r;

	}

	function obliquityCorrection( century ) {

		return meanObliquityOfEcliptic( century ) + 0.00256 * Math.cos( ( 125.04 - 1934.136 * century ) * d2r ) * d2r;

	}

	function meanObliquityOfEcliptic( century ) {

		return ( 23 + ( 26 + ( 21.448 - century * ( 46.8150 + century * ( 0.00059 - century * 0.001813 ) ) ) / 60 ) / 60 ) * d2r;

	}

	function eccentricityEarthOrbit( century ) {

// https://en.wikipedia.org/wiki/Orbital_eccentricity

		return 0.016708634 - century * ( 0.000042037 + 0.0000001267 * century );

	}

