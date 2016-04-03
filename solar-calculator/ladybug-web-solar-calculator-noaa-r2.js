
	var latitude = 37.796;
	var longitude = -122.398;

	var date = new Date();

	var monthList = [

		{name: "January",   numdays: 31, abbr: "Jan"},
		{name: "February",  numdays: 28, abbr: "Feb"},
		{name: "March",     numdays: 31, abbr: "Mar"},
		{name: "April",     numdays: 30, abbr: "Apr"},
		{name: "May",       numdays: 31, abbr: "May"},
		{name: "June",      numdays: 30, abbr: "Jun"},
		{name: "July",      numdays: 31, abbr: "Jul"},
		{name: "August",    numdays: 31, abbr: "Aug"},
		{name: "September", numdays: 30, abbr: "Sep"},
		{name: "October",   numdays: 31, abbr: "Oct"},
		{name: "November",  numdays: 30, abbr: "Nov"},
		{name: "December",  numdays: 31, abbr: "Dec"},

	];

	var pi = Math.PI;
	var d2r = pi / 180, r2d = 180 / pi;  // degrees / radians


	function getJulianDay( date ) {

		var year, month, day, A, B, julianDay;

		year = date.getFullYear();
		month = date.getMonth() + 1;
		day = date.getDate();

		if ( ( isLeapYear( year ) ) && ( month === 2 ) ) {

			if ( day > 29 ) { day = 29; }

		} else {

			if ( day > monthList[ month - 1 ].numdays ) { day = monthList[ month - 1 ].numdays }

		}

		if ( month <= 2 ) {

			year -= 1;
			month += 12;

		}

		A = Math.floor( year / 100 );

		B = 2 - A + Math.floor( A / 4 );

		julianDay = Math.floor( 365.25 * ( year + 4716 ) ) + Math.floor( 30.6001 * ( month + 1 ) ) + day + B - 1524.5;

		return julianDay;  // JD ~ number of days since


		function isLeapYear( year ) {

			return ( ( year % 4 === 0 && year % 100 !== 0 ) || year % 400 === 0 );

		}

	}

	function getJulianCentury( julianDay ) {

		var julianCentury;

		julianCentury = ( julianDay - 2451545.0 ) / 36525.0;

		return julianCentury;  // T ~ decimal fraction of 100 years of Julian days

	}

	function getTimeLocal( date ) { // JavaScript date

		var minutes;

		minutes = ( date.getHours() - 1 ) * 60 + date.getMinutes() + date.getSeconds() / 60.0;

		return minutes;

	}



	function getSunPosition( century, localTime, latitude, longitude, timeZone ) {

		var equationOfTime;
		var azimuth;
		var altitude;

		equationOfTime = getEquationOfTime( century );

		var theta = getSunDeclination( century );

		var solarTimeFix = equationOfTime + 4.0 * longitude - 60.0 * timeZone;

		var trueSolarTime = localTime + solarTimeFix;

		while ( trueSolarTime > 1440 ) { trueSolarTime -= 1440; }

		var hourAngle = trueSolarTime / 4.0 - 180.0;

		if ( hourAngle < -180 ) { hourAngle += 360.0; }

		var csz = Math.sin( latitude * d2r ) * Math.sin( theta * d2r ) + Math.cos( latitude * d2r ) * Math.cos( theta * d2r ) * Math.cos( hourAngle * d2r );

		if ( csz > 1.0 ) {

			csz = 1.0;

		} else if ( csz < -1.0 ) { 

			csz = -1.0;

		}

		var zenith = Math.acos( csz ) * r2d;

		var azDenom = ( Math.cos( latitude * d2r ) * Math.sin( zenith * d2r ) );

		if (Math.abs(azDenom) > 0.001) {

			azRad = ( ( Math.sin( latitude * d2r ) * Math.cos( zenith * d2r ) ) - Math.sin( theta * d2r ) ) / azDenom;

			if ( Math.abs( azRad ) > 1.0 ) {

				if (azRad < 0) {

					azRad = -1.0;

				} else {

					azRad = 1.0;

				}

			}

			azimuth = 180.0 - Math.acos( azRad ) * r2d;

			if ( hourAngle > 0.0 ) { azimuth = -azimuth; }

		} else {

			if ( latitude > 0.0 ) {

				azimuth = 180.0;

			} else { 

			azimuth = 0.0;

			}

		}

		if ( azimuth < 0.0 ) { azimuth += 360.0; }

		var exoatmElevation = 90.0 - zenith;

// Atmospheric Refraction correction

		if ( exoatmElevation > 85.0 ) {

			var refractionCorrection = 0.0;

		} else {

			var te = Math.tan( exoatmElevation * d2r );

			if ( exoatmElevation > 5.0 ) {

				var refractionCorrection = 58.1 / te - 0.07 / Math.pow( te, 3 ) + 0.000086 / Math.pow( te, 5 );

			} else if (exoatmElevation > -0.575) {

				var refractionCorrection = 1735.0 + exoatmElevation * (-518.2 + exoatmElevation * (103.4 + exoatmElevation * (-12.79 + exoatmElevation * 0.711) ) );

			} else {

				var refractionCorrection = -20.774 / te;

			}

			refractionCorrection = refractionCorrection / 3600.0;

		}

		var solarZen = zenith - refractionCorrection;

		altitude = 90.0 - solarZen;

		return [ azimuth, altitude ];

	}


