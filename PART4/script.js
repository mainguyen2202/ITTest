// weatherApp.js

// API config
const API_URL = 'https://api.example.com/weather';
// const API_KEY = 'YOUR_OPENWEATHERMAP_API_KEY'; // Thay thế bằng API key của bạn

// Helper function to fetch weather data
const getWeatherData = async (city) => {
  try {
    const response = await fetch(`${API_URL}?city=${city}`);
    // const response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
    if (!response.ok) {
      throw new Error(`Error fetching weather data: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error;
  }
};
// Function to display weather information
const displayWeatherInfo = (weatherData, weatherInfoElement) => {
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
};


// Weather component
const cityInput = document.getElementById('city-input');
const weatherInfo = document.getElementById('weather-info');

const fetchWeather = async () => {
  const city = cityInput.value;
  if (!city) {
    weatherInfo.innerHTML = 'Please enter a city name.';
    return;
  }

  try {
    const weatherData = await getWeatherData(city);
    displayWeatherInfo(weatherData, weatherInfo);
  } catch (error) {
    weatherInfo.innerHTML = 'Error: Unable to fetch weather data.';
  }
};

// Event listener
document.getElementById('fetch-weather').addEventListener('click', fetchWeather);