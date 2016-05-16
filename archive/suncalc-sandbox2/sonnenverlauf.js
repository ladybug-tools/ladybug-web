SunCalc2 = (function() {
	var J1970 = 2440588,
		J2000 = 2451545,
		deg2rad = Math.PI / 180,
		M0 = 357.5291 * deg2rad,
		M1 = 0.98560028 * deg2rad,
		J0 = 0.0009,
		J1 = 0.0053,
		J2 = -0.0069,
		C1 = 1.9148 * deg2rad,
		C2 = 0.0200 * deg2rad,
		C3 = 0.0003 * deg2rad,
		P = 102.9372 * deg2rad,
		e = 23.45 * deg2rad,
		th0 = 280.1600 * deg2rad,
		th1 = 360.9856235 * deg2rad,
		h0 = -0.83 * deg2rad, //sunset angle
		d0 = 0.53 * deg2rad, //sun diameter
		h1 = -6 * deg2rad, //nautical twilight angle
		h2 = -12 * deg2rad, //astronomical twilight angle
		h3 = -18 * deg2rad //darkness angle
		msInDay = 1000 * 60 * 60 * 24;

	function dateToJulianDate( date ) {
		return date.valueOf() / msInDay - 0.5 + J1970;
	}

	function julianDateToDate( j ) {
		return new Date((j + 0.5 - J1970) * msInDay);
	}

	function getJulianCycle( J, lw ) {
		return Math.round(J - J2000 - J0 - lw/(2 * Math.PI));
	}

	function getApproxSolarTransit( Ht, lw, n ) {
		return J2000 + J0 + (Ht + lw)/(2 * Math.PI) + n;
	}

	function getSolarMeanAnomaly( Js ) {
		return M0 + M1 * (Js - J2000);
	}

	function getEquationOfCenter( M ) {
		return C1 * Math.sin(M) + C2 * Math.sin(2 * M) + C3 * Math.sin(3 * M);
	}

	function getEclipticLongitude( M, C ) {
		return M + P + C + Math.PI;
	}

	function getSolarTransit( Js, M, Lsun ) {
		return Js + (J1 * Math.sin(M)) + (J2 * Math.sin(2 * Lsun));
	}

	function getSunDeclination( Lsun ) {
		return Math.asin(Math.sin(Lsun) * Math.sin(e));
	}

	function getRightAscension( Lsun ) {
		return Math.atan2(Math.sin(Lsun) * Math.cos(e), Math.cos(Lsun));
	}

	function getSiderealTime( J, lw ) {
		return th0 + th1 * (J - J2000) - lw;
	}

	function getAzimuth( th, a, phi, d ) {
		var H = th - a;
		return Math.atan2(Math.sin(H), Math.cos(H) * Math.sin(phi) -
				Math.tan(d) * Math.cos(phi));
	}

	function getAltitude( th, a, phi, d ) {
		var H = th - a;
		return Math.asin(Math.sin(phi) * Math.sin(d) +
				Math.cos(phi) * Math.cos(d) * Math.cos(H));
	}

	function getHourAngle( h, phi, d ) {
		return Math.acos((Math.sin(h) - Math.sin(phi) * Math.sin(d)) /
				(Math.cos(phi) * Math.cos(d)));
	}

	function getSunsetJulianDate( w0, M, Lsun, lw, n ) {
		return getSolarTransit(getApproxSolarTransit(w0, lw, n), M, Lsun);
	}

	function getSunriseJulianDate( Jtransit, Jset ) {
		return Jtransit - (Jset - Jtransit);
	}

	function getSunPosition( J, lw, phi ) {
		var M = getSolarMeanAnomaly(J),
			C = getEquationOfCenter(M),
			Lsun = getEclipticLongitude(M, C),
			d = getSunDeclination(Lsun),
			a = getRightAscension(Lsun),
			th = getSiderealTime(J, lw);

		return {
			azimuth: getAzimuth( th, a, phi, d ),
			altitude: getAltitude( th, a, phi, d )
		};
	}

	return {
		getDayInfo: function( date, lat, lng, detailed ) {
			var lw = -lng * deg2rad,
				phi = lat * deg2rad,
				J = dateToJulianDate(date);

			var n = getJulianCycle(J, lw),
				Js = getApproxSolarTransit(0, lw, n),
				M = getSolarMeanAnomaly(Js),
				C = getEquationOfCenter(M),
				Lsun = getEclipticLongitude(M, C),
				d = getSunDeclination(Lsun),
				Jtransit = getSolarTransit(Js, M, Lsun),
				w0 = getHourAngle(h0, phi, d),
				w1 = getHourAngle(h0 + d0, phi, d),
				Jset = getSunsetJulianDate(w0, M, Lsun, lw, n),
				Jsetstart = getSunsetJulianDate(w1, M, Lsun, lw, n),
				Jrise = getSunriseJulianDate(Jtransit, Jset),
				Jriseend = getSunriseJulianDate(Jtransit, Jsetstart),
				w2 = getHourAngle(h1, phi, d),
				Jnau = getSunsetJulianDate(w2, M, Lsun, lw, n),
				Jciv2 = getSunriseJulianDate(Jtransit, Jnau);

			var info = {
				dawn: julianDateToDate(Jciv2),
				sunrise: {
					start: julianDateToDate(Jrise),
					end: julianDateToDate(Jriseend)
				},
				transit: julianDateToDate(Jtransit),
				sunset: {
					start: julianDateToDate(Jsetstart),
					end: julianDateToDate(Jset)
				},
				dusk: julianDateToDate(Jnau)
			};

			if (detailed) {
				var w3 = getHourAngle(h2, phi, d),
					w4 = getHourAngle(h3, phi, d),
					Jastro = getSunsetJulianDate(w3, M, Lsun, lw, n),
					Jdark = getSunsetJulianDate(w4, M, Lsun, lw, n),
					Jnau2 = getSunriseJulianDate(Jtransit, Jastro),
					Jastro2 = getSunriseJulianDate(Jtransit, Jdark);

				info.morningTwilight = {
					astronomical: {
						start: julianDateToDate(Jastro2),
						end: julianDateToDate(Jnau2)
					},
					nautical: {
						start: julianDateToDate(Jnau2),
						end: julianDateToDate(Jciv2)
					},
					civil: {
						start: julianDateToDate(Jciv2),
						end: julianDateToDate(Jrise)
					}
				};
				info.nightTwilight = {
					civil: {
						start: julianDateToDate(Jset),
						end: julianDateToDate(Jnau)
					},
					nautical: {
						start: julianDateToDate(Jnau),
						end: julianDateToDate(Jastro)
					},
					astronomical: {
						start: julianDateToDate(Jastro),
						end: julianDateToDate(Jdark)
					}
				};
			}

			return info;
		},

		getSunPosition: function( date, lat, lng ) {
			return getSunPosition( dateToJulianDate(date), -lng * deg2rad, lat * deg2rad );
		}
	};
})();

/*
var di = SunCalc.getDayInfo(data, lat, lng);
var sunrisePos = SunCalc.getSunPosition(di.sunrise.start, lat, lng);
var sunsetPos = SunCalc.getSunPosition(di.sunset.end, lat, lng);
*/