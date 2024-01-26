function weather(){
  let a = document.getElementById("city-name")
  let city_name= a.innerHTML=document.getElementById("city-input").value
  
let url1 = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=c02bf2eadb97dc2cbd79ff86238c3e18`
fetch(url1)
  .then((response) =>(
    response.json()   
)).then((response) => (
  document.getElementById("wind-value").innerHTML=response.wind.speed+" km/s",
  document.getElementById("city-name").innerHTML=response.name,
  document.getElementById("humidity-value").innerHTML=response.main.humidity+" %",
  document.getElementById("airpressure-value").innerHTML=response.main.pressure+ " PS",
  document.getElementById("weather-cloud").innerHTML=response.weather[0].description,
  document.getElementById("temp-value").innerHTML=response.main.temp+" °F",
  document.getElementById("timezone-value").innerHTML=response.timezone
//   if (temp < 15) {
//     console.log("It's cold");
    
//     document.body.style.background = 'blue';
//     videoElement.src = './Assets/cold.mp4';
    
// } else if (temp >= 15 && temp < 25) {
//     console.log("It's warm");
//     if (parseInt(cloud) > 24) {
//         videoElement.src = './Assets/rainy.mp4';
//         console.log("It's rainy");
        
//     } else {
//         videoElement.src = './Assets/spring.mp4';
//         console.log("It's warm");
        
//     }
// } else {
//     console.log("It's hot");
//     // Chan
))
}
weather()