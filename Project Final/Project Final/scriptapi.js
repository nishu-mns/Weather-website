let weather = { 
    apiKey: "66c0a25f29581738dc32d4ee9737dcc2",
    fetchWeather: function (city) {
      fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
          city +
          "&units=metric&appid=" +
          this.apiKey
      )
        .then((response) => {
          if (!response.ok) {
            alert("There does not exist such city.");
          }
          return response.json();
        })
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function (data) {
      const { name } = data;
      const { icon, description } = data.weather[0];
      const { temp, humidity } = data.main;
      const { speed } = data.wind;
      document.querySelector(".city").innerText = "Weather in " + name;
      document.querySelector(".description").innerText = description;
      if(description=='Scattered Clouds'){
        document.getElementById('.description').style.backgroundImage = "url('https://wxmanreno.files.wordpress.com/2016/05/clouds.gif')";    
           
      }
      document.querySelector(".temp").innerText = "Temperature: "+temp + "°C";
      document.querySelector(".humidity").innerText =
        "Humidity: " + humidity + "%";
      document.querySelector(".wind").innerText =
        "Wind speed: " + speed + " km/h";
      document.querySelector(".weather").classList.remove("loading");    
    },
    search: function () {
      this.fetchWeather(document.querySelector(".search-bar").value);
    },
  }; 

  document.querySelector("#butt").addEventListener("click", function () {
    weather.search();
  });
    