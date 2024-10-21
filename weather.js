console.log("hello");
const api_key=" 1904075a6ce301603ecb363ff5a7047f ";


function renderWeatherInfo(data){
    let newpara=document.createElement('p');
    newpara.textContent=  `${data?.main?.temp.toFixed(2)} degreec`
    document.body.appendChild(newpara);
}


async function showweather(){
    try{
    // let latitude=15.333;
    // let longitude=74.003
    let city= "goa";


    const response = await fetch();

    const data= (await response).json();
    console.log("weather data :->",data);
    // above code se output object ke format me ayega
    //  ui pe show karayenge output iske liye hm ek paragrapgh tag create krenge then api k code ko json formatter pe jake data check krenge 
    renderWeatherInfo(data);
    }
    catch(err){
        //    handle the error here
    }

}
// above code se hmare screen pe temp show ho jayega


// below code is also for api calling basis of longitude and latitude
async function getCustomWeatherDetails(){
    try{
    let latitude=15.333;
    let longitude=74.003;
    // fetch ke andar api call kar denge 
    let response = await fetch();
    let data = await response.json();
    console.log(data);
    }
    catch(err){
        console.log("error found",err);
    }

}





// `${data?.main?.temp.toFixed(2)}°C`;