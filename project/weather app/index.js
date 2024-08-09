const API_KEY="05dd40c0382bd989b46b5cb16e3d0005";

async function showWeather(){
    let city="goa";

    const response= await fetch('https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}');
    const data= await response.json();
    console.log("weather data:-> " , data);

    
}
