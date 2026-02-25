const API_KEY = "7530f7e9e09f280db2608238fd3cc445";
const weatherDiv = document.getElementById("weather");

const city = "London";

const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

axios.get(url)
  .then((response) => {
    console.log(response.data);

    const data = response.data;

    weatherDiv.innerHTML = `
      <h2>${data.name}</h2>
      <p>${data.weather[0].description}</p>
      <h3>${data.main.temp} °C</h3>
      <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" />
    `;
  })
  .catch((error) => {
    console.error(error);
    weatherDiv.innerHTML = "<p>Failed to load weather data</p>";
  });