    
//  First draft of event api.
//  Event api is usung Eventbrite.com api   
   
//    // code for cors error 
//    var queryURL = 'https://cors-anywhere.herokuapp.com/https://www.eventbriteapi.com/v3/events/search?location.longitude=-87.623177&location.latitude=41.881832&expand=venue'
//    $.ajax({
//        url: queryURL,
//        method: "GET", // Headers 
//        headers: {
//            "Authorization": "Bearer EAYDY5OXKROACFETSIVZ",
//        }
//    }).then(function (response) {
//        console.log(response);

//    })


// Second draft od EventBright.com api

$("#searchbtn").on("click", function (event) {

    event.preventDefault();

    var queryURL =
        'https://cors-anywhere.herokuapp.com/https://www.eventbriteapi.com/v3/events/search?location.longitude=-87.623177&location.latitude=41.881832&expand=venue'
    $.ajax({
        url: queryURL,
        method: "GET", // Headers 
        headers: {
            "Authorization": "Bearer EAYDY5OXKROACFETSIVZ",
        }
    }).then(function (response) {
        console.log(response.events);
        for (var i = 0; i < response.events.length; i++){
            console.log('*******DESCRIPTION', response.events[i].description.text);
            console.log('**********NAME', response.events[i].name.text);
            var descrip = $("<p>").text(response.events[i].description.text);
            var name = $("<h1>").text(response.events[i].name.text);
            $("#output").append(name, descrip);
            // $('#output').text(response.events[1]);
        }

        

    })


})
   
   
   
   
   