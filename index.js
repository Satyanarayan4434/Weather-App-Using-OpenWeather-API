let inputBox = document.getElementById('inputBox');
let searchButton = document.getElementById('searchButton');
let weatherImg = document.getElementById('weather-img');
let degree = document.getElementById('degree');
let weatherStatus = document.getElementById('weatherStatus');
let humidity = document.getElementById('humidity');
let wind = document.getElementById('wind');
let locationError = document.getElementById('locationError');
let weatherBody = document.getElementById('weatherBody');


async function checkWeather(city){
    const apiKey = "d20acb8bb5cec00914bdc9dadae5fcb7";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`;
    const weatherData = await fetch(`${apiUrl}`).then(response => response.json());
    
    if(weatherData.cod === '404'){
        locationError.style.display = "flex";
        weatherBody.style.display = "none";
        return;
    }
    else
        locationError.style.display = "none";
        weatherBody.style.display = "flex";

    degree.innerHTML = weatherData.main.temp + `°C`;
    weatherStatus.innerHTML = weatherData.weather[0].description;
    humidity.innerHTML = weatherData.main.humidity + `%`;
    wind.innerHTML = weatherData.wind.speed + ` Km/H`;
    switch(weatherData.weather[0].main){
        case 'Clouds' : 
            weatherImg.src = "./assets/cloud.png";
            break;
        case 'Clear' : 
            weatherImg.src = "./assets/clear.png";
            break;
        case 'Mist' : 
            weatherImg.src = "./assets/mist.png";
            break;
        case 'Rain' :
             weatherImg.src = "./assets/rain.png";
             break;
        case 'Snow' :
             weatherImg.src = "./assets/snow.png";
             break;
    }
}
 
searchButton.addEventListener("click",function(){
    checkWeather(inputBox.value);
})