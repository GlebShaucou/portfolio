var intervalId;
var init = 1;
var timeSec = 0;
var timeMin;
var str;
var relaxTime;
var pomodoroTime;
var a = 1;
var fullTimeSec;
var perc;
//уменьшение времени relax
function relaxTimeLower() {
    if(init == 1) {
        relaxTime = parseInt($('.relax-time').html(), 10);

        if(relaxTime > 1) {
            relaxTime = relaxTime - 1;
            $('.relax-time').html(relaxTime);
        } else {
            alert("Short break - is all what you need");
        }
    }   
}  
//увеличение времени relax
function relaxTimeUpper() {
    if(init == 1) {
        relaxTime = parseInt($('.relax-time').html(), 10);

        if(relaxTime < 60) {
            relaxTime = relaxTime + 1;
            $('.relax-time').html(relaxTime);
        } else {
            alert("Just go home, Buddy");
        }
    }   
}
//уменьшение времени pomodoro
function pomodoroTimeLower() {
    //clearInterval(intervalId);
    if(init == 1) {
        init = 1;
        timeSec = 0;
        pomodoroTime = parseInt($('.pomodoro-time').text(), 10);
        fullTimeSec = parseInt($(".pomodoro-time").text(), 10) * 60;

        if(pomodoroTime > 1) {
            pomodoroTime = pomodoroTime - 1;
            $('.pomodoro-time').html(pomodoroTime);

            if(pomodoroTime < 10) {
                $('.timer').html("0" + pomodoroTime + ':00');
            } else {
                $('.timer').html(pomodoroTime + ':00');
            }
        } else {
            alert("Don't be a kitten!");
        }
    }   
}  
//увеличение времени pomodoro
function pomodoroTimeUpper() {
  //clearInterval(intervalId);
  if(init == 1) {
    init = 1;
    timeSec = 0;
  pomodoroTime = parseInt($('.pomodoro-time').html(), 10);
    fullTimeSec = parseInt($(".pomodoro-time").html(), 10) * 60;
  
  if(pomodoroTime < 60) {
    pomodoroTime = pomodoroTime + 1;
    $('.pomodoro-time').html(pomodoroTime);
    
    if(pomodoroTime < 10) {
      $('.timer').html("0" + pomodoroTime + ':00');
    } else {
      $('.timer').html(pomodoroTime + ':00');
    }
    
  } else {
    alert("Take it easy, Arnold");
  }
 }   
}  

//функция для отсчета обратного времени (таймера)
function pomodoroTimer() {
 /*arr = $(".timer").html().split(":");
  currentTimeSec = arr[0] * 60 + parseInt(arr[1], 10);
  perc = Math.floor(currentTimeSec / fullTimeSec * 100);
  wid = "width: " + perc + "%";
  $(".perc").html(wid);
  $(".perc").attr("aria-valuenow", perc);
  $(".perc").attr("style", wid);*/
  
  timeMin = parseInt($(".timer").html(), 10);
    
  if(timeSec == 0 && timeMin != 0) {
		timeMin = timeMin - 1;
		timeSec = 59;
		
		if(timeMin > 9) {
			str = timeMin.toString() + ":" + timeSec.toString();
      $(".timer").html(str);
		} else {
			str = "0" + timeMin.toString() + ":" + timeSec.toString();
      $(".timer").html(str);
		}		
	} else if(timeSec == 0 && timeMin == 0) {
		//автоматическое переключение между рабочим временем и временем перерыва
      if(a == 1) {
        timeMin = parseInt($(".relax-time").html(), 10);
        fullTimeSec = parseInt($(".relax-time").html(), 10) * 60;
        
        if(timeMin < 10) {
      $('.timer').html("0" + timeMin + ':00');
    } else {
      $('.timer').html(timeMin + ':00');
    }        
        $(".lab").html("Fun Time");
        a = 2;
      } else {
        timeMin = parseInt($(".pomodoro-time").html(), 10);
        fullTimeSec = parseInt($(".pomodoro-time").html(), 10) * 60;
        
        if(timeMin < 10) {
      $('.timer').html("0" + timeMin + ':00');
    } else {
      $('.timer').html(timeMin + ':00');
    }        
        $(".lab").html("Business Time");
        a = 1;
      }
    
	} else {
		timeSec = timeSec - 1;
		if(timeMin > 9 && timeSec > 9) {
			str = timeMin.toString() + ":" + timeSec.toString();
      $(".timer").text(str);
		} else if (timeMin > 9 && timeSec < 10) {
			str = timeMin.toString() + ":" + "0" + timeSec.toString();
      $(".timer").text(str);
		} else if(timeMin < 10 && timeSec < 10) {
			str = "0" + timeMin.toString() + ":" + "0" + timeSec.toString();
      $(".timer").text(str);
		} else {
      str = "0" + timeMin.toString() + ":" + timeSec.toString();
      $(".timer").text(str);
    }
	}
}
//сброс времени таймера
function resetTimer() {
    clearInterval(intervalId);
    pomodoroTime = $('.pomodoro-time').text();
    fullTimeSec = parseInt($(".pomodoro-time").text(), 10) * 60;

    if(pomodoroTime < 10) {
        $('.timer').text("0" + pomodoroTime + ':00');
    } else {
        $('.timer').text(pomodoroTime + ':00');
    }

    $(".lab").text("Business Time");
    init = 1;
    timeSec = 0;
}
//старт таймера
function startTimer() {
    intervalId = setInterval(pomodoroTimer, 1000);
    fullTimeSec = parseInt($(".pomodoro-time").text(), 10) * 60;
}
//остановка таймера
function stopTimer() {
    clearInterval(intervalId);
}
//функция паузы
function startStopTimer() {
    if(init == 1) {
        startTimer();
        init = 2;
        $('.btn-1').disable = true;
    } else {
        stopTimer();
        init = 1;
    }
}