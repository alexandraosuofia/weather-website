const searchEl = document.querySelector('.search');
const countryEl = document.querySelector('.country');
const tempEl = document.querySelector('.temp-bold');
const descEl = document.querySelector('.desc');
const timeEl = document.querySelector('#time');
const ampm = document.querySelector('#am-pm');
const dateEl = document.querySelector('#date');
const currentWeatherItemsEl = document.querySelector('#current-weather-items');
const forecastEl = document.querySelector('#forecast');
const feelsLikeEl = document.querySelector('.feels-like-bold');
const sunriseEl = document.querySelector('.sunrise-icon');
const sunsetEl = document.querySelector('.sunset-icon');
const humidityEl = document.querySelector('#humidity');
const windSpeedEl = document.querySelector('#wind-speed');


const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September','October', 'November', 'December'];


setInterval(() => {
    const time = new Date();
const day = time.getDay();
const date = time.getDate();
const month = time.getMonth();
const hour = time.getHours();
const hourIn12HourFormat = hour >=13 ? hour % 12 : hour;
const minutes = time.getMinutes();
const minutesIn2DigitFormat = minutes < 10 ? "0" + minutes : minutes;
const ampm = hour >= 12 ? 'PM' : 'AM';

timeEl.textContent = hourIn12HourFormat + ":" + minutesIn2DigitFormat + "" + ampm;

dateEl.textContent = days[day] + ", " + date + " " + months[month]


}, 1000);

let long;
let lat;
// const apiKey = `fba797a699414bfaaa7142041231509`

// const apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${long}&exclude=hourly,minutely&appid=${apiKey}`;



function getWeatherData(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {

      long = position.coords.longitude;
      lat = position.coords.latitude;      

 const key = '11ebd6d28fe217ca1c37ad9a788d063b';
const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=${key}`;

fetch(api)
           .then(response => response.json())
.then(data => {
    console.log(data);
    showWeatherData(data);
}) 

        }); 

       

        }
    }
    getWeatherData();


function showWeatherData(data){
    // let {humidity, temperature, feels_like, pressure, sunrise, sunset} = data.main;
    countryEl.textContent = data.name;
    descEl.textContent = data.weather[0].description;
humidityEl.textContent = data.main.humidity + "%";
tempEl.textContent = data.main.temp;
feelsLikeEl.textContent = data.main.feels_like;
windSpeedEl.textContent = data.wind.speed + "mph";
sunriseEl.textContent = `${window.moment(data.sys.sunrise * 1000).format('HH:mm a')}`;
sunsetEl.textContent = `${window.moment(data.sys.sunset * 1000).format('HH:mm a')}`;


// sunriseEl.textContent = data.sys.sunrise(${window.moment.format('HH:mm:a')});

}
