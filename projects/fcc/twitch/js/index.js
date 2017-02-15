// ?client_id=ng7vquupmtx9eq88ih6xz1rvfc91ns

$(document).ready(function() {
  var mainUrl = "https://api.twitch.tv/kraken/streams/";
  var twitchUsers = ["freecodecamp", "storbeck", "terakilobyte", "habathcx", "RobotCaleb", "thomasballinger", "noobs2ninjas", "beohoff", "brunofin", "comster404", "sc2proleague", "shroud", "screwattack", "esl_sc2", "ogamingsc2"];
  
  function logoShow(logo) {
    if(logo) {
      return logo;
    } else {
      return "http://i76.fastpic.ru/big/2016/0308/c4/448976688ad40d47b2f2acb0905658c4.jpeg";
    }
  }

  function offlineInfo(channel) {
    var channelUrl = "https://api.twitch.tv/kraken/channels/" + channel;
    $.ajax({
      url: channelUrl,
      dataType: 'jsonp',
      success: function(data) {
        $(".result").append("<p id='off' class='offline'><img height='42' width='42' alt='logo' src='" + logoShow(data.logo) + "'> " + "<a href='" + data.url + "' target='_blank'>" + data.display_name + ":</a>" + "     <i>offline</i></p>");
        console.log(data);
      }
    });
  }

  function streamJson(channel, status) {
    var url = mainUrl + channel;
    $.ajax({
      url: url,
      dataType: 'jsonp',
      success: function(data) {
        if (data.stream) {
          if (status === 'all' || status === 'online') {
            $(".result").prepend("<p class='online'><img height='42' width='42' alt='logo' src='" + data.stream.channel.logo + "'> " + "<a href='" + data.stream.channel.url + "' target='_blank'>" + data.stream.channel.display_name + ":</a>" + "      <i>" + data.stream.channel.status + "</i></p>");
            console.log(data);
          }
        } else if (data.stream === null) {
          if (status === 'all' || status === 'offline') {
            offlineInfo(channel);
          }
        } else {
          if (status === 'all') {
            $(".result").append("<p id='un' class='offline'>" + data.message + " or closed.</p>");
            console.log(data);
          }
        }
      }
    });
  }

  function showChannel(twitchUsers, status) {
    for (var i = 0; i < twitchUsers.length; i++) {
      streamJson(twitchUsers[i], status);
    }
  }
  
  showChannel(twitchUsers, "all");

  $("#online").click(function() {
    $(".result").empty();
    showChannel(twitchUsers, "online");
  });
  
  $("#offline").click(function() {
    $(".result").empty();
    showChannel(twitchUsers, "offline");
  });
  
  $("#all").click(function() {
    $(".result").empty();
    showChannel(twitchUsers, "all");
  });
});