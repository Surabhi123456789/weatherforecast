// const userTab= document.querySelector("[data-userWeather]");
// const searchTab= document.querySelector("[data-searchWeather]");
// const grantAccessContainer = document.querySelector(" .grant-location-container");
// const grantAccessBtn = document.querySelector("[data-grantAcces]");
// const searchForm= document.querySelector("[data-searchForm]");
// const searchBox = document.querySelector("[ data-searchInput]");
// const loadingIcon = document.querySelector( " .loading-container");
// const userInfoContainer = document.querySelector(".weather-info-container");

// let oldTab = userTab;
// const API_KEY = "1904075a6ce301603ecb363ff5a7047f";
// oldTab.classList.add("current-tab");


// function switchTab(clickedTab){
//    if(clickedTab !=oldTab){
//       oldTab.classList.remove("current-tab");
//       oldTab=clickedTab;
//       oldTab.classList.add("current-tab");
       
//        if(!searchForm.classList.contains("active")){
//          userInfoContainer.classList.remove("active");
//          grantAccessContainer.classList.remove("active");
//          searchForm.classList.add("active");
//        }
//        else{
//         // mai phle search wale tab per tha ab your weather pe visible krna hai 
//         searchForm.classList.remove("active");
//         userInfoContainer.classList.remove("active");
//         // ab mai your weather wale tab pe aa gaya hu toh weather bhi display karna hoga 
//         //  for coordinates  if we have saved  them there .
//         getformSessionStorage();
//        }
//    }
  
// };
// userTab.addEventListener("click",()=>{
//     switchTab(userTab);
// });
// searchTab.addEventListener("click",()=>{
//     switchTab(searchTab);
// });


// // check if coordinates are already present in sessionn storage
// function getformSessionStorage(){
//      const localCoordinates = sessionStorage.getItem("user-coordinates");
//      if(!localCoordinates){
//         //  agar local coordinates ni mile toh 
//         grantAccessContainer.classList.add("active");
//      }
//      else{
//         // json string ko json object me convert kr rhe h
//         const coordinates=  JSON.parse(localCoordinates);
//         fetchUserWeatherInfo(coordinates);
//      }
// }
//  async function fetchUserWeatherInfo(coordinates){
//     const {lat, lon}= coordinates;
//     // make grant container invisible
//     grantAccessContainer.classList.remove("active");
//     // make loader visible
//     loadingIcon.classList.add("active");
//     // api call
//     try{
//         const response= await fetch(`http://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API_KEY}&units=metric`);
//         const data= await response.json();
//         loadingIcon.classList.remove("active");
//         userInfoContainer.classList.add("active");
//         renderWeatherInfo(data);
//     }
//     catch(err){
//              loadingIcon.classList.remove("active");
//              console.error(err);
//     }


// }
// function renderWeatherInfo(weatherInfo){
//     // firstly , we have to faecth the elements
//     const cityName = document.querySelector("[data-cityName]");
//     const cityIcon = document.querySelector("[data-countyIcon]");
//     const weatherDes = document.querySelector("[data-weatherDesc]");
//     const weatherIcon = document.querySelector("[data-weatherIcon]");
//     const temp = document.querySelector("[data-temp]");
//     const windSpeed = document.querySelector("[data-windspeed]");
//     const humidity = document.querySelector("[data-humidity]");
//     const cloud = document.querySelector("[ data-cloud]");

//     // fetch values from weatherinfo object and put it ui element
//     cityName.innerText = weatherInfo?.name;
//     cityIcon.src = `https://flagcdn.com/${weatherInfo?.sys?.country.toLowerCase()}.svg`;
//     weatherDes.innerText  = weatherInfo?.weather?.[0]?.description;
//     weatherIcon.src = ` https://openweathermap.org/img/wn/${weatherInfo?.weather?.[0]?.icon}@2x.png  `;
//     temp.innerText = `${weatherInfo?.main?.temp}°C`; 
//     windSpeed.innerText = `${weatherInfo?.main?.wind?.speed} m/s`;
//     humidity.innerText= `${weatherInfo?.main?.humidity} %`;
//     cloud.innerText = `${weatherInfo?.clouds?.all}%`;
    
// }
// function getLocation(){
//     if(navigator.geolocation){
//         navigator.geolocation.getCurrentPosition(showPosition);

//     }
//     else{
//         //    show an   alert for no geoloaction
//         alert("Geolocation is not supported by this browser.");
//     }
// }
// function showPosition(position){
//    const userCoordinates = {
//     lat: position.coords.latitude,
//     lon : position.coords.longitude,
//     }
//     sessionStorage.setItem("user-coordinates", JSON.stringify(userCoordinates));
//     fetchUserWeatherInfo(userCoordinates);
// }
// grantAccessBtn.addEventListener("click", getLocation);

