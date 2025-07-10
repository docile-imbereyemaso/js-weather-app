

const searchbox = document.querySelector(".search input");
const searchboxBtn = document.querySelector(".search button");
async function checkWeather(city) {
    const apiUrl =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=99c4f1ff299ddee0e90d55b79e21125c&units=metric`;
     const response = await fetch(apiUrl);
     let data = await response.json();

     document.querySelector(".city").innerHTML =data.name||"Kigali";
     document.querySelector(".temp").innerHTML =`${Math.round(data.main.temp)} °C`;
     document.querySelector(".humidity").innerHTML =`${data.main.humidity}%`;
     document.querySelector(".wind").innerHTML =`${data.wind.speed} km/hr`;
}

searchboxBtn.addEventListener("click",()=>{
checkWeather(searchbox.value);
})

