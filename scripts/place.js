// Display current year and last modified date
document.getElementById('lastModified').textContent = document.lastModified;

// Wind chill calculation
function calculateWindChill(temp, windSpeed) {
    if (temp <= 10 && windSpeed > 4.8) {
        return (13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16)).toFixed(2) + " °C";
    } else if (temp <= 50 && windSpeed > 3) {
        return (35.74 + 0.6215 * temp - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temp * Math.pow(windSpeed, 0.16)).toFixed(2) + " °F";
    } else {
        return "N/A";
    }
}

// Static values for temperature and wind speed
const temperature = 25; // in °C
const windSpeed = 10; // in km/h

document.getElementById('windChill').textContent = calculateWindChill(temperature, windSpeed);