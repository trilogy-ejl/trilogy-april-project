
 //Open Weather Map API code starts here
 //NOTE: 60 calls a minute max, weather API updates every 3 hours.
 var owpKey = "276e65cee16932f5d1ff28e21441e141";
 var  queryURL= "https://api.openweathermap.org/data/2.5/forecast?q=Chicago,us&appid=" + owpKey;

function toFahrenheit (kelvin){
    var tempeture = ((kelvin - 273.15) * (9/5) + 32).toFixed(2);
    return tempeture;
}

function toCelsius (kelvin){
    var tempeture = (kelvin - 273.15).toFixed(2);
    return tempeture;
}
 $.ajax({
   url: queryURL,
   method: "GET"
 })
   // We store all of the retrieved data inside of an object called "response"
   .then(function(response) {
     var cityInfo = response.city;
     var cityForcast = response.list; //This is were each 3 hour instance of up to 5 days stores it's data.
     console.log(response);
     console.log(cityInfo.name);
     var tempeture = cityForcast[0].main.temp
     console.log(tempeture);
     console.log(toFahrenheit(tempeture));
     console.log(toCelsius(tempeture));
     
   });
//Weather Weather Map API code ends here