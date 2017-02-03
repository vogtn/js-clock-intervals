var now = new Date();

var rotateThisSecond = now.getSeconds();
var rotateThisMinute= now.getMinutes() * 6;

var rotateThisHour = null;
//handling 24 hour => 12
if(now.getHours() > 12){
  rotateThisHour = (now.getHours()) * 30;
}else{
  rotateThisHour = now.getHours() * 15;
}

var initial = function(){
  document.getElementById("second").style.transform = "rotate(" + rotateThisSecond +"deg)";
  document.getElementById("minute").style.transform = "rotate(" + rotateThisMinute +"deg)";
  document.getElementById("hour").style.transform = "rotate(" + rotateThisHour +"deg)";
}
var start = setInterval(initial, 5);

var moveSecond = function(){
  rotateThisSecond += 6;
  document.getElementById("second").style.transform = "rotate(" + rotateThisSecond +"deg)";
}



var moveMinute = function(){
  rotateThisMinute += 6;
  document.getElementById("minute").style.transform = "rotate(" + rotateThisMinute +"deg)";
}



var moveHour = function(){
  rotateThisHour += 30;
  document.getElementById("hour").style.transform = "rotate(" + rotateThisHour +"deg)";
}

var secondInterval = setInterval(moveSecond, 1000);
var minuteInterval = setInterval(moveMinute, (1000 * 60));
var hourInterval = setInterval(moveHour, (1000 * 60 * 60));
