const API_KEY = "e0f54c0e932f4a1dbbe110338262004"
const city = "Bilbao";
const BASE_URL = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&aqi=no`;

async function getWeather() {
    const cityInfo = document.getElementById("city-info");
    const weatherIcon = document.getElementById("weather-icon");
    const weatherData = document.getElementById("weather-data");

    if (!cityInfo || !weatherIcon || !weatherData) {
        console.warn("Weather elements not found in DOM");
        return;
    }

    try {
        const response = await fetch(BASE_URL);
        if (!response.ok) {
            throw new Error(`Error en la petición: ${response.status}`);
        }

        const data = await response.json();
        displayWeather(data, cityInfo, weatherIcon, weatherData);

    } catch (error) {
        console.error("Hubo un problema al obtener los datos:", error);
        cityInfo.innerHTML = "<p>No se pudo cargar el clima ☁️</p>";
    }
}

function displayWeather(data, cityInfo, weatherIcon, weatherData) {
    const { location, current } = data;

    cityInfo.innerHTML = "";
    weatherIcon.innerHTML = "";
    weatherData.innerHTML = "";

    const locationElement = document.createElement("h3");
    locationElement.innerHTML = `${location.name.toUpperCase()}, ${location.country.toUpperCase()}`;
    cityInfo.appendChild(locationElement);

    const conditionElement = document.createElement("p");
    conditionElement.innerHTML = `${current.temp_c}°C`;
    weatherIcon.appendChild(conditionElement);

    const imageElement = document.createElement("img");
    imageElement.src = `https:${current.condition.icon}`;
    weatherIcon.appendChild(imageElement);

    weatherData.innerHTML = `
        <p>Prec: ${current.precip_mm}mm</p>
        <p>Hum: ${current.humidity}%</p>
        <p>Viento: ${current.wind_kph}km/h</p>
    `;
}

export default getWeather;