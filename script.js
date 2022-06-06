var rightnum = 1;

const ball = document.getElementById("ball")
if (ball.getContext) {
  var ctx = ball.getContext('2d');
  ctx.beginPath();
ctx.arc(70, 75, 70, 0, 99 * Math.PI);
ctx.stroke(); 
  ctx.fillStyle = "#0000FF";
} else {
  alert("Sorry, your browser doesn't support canvas.")
}





 if(window.DeviceMotionEvent){
  window.addEventListener("devicemotion", motion, false);
}else{
  alert("DeviceMotionEvent is not supported");
}
function sleep(miliseconds) {
   var currentTime = new Date().getTime();

   while (currentTime + miliseconds >= new Date().getTime()) {
   }
}
function motion(event){
  var x = Math.round(event.accelerationIncludingGravity.x);
  var y = Math.round(event.accelerationIncludingGravity.y);
  var z = Math.round(event.accelerationIncludingGravity.z);
  if(Math.round(x) > 1){
    ball.style.backgroundColor = "green"; 
sleep(100)
  }if(Math.round(y) > 1){
    ball.style.backgroundColor = "blue";
    ball.style.transform = "translate("+ rightnum +"px, 0%)";
    rightnum += 1
  }if(Math.round(x) < -1){
    ball.style.backgroundColor = "orange";
 
sleep(100)
  }if(Math.round(y) < 0){
    ball.style.backgroundColor = "purple";
sleep(100)
  }if(Math.round(x) > 5){
    // z+ is very sensitive
    ball.style.backgroundColor = "grey";
sleep(100)
  }if(math.round(x ) < 0){
    ball.style.backgroundColor = "red";
  

sleep(100)
  }
}