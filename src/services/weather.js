import axios from 'axios';

export const getWeatherByCity = async (city) => {
  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`;
    const response = await axios.get(url);
    return response.data;
  } catch(e) {
    alert('Cidade não encontrada');
  }
}
