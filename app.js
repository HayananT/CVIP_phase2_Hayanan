document.getElementById("searchButton").addEventListener("click", function () {
  const location = document.getElementById("location").value;
  const apiKey = "d5b2df812356cf2476c860f208b068cc"; // Replace 'YOUR_API_KEY' with your actual API key
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

  // Fetch data from the weather API
  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }
      return response.json();
    })
    .then((data) => {
      // Display weather data
      document.getElementById("cityName").textContent = data.name;
      document.getElementById(
        "temperature"
      ).textContent = `Temperature: ${data.main.temp}°C`;
      document.getElementById(
        "description"
      ).textContent = `Description: ${data.weather[0].description}`;
      document.getElementById(
        "humidity"
      ).textContent = `Humidity: ${data.main.humidity}%`;
      document.getElementById(
        "windSpeed"
      ).textContent = `Wind Speed: ${data.wind.speed} m/s`;
    })
    .catch((error) => {
      // Handle errors
      console.error("Error fetching data:", error);
    });
});
