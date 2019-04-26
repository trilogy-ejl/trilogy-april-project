   // code for cors error 
   var queryURL = 'https://cors-anywhere.herokuapp.com/https://www.eventbriteapi.com/v3/events/search?location.longitude=-87.623177&location.latitude=41.881832&expand=venue'
   $.ajax({
       url: queryURL,
       method: "GET", // Headers 
       headers: {
           "Authorization": "Bearer EAYDY5OXKROACFETSIVZ",
       }
   }).then(function (response) {
       console.log(response);

       




   })