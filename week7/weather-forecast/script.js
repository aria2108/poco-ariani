const container = document.querySelector(".container"),
inputCity = document.querySelector(".input-city"),
inputField = inputCity.querySelector("input"),
weatherBtn = inputCity.querySelector("button"),
weatherInfo = container.querySelector(".weather-info");
infoLoc = weatherInfo.querySelector(".info-loc")




let api;

weatherBtn.addEventListener ("click", () => {
    if(inputField.value != "") {
        requestAPI (inputField.value);
    }else{
        alert ("input field can't be empty")
    }
})

function requestAPI (city) {
    api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=a181a2b2ac7a65dc152f76827f189aa2`;
    console.log(city);
    fetchData()
}

function fetchData() {
    fetch(api)
    .then(response => response.json())
    .then(result => weatherText(result))
}

function weatherText (info) {
    if (info.cod == "404") {
        alert ((inputField.value) + " isn't a valid city name");
    } else {
        const city = info.name;
        const {description, id} = info.weather[0];
        const {temp} = info.main;

        weatherInfo.querySelector(".info-loc").innerText = city;
        weatherInfo.querySelector(".temp .numb").innerText = Math.floor(temp);
        weatherInfo.querySelector(".detail").innerText = description;
    }
}