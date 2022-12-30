let sessionTimeout = 1; // in hours
let loginDuration = new Date();
loginDuration.setTime(
	loginDuration.getTime() + sessionTimeout * 60 * 60 * 1000
);
Document.cookie = `CrewCentreSession=Valid; ${loginDuration.toUTCString()}; path=/`;

if (document.cookie.indexOf("CrewCentreSession=Valid") == -1) {
	location.href = "/login.html";
}
