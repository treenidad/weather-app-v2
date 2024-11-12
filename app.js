// Get real-time info for numerous variables.
let valueSearch = document.getElementById('valueSearch');
let city = document.getElementById('city')
let temperature = document.getElementById('temperature');
let description = document.querySelector('.description');
let cloud = document.getElementById('clouds');
let humidity = document.getElementById('humidity');
let pressure = document.getElementById('pressure');
let form = document.querySelector('form');
form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevents automatic refresh of website
    if (valueSearch.value != ''){
        searchWeather();
    }
})
let id = "f4431a8be9b9bfe5d1a0c35da9953709"
// let url = 'https://api.openweathermap.org/data/2.5/weather?units=imperial&q='
let url = 'https://api.openweathermap.org/data/3.0/weather?units=metric&appid='+id;
const searchWeather = () => {
    fetch(url)
    .then(responsive => responsive.json())
    .then(data => {
        console.log(data);
    })
}
