

const searchbox = document.querySelector(".search input");
const searchboxBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon")
async function checkWeather(city) {
    const apiUrl =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=99c4f1ff299ddee0e90d55b79e21125c&units=metric`;
     const response = await fetch(apiUrl);
     if(response.status===404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
     }else{
        document.querySelector(".error").style.display="none";
         let data = await response.json();
     
        console.log(data);
        const sunrise = new Date(data.sys.sunrise * 1000).toLocaleTimeString();
        const sunset = new Date(data.sys.sunset * 1000).toLocaleTimeString();
     document.querySelector(".city").innerHTML =data.name||"Kigali";
     document.querySelector(".temp").innerHTML =`${Math.round(data.main.temp)} °C`;
     document.querySelector(".humidity").innerHTML =`${data.main.humidity}%`;
     document.querySelector(".wind").innerHTML =`${data.wind.speed} km/hr`;
     document.querySelector(".sun-rise").innerHTML =`${sunrise}`;
     document.querySelector(".sun-set").innerHTML =`${sunset}`;

     if(data.weather[0].main=="Clouds"){
          weatherIcon.src ="images/clouds.png"
     }else if(data.weather[0].main=="Clear"){
         weatherIcon.src ="images/clear.png"
     }else if(data.weather[0].main=="Rain"){
         weatherIcon.src ="images/rain.png"
     }else if(data.weather[0].main=="Drizzle"){
         weatherIcon.src ="images/drizzle.png"
     }else if(data.weather[0].main=="Mist"){
         weatherIcon.src ="images/mist.png"
     }

     document.querySelector(".weather").style.display="block"
     }
    
}



searchboxBtn.addEventListener("click",()=>{
checkWeather(searchbox.value);
})

