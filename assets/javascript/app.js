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

  var queryURL ='https://cors-anywhere.herokuapp.com/https://www.eventbriteapi.com/v3/events/search?location.longitude=-87.623177&location.latitude=41.881832&expand=venue'
  $.ajax({
      url: queryURL,
      method: "GET", // Headers 
      headers: {
          "Authorization": "Bearer EAYDY5OXKROACFETSIVZ",
      }
      // Loop to grab date out of the eventbrite.com array and post info o the DOM
  }).then(function (response) {
      console.log(response.events);
      for (var i = 0; i < response.events.length; i++) {
          var name = $("<h1>").text(response.events[i].name.text);
          var descrip = $("<p>").text(response.events[i].description.text).addClass(
              "center1 truncate");
          descrip.attr('data-index', i);
          var more = $('<button>').text('See More');
          more.attr({
              'data-index': i,
              'data-more': false
          });
          var start = $("<p>").text(moment(response.events[i].start.local, 'YYYY-MM-DD')
              .format("DD/MM/YY hh:mm A"));
          var url = $("<a href>").text(response.events[i].url);
          var address = $("<p>").text(response.events[i].venue.address
              .localized_address_display);
         $("#liveInformation").append(name, start, descrip, more, address);

      }

      //  Loop to show more button for each event

      $("button").click(function () {
          var index = $(this).data('index');
          var isMore = $(this).data('more');
          var descripText = $(".center1").eq(index);
          if (isMore) {
              descripText.addClass('truncate');
              $(this).data('more', false);
          } else {
              descripText.removeClass('truncate');
              $(this).data('more', true);
          }

      });

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