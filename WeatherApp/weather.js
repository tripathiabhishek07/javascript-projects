const apiKey="4e7ee25402a355d4dcb111514395437b";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


// document.addEventListener("DOMContentLoaded", ()=>{
    const searchBox = document.querySelector(".search input");
    const searchBtn = document.querySelector(".search button");
    const weatherIcon = document.querySelector(".weather-icon");

    searchBtn.addEventListener("click", async function() {
        // Make sure to include the `await` keyword when calling the asynchronous function
        await checkWeather(searchBox.value);
    })
// });

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();

    if(response.status == 404){
        document.querySelector(".weather").style.display = "none";
        document.querySelector(".error").style.display = "block";
    }
    else{
        if (data.weather[0].main == "Clouds"){
            weatherIcon.src="images/clouds.png";
            // document.querySelector(".weather-icon").src = "images/clouds.png";
        }
        else if (data.weather[0].main == "Clear"){
            // document.querySelector(".weather-icon").src = "images/clear.png";
            weatherIcon.src="images/clear.png";
        }
        else if (data.weather[0].main == "Snow"){
            // document.querySelector(".weather-icon").src = "images/snow.png";
            weatherIcon.src="images/snow.png";
        }
        else if (data.weather[0].main == "Mist"){
            // document.querySelector(".weather-icon").src = "images/mist.png";
            weatherIcon.src="images/mist.png";
        }
        else if (data.weather[0].main == "Drizzle"){
            // document.querySelector(".weather-icon").src = "images/drizzle.png";
            weatherIcon.src="images/drizzle.png";
        }
    }


    console.log(data);

    document.querySelector(".city").innerHTML = data.name ;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/hr";
   
   
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
    

}




