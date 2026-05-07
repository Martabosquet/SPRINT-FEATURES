const API_KEY = "e0f54c0e932f4a1dbbe110338262004"
const city = "Bilbao";
const BASE_URL = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&aqi=no`;

const cityInfo = document.getElementById("city-info");
const weatherIcon = document.getElementById("weather-icon");
const weatherData = document.getElementById("weather-data");

async function getWeather() {
    if (!cityInfo || !weatherIcon || !weatherData) return;

    try {
        const response = await fetch(BASE_URL);
        if (!response.ok) {
            throw new Error(`Error en la petición: ${response.status}`);
        }

        const data = await response.json();

        console.log(data);
        displayWeather(data);

    } catch (error) {
        console.error("Hubo un problema al obtener los datos:", error);
    }
}

function displayWeather(data) {
    const { location, current } = data;

    const locationElement = document.createElement("h3");
    locationElement.innerHTML = `${location.name.toUpperCase()}, ${location.country.toUpperCase()}`;
    cityInfo.appendChild(locationElement);

    const conditionElement = document.createElement("p");
    conditionElement.innerHTML = `${current.temp_c}°C`;
    weatherIcon.appendChild(conditionElement);

    const imageElement = document.createElement("img");
    imageElement.src = `https:${current.condition.icon}`;
    weatherIcon.appendChild(imageElement);

    weatherData.innerHTML += `
        <p>Precipitaciones: ${current.precip_mm} mm</p>
        <p>Humedad: ${current.humidity}%</p>
        <p>Viento: ${current.wind_kph} km/h</p>
    `;
}

export default getWeather;