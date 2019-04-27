//Firebase chat Start
var config = {
  apiKey: "AIzaSyDEgmLkFdfvOJ6DQwlwPxC2moA9EZ-ufww",
  authDomain: "trilogy-chat-f6ad1.firebaseapp.com",
  databaseURL: "https://trilogy-chat-f6ad1.firebaseio.com",
  projectId: "trilogy-chat-f6ad1",
  storageBucket: "trilogy-chat-f6ad1.appspot.com",
  messagingSenderId: "487090093192"
};

firebase.initializeApp(config);
var database = firebase.database();
getChat();

$("#chatSubmit").on("click", function(){
  pushChat();
});

function UpdateChatBox(chat, time){
  var TnC = time + " " + chat;
  $("#chatbox").append($("<p>").text(TnC));
}

function pushChat(){
  var dChat = $("#userInput").val();
  console.log("Current Text in chat is:")
  console.log(dChat);
  var dTime = moment().format("HH:mm");
  console.log("Current Time is: ")
  console.log(dTime);
  $("#userInput").val("");
  database.ref().push({
    'dChat': dChat,
    'dTime': dTime
  });
};

function getChat(){
  database.ref().on("child_added", function(child){
    var dChat = child.val().dChat;
    var dTime = child.val().dTime;
    console.log(dChat);
    console.log(dTime);
    UpdateChatBox(dChat, dTime);
  });

}
//Firebase chat end

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

function createElements (resName, resAddress, resLocality, resRating){
var row =  $("<tr>");
row.append($("<td>").text(resName));
row.append($("<td>").text(resAddress));
row.append($("<td>").text(resLocality));
row.append($("<td>").text(resRating));
$("#Zplaces").append(row);
}


//Zoomato API Start
$("#Zsubmit").on("click", function(){
var address;
var query;
var radius;
address = $("#userLocation").val();
query = $("#foodPref").val();
radius = 1609.34 * $("#milesPref").val();
console.log("Address Input is: ")
console.log(address)
console.log("Food Pref is:")
console.log(query);
console.log("Miles preference is")
console.log(radius / 1609.34);
console.log(radius);

var Zurl = "https://developers.zomato.com/api/v2.1/search?entity_id="+ address +"&q="+ query +"&count=10&lat=87.6298&lon=41.8781&radius="+ radius +"&sort=real_distance";
$.ajax({
  url: Zurl,
  headers: {'user-key': 'f92328b88e65fe94874fbec64cb80a2a'},
  method: "GET"
})
  .then(function(Zresponse) {
   console.log(Zresponse);
   var restaurants = Zresponse.restaurants;

  for (var i = 0; i < restaurants.length; i++){
    var resName = (restaurants[i].restaurant.name);
    var resAddress = (restaurants[i].restaurant.location.address);
    var resLocality = (restaurants[i].restaurant.location.locality);
    var resRating;
    var aggregateRating = restaurants[i].restaurant.user_rating.aggregate_rating
    if ( aggregateRating == 0){
      resRating =  restaurants[i].restaurant.user_rating.rating_text;
    } else{
      resRating = aggregateRating;
    }
    createElements(resName, resAddress, resLocality, resRating);
  }
  });
});
//Zoomato API End