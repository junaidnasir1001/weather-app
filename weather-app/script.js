async function fetchWeather() {
    const searchInput = document.getElementById('search').value;
    const apiKey = '73d426ac690af1c13cfe16613422a65e'; // Make sure this API key is correctly copied and active
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput}&appid=${apiKey}&units=metric`;
  
    try {
      const response = await fetch(url);
      const data = await response.json();
      
      if (response.ok) {
        document.getElementById('weather-data').innerHTML = `
          <h2>${data.name}</h2>
          <p>Temperature: ${data.main.temp}°C</p>
          <p>Weather: ${data.weather[0].main}</p>
          <p>Description: ${data.weather[0].description}</p>
        `;
        document.getElementById('weather-data').style.display = 'block';
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      console.error('Failed to fetch weather data:', error);
      document.getElementById('weather-data').innerHTML = `<p>Error: ${error.message}</p>`;
    }
  }
  