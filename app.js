// Get real-time info for numerous variables.
let valueSearch = document.getElementById('valueSearch');
let city = document.getElementById('city');
let temperature = document.getElementById('temperature');
let description = document.querySelector('.description');
let cloud = document.getElementById('clouds');
let humidity = document.getElementById('humidity');
// let pressure = document.getElementById('pressure');
let wind = document.getElementById('wind')
let form = document.querySelector('form');
let main = document.querySelector('main');

form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevents automatic refresh of website
    if (valueSearch.value != ''){
        searchWeather();
    }
})
let id = "f4431a8be9b9bfe5d1a0c35da9953709";
let url = 'https://api.openweathermap.org/data/2.5/weather?units=imperial&appid='+id;
const searchWeather = () => {
    fetch(url + '&q=' + valueSearch.value)
    .then(responsive => responsive.json())
    .then(data => {
        console.log(data);
        if(data.cod == 200) {
            city.querySelector('figcaption').innerText = data.name;
            // city.querySelector('img').src="https://flagsapi.com/"+data.sys.country+"/shiny/32.png"

            temperature.querySelector('img').src="https://openweathermap.org/img/wn/" + data.weather[0].icon + "@4x.png";
            temperature.querySelector('figcaption span').innerText = Math.round(data.main.temp) + "°F";
            description.innerText = capitalizeWords(data.weather[0].description);
            clouds.innerText = data.clouds.all;
            humidity.innerText = data.main.humidity;
            wind.innerText = Math.round(data.wind.speed);
            // pressure.innerText = data.main.pressure;

            // Determine the appropriate weather icon to show.
            if (data.weather[0].main == "Clouds") {
                temperature.querySelector('img').src = "https://openweathermap.org/img/wn/02d@4x.png";
            } else if (data.weather[0].main == "Clear") {
                temperature.querySelector('img').src = "https://openweathermap.org/img/wn/01d@4x.png";
            } else if (data.weather[0].main == "Rain") {
                temperature.querySelector('img').src = "https://openweathermap.org/img/wn/10d@4x.png";
            } else if (data.weather[0].main == "Drizzle") {
                temperature.querySelector('img').src = "https://openweathermap.org/img/wn/09d@4x.png";
            } else if (data.weather[0].main == "Mist") {
                temperature.querySelector('img').src = "https://openweathermap.org/img/wn/50d@4x.png";
            } else if (data.weather[0].main == "Snow") {
                temperature.querySelector('img').src = "https://openweathermap.org/img/wn/13d@4x.png";
            }

            // document.querySelector("main").style.display = "none";


        } else {
            // false
            main.classList.add('error'); 
            setTimeout(() => {
                main.classList.remove('error');
            }, 1000);
        }
        valueSearch.value = '';
    })

}

function capitalizeWords(str) {
    return str.split(' ').map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' ');
}

const initApp = () => {
    valueSearch.value = 'Stockton';
    searchWeather();
}
initApp();