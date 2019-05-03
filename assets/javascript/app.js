function weather() {

  var location = document.getElementById("location");
  var apiKey = 'd53c269236c7ba100d14569e5957fee0';
  var url = 'https://api.forecast.io/forecast/';

  navigator.geolocation.getCurrentPosition(success, error);

  function success(position) {
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;

    //   location.innerHTML = 'Latitude is ' + latitude + '° <br> Longitude is ' + longitude + '°';

    $.getJSON(url + apiKey + "/" + latitude + "," + longitude + "?callback=?", function (data) {
      $('#temp').html(data.currently.temperature + '° F');
      $('#minutely').html(data.minutely.summary);
    });
  }

  function error() {
    location.innerHTML = "Unable to retrieve your location, please allow location usage.";
  }

  // location.innerHTML = "Locating...";
}

function events() {

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
    for (var i = 0; i < response.events.length; i++) {
      console.log('*******DESCRIPTION', response.events[i].description.text);
      console.log('**********NAME', response.events[i].name.text);
      // var descrip = $("<p>").text(response.events[i].description.text);
      // var name = $("<h1>").text(response.events[i].name.text);
      var name = $("<h1>").text(response.events[i].name.text);
      var descrip = $("<p>").text(response.events[i].description.text);
      var start = $("<p>").text(response.events[i].start.local);
      var summart = $("<p>").text(response.events[i].start.summary);
      var address = $("<p>").text(response.events[i].venue.address.localized_address_display);
      var venuename = $("<p>").text(response.events[i].venue.name);
      $("#liveInformation").append(name, start, descrip,address,venuename);
      // $('#output').text(response.events[1]);
    }
  })
}

weather();
events();

! function (d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (!d.getElementById(id)) {
    js = d.createElement(s);
    js.id = id;
    js.src = 'https://weatherwidget.io/js/widget.min.js';
    fjs.parentNode.insertBefore(js, fjs);
  }
}(document, 'script', 'weatherwidget-io-js');

! function (d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (!d.getElementById(id)) {
    js = d.createElement(s);
    js.id = id;
    js.src = 'https://weatherwidget.io/js/widget.min.js';
    fjs.parentNode.insertBefore(js, fjs);
  }
}(document, 'script', 'weatherwidget-io-js');

$(document).ready(function () {

  $('.color-choose input').on('click', function () {
    var shirtColor = $(this).attr('data-image');

    $('.active').removeClass('active');
    $('.left-column img[data-image = ' + shirtColor + ']').addClass('active');
    $(this).addClass('active');
  });

});