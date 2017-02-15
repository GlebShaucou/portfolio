$(document).ready(function() {
    var action = "action=opensearch&search=";
    var format = "&limit=max&format=json";

    $(".search-btn").click(function() {
        searchAndShow();
    });

    $('#query').keypress(function(e) {
        if (e.which == 13) {
            searchAndShow();
            return false; //"return false" is the same as calling e.preventDefault and e.stopPropagation()
        }
    });

    function searchAndShow() {
        var search = $("#query").val();
        var urlBegin = "";
        var mainUrl = "";

        if (search) {
            if (/^[а-яА-ЯёЁ]+$/.test(search)) {
                urlBegin = "https://ru.wikipedia.org/w/api.php?";
            } else {
                urlBegin = "https://en.wikipedia.org/w/api.php?";
            }
                
            mainUrl = urlBegin + action + encodeURI(search) + format;

            $.ajax({
                url: mainUrl,
                dataType: 'jsonp',
                success: onSuccessLoad
            });
        }
    }

    function onSuccessLoad(data) {
        if ($(".result").html()) {
            $(".result").empty();
            displayResults(data);
        } else {
            displayResults(data);
        }
        
        $(".res").fadeIn(300);
    }

    function displayResults(data) {
        for (var i = 0; i < data[1].length; i++) {
            $(".result").append("<a href='" + data[3][i] 
                + "' target='_blank'><p class='res'><b>" 
                + data[1][i] + "</b><br>" 
                + data[2][i] + "</p></a><br>");
        }
    }
});