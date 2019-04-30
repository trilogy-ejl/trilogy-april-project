function weather() {

    var location = document.getElementById("location");
    var apiKey = 'd53c269236c7ba100d14569e5957fee0';
    var url = 'https://api.forecast.io/forecast/';
  
    navigator.geolocation.getCurrentPosition(success, error);
  
    function success(position) {
      latitude = position.coords.latitude;
      longitude = position.coords.longitude;
  
    //   location.innerHTML = 'Latitude is ' + latitude + '° <br> Longitude is ' + longitude + '°';
  
       $.getJSON(url + apiKey + "/" + latitude + "," + longitude + "?callback=?", function(data) {
        $('#temp').html(data.currently.temperature + '° F');
        $('#minutely').html(data.minutely.summary);
      });
    }
  
    function error() {
      location.innerHTML = "Unable to retrieve your location, please allow location usage.";
    }
  
    // location.innerHTML = "Locating...";
  }
  
  weather();

!function (d, s, id) { var js, fjs = d.getElementsByTagName(s)[0]; if (!d.getElementById(id)) { js = d.createElement(s); js.id = id; js.src = 'https://weatherwidget.io/js/widget.min.js'; fjs.parentNode.insertBefore(js, fjs); } }(document, 'script', 'weatherwidget-io-js');

$(document).ready(function() {

  $('.color-choose input').on('click', function() {
      var shirtColor = $(this).attr('data-image');

      $('.active').removeClass('active');
      $('.left-column img[data-image = ' + shirtColor + ']').addClass('active');
      $(this).addClass('active');
  });

});
