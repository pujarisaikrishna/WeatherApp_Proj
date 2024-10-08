const apikey = '739a53cfadb10444a70843951432e0a8';
const apiurl = 'http://api.openweathermap.org/data/2.5/weather';

const locationInput = document.getElementById('locationInput');
const searchButton = document.getElementById('searchButton');
const locationElement = document.getElementById('location'); 
const temperatureElement = document.getElementById('temperature');
const descriptionElement = document.getElementById('description');


searchButton.addEventListener('click', () =>{
    // alert('hello')
    const location = locationInput.value;
    if(location){
        fetchWeather(location);
    }
});

function fetchWeather(location){
    const url = `${apiurl}?q=${location}&appid=${apikey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data =>{
            locationElement.textContent = data.name;
            temperatureElement.textContent = `${Math.round(data.main.temp)}°C`;
            descriptionElement.textContent = data.weather[0].description;
            
        })
        .catch(error =>{
            console.error('Error fetching weather data:', error);
        });
}
