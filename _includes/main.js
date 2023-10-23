document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('browserInfo').textContent = navigator.userAgent;
    document.getElementById('osInfo').textContent = navigator.platform;
    document.getElementById('dateInfo').textContent = new Date().toDateString();
    document.getElementById('timeInfo').textContent = new Date().toLocaleTimeString();
    document.getElementById('timezoneInfo').textContent = Intl.DateTimeFormat().resolvedOptions().timeZone;
    document.getElementById('locationInfo').textContent = "User's Location (Not Available)";
    document.getElementById('languageInfo').textContent = navigator.language;
    document.getElementById('resolutionInfo').textContent = `${window.innerWidth}x${window.innerHeight}`;
    document.getElementById('referralInfo').textContent = document.referrer || "Direct Visit";
    document.getElementById('userStatusInfo').textContent = "User Status (Not Available)";
});