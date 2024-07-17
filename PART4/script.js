import { API_URL } from './config.js';

// API config
// require('dotenv').config();
// const API_URL = process.env.API_URL;


// Helper function to fetch weather data
async function getWeatherData(city) {
  try {
    const response = await fetch(`${API_URL}?city=${city}`);
    if (!response.ok) {
      throw new Error(`Error fetching weather data: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error;
  }
}

// Function to display weather information
function displayWeatherInfo(weatherData, weatherInfoElement) {
  const { name, weather, main } = weatherData;
  const weatherDescription = weather[0].description;
  const temperature = main.temp;
  const humidity = main.humidity;

  const weatherHtml = `
    <h2>${name}</h2>
    <p>${weatherDescription}</p>
    <p>Temperature: ${temperature}°C</p>
    <p>Humidity: ${humidity}%</p>
  `;
  weatherInfoElement.innerHTML = weatherHtml;
}

// Weather component
const cityInput = document.getElementById('city-input');
const weatherInfo = document.getElementById('weather-info');

async function fetchWeather() {
  const city = cityInput.value;
  if (!city) {
    weatherInfo.innerHTML = 'Please enter a city name.';
    return;
  }

  try {
    const weatherData = await getWeatherData(city);
    displayWeatherInfo(weatherData, weatherInfo);
  } catch (error) {
    weatherInfo.innerHTML = `Error: ${error.message}`;
  }
}

// Event listener
document.getElementById('fetch-weather').addEventListener('click', fetchWeather);