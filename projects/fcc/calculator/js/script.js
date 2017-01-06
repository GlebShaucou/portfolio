var str = "";
var a = 0; // переменная предотвращающая многократное введение точек
var b = 0; //переменная предотвращения введения нескольких арифметических знаков подряд 

function dispNumOp(sym) {
    if(isNaN(sym)) {
      if(b == 0) {
        if(str.length > 0) {
          str = str + sym;
          $(".disp").html(str);
          a = 0;
          b = 1; 
        }        
      }      
    } else {
      str = str + sym;
      $(".disp").html(str);
      b = 0;
    }    
}

function zeroNum() {
  if(str.length == 0) {
    str = "0" + ".";
    $(".disp").html(str);
    a = 1;
  } else {
    str = str + "0";
    $(".disp").html(str);
  }
}

function point() {
  if(a == 0) { 
    if(str.length == 0) {
       str = "0" + ".";
       $(".disp").html(str);
       a = 1;
    }else {
       str = str + ".";
       $(".disp").html(str);
       a = 1;
    }   
  }
}

function minSlice() {
  str = str.slice(0, -1);
  if(str.length == 0) {
    $(".disp").html("0")
  } else {
    $(".disp").html(str);
  }
}

function strSlice() {  
  if(str.length > 0) {
    if(str[str.length - 1] == ".") {
      a = 0;
      minSlice();
    } else {
      minSlice();
    }    
  }
}

function result() {
  res = eval(str).toPrecision(2);
  $(".disp").html(res);
  str = "";
  a = 0;
  b = 0;
}

function clearDisp() {
  str = "";
  a = 0;
  b = 0;
  $(".disp").html("0");
}