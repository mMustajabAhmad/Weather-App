const content = document.getElementById("detail");
const country = document.getElementById("country");
const temp = document.getElementById("temp");
const mintemp = document.getElementById("mintemp");
const main = document.getElementById("main");

content.style.visibility = "hidden";

function displayWeather() {
    var cityInput = document.getElementById("city").value;
    console.log(cityInput);

    const URL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityInput + "&appid=128c726569c1c99b287bfa682efbee5b&units=metric";
    const xhr = new XMLHttpRequest();
    xhr.open("GET", URL, true);
    xhr.send();
    xhr.onload = () => {
        const obj = JSON.parse(xhr.responseText);
        console.log(obj);
        country.innerHTML = obj.sys.country;
        temp.innerHTML = obj.main.temp + " C";
        mintemp.innerHTML = obj.main.temp_min + " C";
        main.innerHTML = obj.weather[0].main;
        content.style.visibility = "visible";
    }
}