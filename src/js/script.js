let apiKey = "07a94735ca9c859666ef9a52077a2b7b";

function displayData(data) {
    console.log(data)
    document.querySelector(".city").innerHTML = `Temperatura em ${data.name}`;
    document.querySelector(".temperature").innerHTML = `${Math.floor(data.main.temp)}ºC`
    document.querySelector(".description img").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
    document.querySelector(".description p").innerHTML = `${data.weather[0].description}`
    document.querySelector(".humidity").innerHTML = `Umidade: ${data.main.humidity}%`
}

async function searchCity(city) {
    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&lang=pt_br&units=metric`)
        .then(response => response.json());

    displayData(data);
}

function handleClick() {
    const city = document.querySelector(".input-city").value.trim();
    if (city !== "") {
        searchCity(city);
    } else {
        alert("Por favor, insira o nome da cidade.");
    }
}

async function handleKeyPress(event) {
    if (event.key === 'Enter') {
        const city = document.querySelector(".input-city").value.trim();
        if (city !== "") {
            searchCity(city);
        } else {
            alert("Por favor, insira o nome da cidade.");
        }
    }
}
