import axios from 'axios';

const API_KEY = 'e40fb0f5c4f7331037d889501d46d792'; 
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

const formatWeatherData = (data) => {
  return {
    id: data.id,
    name: data.name,
    country: data.sys.country,
    temperature: Math.round(data.main.temp),
    feelsLike: Math.round(data.main.feels_like),
    humidity: data.main.humidity,
    windSpeed: Math.round(data.wind.speed * 10) / 10,
    description: data.weather[0].description,
    icon: data.weather[0].icon,
    timestamp: new Date(data.dt * 1000)
  };
};

export const getWeatherByCity = async (city) => {
    try {
      const response = await axios.get(
        `${BASE_URL}/weather?q=${city}&units=metric&appid=${API_KEY}`
      );
      formatWeatherData(response.data);
      return response.data;
    } catch (error) {
      throw error;
    }
  };