// searchForm.addEventListener("submit",(e)=>{
//    e.preventDefault();
// //    let cityName = searchBox.ariaValueMax;
//    let cityName = searchBox.value;
//    if(cityName === ""){
//     return;
//    }
//    else{
//      fetchSearchWeatherInfo(cityName);
//    }
// })

// async function fetchSearchWeatherInfo(city){
//     loadingIcon.classList.add("active");
//     userInfoContainer.classList.remove("active");
//     grantAccessContainer.classList.remove("active");

//     try{
//         const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q={city}&appid={API_KEY}`);
//         const data = await response.json();
//         loadingIcon.classList.remove("active");
//         userInfoContainer.classList.add("active");
//         renderWeatherInfo(data);

//     }
//     catch(err){
//         loadingIcon.classList.remove("active");
//         console.error(err);
//     }
// }

const userTab = document.querySelector("[data-userWeather]");
const searchTab = document.querySelector("[data-searchWeather]");
const grantAccessContainer = document.querySelector(".grant-location-container");
const grantAccessBtn = document.querySelector("[data-grantAccess]");
const searchForm = document.querySelector("[data-searchForm]");
const searchBox = document.querySelector("[data-searchInput]");
const loadingIcon = document.querySelector(".loading-container");
const userInfoContainer = document.querySelector(".weather-info-container");

let oldTab = userTab;
const API_KEY = "1904075a6ce301603ecb363ff5a7047f";
oldTab.classList.add("current-tab");

function switchTab(clickedTab) {
    if (clickedTab != oldTab) {
        oldTab.classList.remove("current-tab");
        oldTab = clickedTab;
        oldTab.classList.add("current-tab");

        if (!searchForm.classList.contains("active")) {
            userInfoContainer.classList.remove("active");
            grantAccessContainer.classList.remove("active");
            searchForm.classList.add("active");
        } else {
            searchForm.classList.remove("active");
            userInfoContainer.classList.remove("active");
            getFromSessionStorage();
        }
    }
}

userTab.addEventListener("click", () => {
    switchTab(userTab);
});

searchTab.addEventListener("click", () => {
    switchTab(searchTab);
});

function getFromSessionStorage() {
    const localCoordinates = sessionStorage.getItem("user-coordinates");
    if (!localCoordinates) {
        grantAccessContainer.classList.add("active");
    } else {
        const coordinates = JSON.parse(localCoordinates);
        fetchUserWeatherInfo(coordinates);
    }
}

async function fetchUserWeatherInfo(coordinates) {
    const { lat, lon } = coordinates;
    grantAccessContainer.classList.remove("active");
    loadingIcon.classList.add("active");

    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);
        const data = await response.json();
        loadingIcon.classList.remove("active");
        userInfoContainer.classList.add("active");
        renderWeatherInfo(data);
    } catch (err) {
        loadingIcon.classList.remove("active");
        console.error(err);
    }
}

function renderWeatherInfo(weatherInfo) {
    const cityName = document.querySelector("[data-cityName]");
    const cityIcon = document.querySelector("[data-countyIcon]");
    const weatherDes = document.querySelector("[data-weatherDesc]");
    const weatherIcon = document.querySelector("[data-weatherIcon]");
    const temp = document.querySelector("[data-temp]");
    const windSpeed = document.querySelector("[data-windspeed]");
    const humidity = document.querySelector("[data-humidity]");
    const cloud = document.querySelector("[data-cloud]");

    cityName.innerText = weatherInfo?.name;
    cityIcon.src = `https://flagcdn.com/${weatherInfo?.sys?.country.toLowerCase()}.svg`;
    weatherDes.innerText = weatherInfo?.weather?.[0]?.description;
    weatherIcon.src = `https://openweathermap.org/img/wn/${weatherInfo?.weather?.[0]?.icon}@2x.png`;
    temp.innerText = `${weatherInfo?.main?.temp}°C`;
    windSpeed.innerText = `${weatherInfo?.wind?.speed} m/s`;
    humidity.innerText = `${weatherInfo?.main?.humidity} %`;
    cloud.innerText = `${weatherInfo?.clouds?.all}%`;
}

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}

function showPosition(position) {
    const userCoordinates = {
        lat: position.coords.latitude,
        lon: position.coords.longitude,
    };
    sessionStorage.setItem("user-coordinates", JSON.stringify(userCoordinates));
    fetchUserWeatherInfo(userCoordinates);
}

grantAccessBtn.addEventListener("click", getLocation);

searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const cityName = searchBox.value;
    if (cityName === "") {
        return;
    } else {
        fetchSearchWeatherInfo(cityName);
    }
});

async function fetchSearchWeatherInfo(city) {
    loadingIcon.classList.add("active");
    userInfoContainer.classList.remove("active");
    grantAccessContainer.classList.remove("active");

    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
        const data = await response.json();
        loadingIcon.classList.remove("active");
        userInfoContainer.classList.add("active");
        renderWeatherInfo(data);
    } catch (err) {
        loadingIcon.classList.remove("active");
        console.error(err);
    }
}
