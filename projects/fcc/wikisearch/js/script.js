$(document).ready(function() {
  var action = "action=opensearch&search=";
  var format = "&limit=max&format=json";

  function displayResults(data) {
    for (var i = 0; i < data[1].length; i++) {
      $(".result").append("<a href='" + data[3][i] + "' target='_blank'><p class='res'><b>" + data[1][i] + "</b><br>" + data[2][i] + "</p></a><br>");
      $(".res").css({
        "display": "none",
        "border": "1px solid #f3f3f3",
        "background-color": "#ffffff",
        "padding-left": "20px",
        "padding-top": "10px",
        "padding-bottom": "10px"
      });
    }
  }

  function searchAndShow() {
    var search = $("#query").val();

    if (search) {
      if (/^[а-яА-ЯёЁ]+$/.test(search)) {
        var urlBegin = "https://ru.wikipedia.org/w/api.php?";
      } else {
        var urlBegin = "https://en.wikipedia.org/w/api.php?";
      }
      var mainUrl = urlBegin + action + encodeURI(search) + format;

      $.ajax({
        url: mainUrl,
        dataType: 'jsonp',
        success: function(data) {
          if ($(".result").html()) {
            $(".result").empty();
            displayResults(data);
          } else {
            displayResults(data);
          }
          $(".res").fadeIn(1000);
        }
      });
    }
  }

  $(".search-btn").click(function() {
    searchAndShow();
  });

  $('#query').keypress(function(e) {
    if (e.which == 13) {
      searchAndShow();
      return false; //"return false" is the same as calling e.preventDefault and e.stopPropagation()
    }
  });
});