const searchEl = document.querySelector('.search');
const countryEl = document.querySelector('.country');
const tempEl = document.querySelector('.temp');
const descEl = document.querySelector('.desc');
const timeEl = document.querySelector('#time');
const ampm = document.querySelector('#am-pm');
const dateEl = document.querySelector('.date');
const currentWeatherItemsEl = document.querySelector('#current-weather-items');
const forecastEl = document.querySelector('#forecast');
const feelsLikeEl = document.querySelector('feels-like-bold');
const airQualityEl = document.querySelector('.air-quality-icon');
const uvEl = document.querySelector('uv-index-icon');

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

timeEl.textContent = hourIn12HourFormat + ":" + minutesIn2DigitFormat + "" + ampm

}, 1000);