// Equation of time start

	function getEquationOfTime( century ) {

		var obliquityCorrection = getObliquityCorrection( century ); // e or epsilon ~ in degrees
		var geometricMeanLongitudeSun = getGeometricMeanLongitudeSun( century );  // l0 ~ in degrees
		var eccentricityEarthOrbit = getEccentricityEarthOrbit( century );  // e ~ unitless
		var geometricMeanAnomalySun = getGeometricMeanAnomalySun( century ); // M or m ~ in degrees

		var y = Math.pow( Math.tan( obliquityCorrection * d2r / 2.0 ), 2 ); // what is y?

		var sin2l0 = Math.sin( 2.0 * geometricMeanLongitudeSun * d2r );
		var sinm   = Math.sin( geometricMeanAnomalySun * d2r );
		var cos2l0 = Math.cos( 2.0 * geometricMeanLongitudeSun * d2r );
		var sin4l0 = Math.sin( 4.0 * geometricMeanLongitudeSun * d2r );
		var sin2m  = Math.sin( 2.0 * geometricMeanAnomalySun * d2r );

		var e = eccentricityEarthOrbit;

		var equationOfTime = y * sin2l0 - 2.0 * e * sinm + 4.0 * e * y * sinm * cos2l0 - 0.5 * y * y * sin4l0 - 1.25 * e * e * sin2m;

		return 4.0 * equationOfTime * r2d;  // in minutes of time

	}

	function getObliquityCorrection( century ) {

		var meanObliquityOfEcliptic = getMeanObliquityOfEcliptic( century ); // e0
		var omega = 125.04 - 1934.136 * century;
		var obliquityCorrection = meanObliquityOfEcliptic + 0.00256 * Math.cos( omega * d2r );

		return obliquityCorrection;  // e or epsilon ~ in degrees

	}

	function getMeanObliquityOfEcliptic( century ) {

		var seconds = 21.448 - century * ( 46.8150 + century * ( 0.00059 - century * ( 0.001813 ) ) );
		var meanObliquityOfEcliptic = 23.0 + ( 26.0 + ( seconds / 60.0 ) ) / 60.0;

		return meanObliquityOfEcliptic;  // e0 or epsilon0 ~ in degrees

	}

	function getEccentricityEarthOrbit( century ) {

		var eccentricityEarthOrbit = 0.016708634 - century * (0.000042037 + 0.0000001267 * century );

		return eccentricityEarthOrbit;  // e ~ unitless

	}


	function getGeometricMeanLongitudeSun( century ) {

		var geometricMeanLongitudeSun = 280.46646 + century * ( 36000.76983 + century * 0.0003032 );

		while ( geometricMeanLongitudeSun > 360.0 ) {

			geometricMeanLongitudeSun -= 360.0;

		}

		while ( geometricMeanLongitudeSun < 0.0 ) {

			geometricMeanLongitudeSun += 360.0;

		}

		return geometricMeanLongitudeSun;  // l0 ~ in degrees

	}


	function getGeometricMeanAnomalySun( century ) {

		var geometricMeanAnomalySun = 357.52911 + century * ( 35999.05029 - 0.0001537 * century );

		return geometricMeanAnomalySun; // M ~ in degrees

	}

// Equation of time end


	function getSunDeclination( century ) {

		var e = getObliquityCorrection( century ); //  in Eq of Time
		var lambda = getSunApparentLongitude( century );

		var sint = Math.sin( e * d2r ) * Math.sin( lambda * d2r );

		var sunDeclination = Math.asin( sint ) * r2d;

		return sunDeclination;  // theta ~ in degrees

	}


	function getSunApparentLongitude( century ) {

		var o = getSunTrueLongitude( century );
		var omega = 125.04 - 1934.136 * century;
		var sunApparentLongitude = o - 0.00569 - 0.00478 * Math.sin( omega * d2r );

		return sunApparentLongitude; // lambda ~ in degrees

	}

	function getSunTrueLongitude( century ) {

		var geometricMeanLongitudeSun = getGeometricMeanLongitudeSun( century ); // in Eq of time
		var c = getSunEquationOfCenter( century );
		var O = geometricMeanLongitudeSun + c;

		return O; // in degrees

	}

	function getSunEquationOfCenter( century ) {

		var geometricMeanAnomalySun = getGeometricMeanAnomalySun( century ); // in Eq of time
		var mrad = geometricMeanAnomalySun * d2r;
		var sinm = Math.sin( mrad );
		var sin2m = Math.sin( 2 * mrad );
		var sin3m = Math.sin( 3 * mrad );
		var sunEquationOfCenter = sinm * ( 1.914602 - century * ( 0.004817 + 0.000014 * century ) ) + 
			sin2m * ( 0.019993 - 0.000101 *  century ) + sin3m * 0.000289;

		return sunEquationOfCenter;  // C ~ in degrees

	}
