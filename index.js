
const apiUrl ="https://api.openweathermap.org/data/2.5/weather?q=kigali&appid=99c4f1ff299ddee0e90d55b79e21125c&units=metric";

async function checkWeather() {
     const response = await fetch(apiUrl);
     let data = await response.json();

     console.log(data);
}

checkWeather();
