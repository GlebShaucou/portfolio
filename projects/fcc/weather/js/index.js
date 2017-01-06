$(document).ready(function() {
  var prot = "http://api.openweathermap.org/data/2.5/weather?q=";
  var metric = "&units=metric";
  var key = "&appid=5ff2a415d812de8f6334dffd8b190590";
  var locUrl = "http://ipinfo.io";

  var weatherUrlObj = {
    clearSky: "http://i73.fastpic.ru/big/2016/0227/5a/6a78ba813233d07bb71e64ddaa9e745a.jpg",
    clearSkyNight: "http://i73.fastpic.ru/big/2016/0227/08/a314164e5c58c513e36cac55185fc708.jpg",
    clouds: "http://i75.fastpic.ru/big/2016/0227/de/7b95a927d4e37bd16bd88a9d87a054de.jpg",
    cloudsNight: "http://i76.fastpic.ru/big/2016/0227/49/af8cad38101ddf2096c0e1991d105749.jpg",
    rain: "http://i74.fastpic.ru/big/2016/0227/96/ee30fe44cc92fefd5cd4f5b0d853c096.jpg",
    rainNight: "http://i76.fastpic.ru/big/2016/0227/da/3d871d8efa43d180e6592b7886ea68da.jpg",
    snow: "http://i76.fastpic.ru/big/2016/0227/85/22059c5528ce538bf2064941836b0185.jpg",
    snowNight: "http://i74.fastpic.ru/big/2016/0227/7f/4a9946100728c881a0549dda67f8527f.jpg",
    mist: "http://i76.fastpic.ru/big/2016/0227/6a/113193dd6fef096ba770198c8cf3eb6a.jpg",
    mistNight: "http://i73.fastpic.ru/big/2016/0227/15/759894c2c5574d99765166636e3edc15.jpg"
  };

  function backgroundImg(icon) {
    if (icon == "01d") {
      $("body").css("background-image", "url(" + weatherUrlObj.clearSky + ")");
    } else if (icon == "01n") {
      $("body").css("background-image", "url(" + weatherUrlObj.clearSkyNight + ")");
    } else if (icon == "02d" || icon == "03d" || icon == "04d") {
      $("body").css("background-image", "url(" + weatherUrlObj.clouds + ")");
    } else if (icon == "02n" || icon == "03n" || icon == "04n") {
      $("body").css("background-image", "url(" + weatherUrlObj.cloudsNight + ")");
    } else if (icon == "09d" || icon == "10d") {
      $("body").css("background-image", "url(" + weatherUrlObj.rain + ")");
      $("body").css("color", "#ffffff");
      $(".link").css("color", "#ffffff");
    } else if (icon == "09n" || icon == "10n") {
      $("body").css("background-image", "url(" + weatherUrlObj.rainNight + ")");
    } else if (icon == "13d") {
      $("body").css("background-image", "url(" + weatherUrlObj.snow + ")");
      $("body").css("color", "#000000");
    } else if (icon == "13n") {
      $("body").css("background-image", "url(" + weatherUrlObj.snowNight + ")");
    } else if (icon == "50d") {
      $("body").css("background-image", "url(" + weatherUrlObj.mist + ")");
      $("body").css("color", "#f9c700");
    } else if (icon == "50n") {
      $("body").css("background-image", "url(" + weatherUrlObj.mistNight + ")");
    }
  }

  function windDirection(degree) {
    if (degree >= 11.25 && degree <= 33.75) {
      return "NNE";
    } else if (degree >= 33.76 && degree <= 56.25) {
      return "NE";
    } else if (degree >= 56.26 && degree <= 78.75) {
      return "ENE";
    } else if (degree >= 78.76 && degree <= 101.25) {
      return "E";
    } else if (degree >= 101.26 && degree <= 123.75) {
      return "ESE";
    } else if (degree >= 123.76 && degree <= 146.25) {
      return "SE";
    } else if (degree >= 146.26 && degree <= 168.75) {
      return "SSE";
    } else if (degree >= 168.76 && degree <= 191.25) {
      return "S";
    } else if (degree >= 191.26 && degree <= 213.75) {
      return "SSW";
    } else if (degree >= 213.76 && degree <= 236.25) {
      return "SW";
    } else if (degree >= 236.26 && degree <= 258.75) {
      return "WSW";
    } else if (degree >= 258.76 && degree <= 281.25) {
      return "W";
    } else if (degree >= 281.26 && degree <= 303.75) {
      return "WNW";
    } else if (degree >= 303.76 && degree <= 326.25) {
      return "NW";
    } else if (degree >= 326.26 && degree <= 348.75) {
      return "NNW";
    } else if (degree >= 348.75 || degree <= 11.25) {
      return "N";
    }
  }

  $.getJSON(locUrl)
  .then(function(data) {
    //var new = "http://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=5ff2a415d812de8f6334dffd8b190590";
    console.log(data.loc);
    var city = data.city + "," + data.country.toLowerCase();
    var url = prot + city + metric + key;
    return url;
  })
  .then($.getJSON)
  .then(function(data) {
      var date = new Date();
      $("#place").html(data.name + ", " + data.sys.country + "<br>");
      $("#date").html(date + "<br>");
      $("#temp").html(Math.round(data.main.temp));
      $("#scale").html("C");
      $("#weather").html(data.weather[0].main + "<br>" + "<img src='http://openweathermap.org/img/w/" + data.weather[0].icon + ".png'><br>");
      backgroundImg(data.weather[0].icon);
      $("#pressure").html("Barometric Pressure: " + Math.round(data.main.pressure) + " hPa<br>");
      $("#humidity").html("Humidity: " + data.main.humidity + " %<br>");
      $("#windspeed").html("Wind speed: " + data.wind.speed + " m/s<br>");
      var d = windDirection(data.wind.deg);
      $("#winddirection").html("Wind direction: " + d);
    });  

  $("#scale").click(function() {
    if ($("#scale").html() == "C") {
      var f = ($("#temp").html() * 9) / 5 + 32;
      $("#temp").html(f);
      $("#scale").html("F");
    } else {
      var c = (($("#temp").html() - 32) * 5) / 9;
      $("#temp").html(Math.round(c));
      $("#scale").html("C");
    }
  });
});