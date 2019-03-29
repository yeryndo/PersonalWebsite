var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");
var x = canvas.width / 2;
var y = canvas.height - 30;
//ball details
var ballRadius = 10;
var dx = 2;
var dy = -2;
//starting ball color
var color = "red";
//paddle details
var paddleHeight = 10;
var paddleWidth = 75;
var paddleX = (canvas.width - paddleWidth) / 2;
//start with false since buttons are not pressed in the beginning
var pressRight = false;
var pressLeft = false;

var barRowCount = 5;
var barColumnCount = 3;
var barWidth = 75;
var barHeight = 20;
var barPadding = 10;
var barOffsetTop = 15;
var barOffsetLeft = 30;

//var endOfGame = document.querySelector(".end-of-game");
//var interval;
var count = 0;

var bars = [];
for(var q = 0; q < barColumnCount; q++){
  bars[q] = [];
  for (var w = 0; w < barRowCount; w++){
    bars[q][w] = { x:0, y:0, status: 1};
  }
}

document.addEventListener("keydown", pressedDown, false);
document.addEventListener("keyup", pressedUp, false);
document.addEventListener("mousemove", mouseChaser, false);
//endOfGame.addEventListener("click", function() {
//  document.location.reload();
//});
function pressedDown(e){
  if(e.keyCode == 39){ //right cursor key
    pressRight = true;
  }
  else if (e.keyCode == 37){ //left cursor key
    pressLeft = true;
  }
}

function pressedUp(e){
  if (e.keyCode == 39){
    pressRight = false;
  }
  else if (e.keyCode == 37){
    pressLeft = false;
  }
}

function mouseChaser(e){
  var mouseX = e.clientX - canvas.offsetLeft;
  if(mouseX > 0 && mouseX < canvas.width){
    paddleX = mouseX - paddleWidth / 2;
  }
}

function ballHits(){
  for(var q = 0; q < barColumnCount; q++){
    for(var w = 0; w < barRowCount; w++){
      var barzz = bars[q][w];
      if(barzz.status == 1){
        if(x > barzz.x && x < barzz.x + barWidth && y > barzz.y && y < barzz.y + barHeight){
          dy = -dy;
          barzz.status = 0;
          color = "#" + ((1 << 24) * Math.random() | 0).toString(16);
          count++;
          if(count == barRowCount * barColumnCount){
            alert("You are a cool cat!");
            document.location.reload(); //reload and restart
          }
        }
      }
    }
  }
}

function drawBall(){
  context.beginPath();
  context.arc(x, y, ballRadius, 0, Math.PI*2);
  context.fillStyle = color;
  context.fill();
  context.closePath();
}

function drawPaddle(){
  context.beginPath();
  context.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
  context.fillStyle = "black";
  context.fill();
  context.closePath();
}

function drawBars(){
  for(var q = 0; q < barColumnCount; q++){
    for(var w = 0; w < barRowCount; w++){
      if(bars[q][w].status == 1){ //making the bar disappear when hit with ball
        var barX = (w*(barWidth + barPadding)) + barOffsetLeft;
        var barY = (q*(barHeight + barPadding)) + barOffsetTop;
        bars[q][w].x = barX;
        bars[q][w].y = barY;
        context.beginPath();
        context.rect(barX, barY, barWidth, barHeight);
        context.fillStyle = "yellow";
        context.fill();
        context.closePath();
      }
    }
  }
}

function drawCount(){
  context.font = "12px Courier New";
  context.fillStyle = "#C61E1E";
  context.fillText("Your Score: " + count, 15, 300);
}

function draw(){
  //clearing the canvas before each frame so that the moving ball is not a straight line
    context.clearRect(0, 0, canvas.width, canvas.height);
    drawBars();
    drawBall();
    drawPaddle();
    ballHits();
    drawCount();
    //boucing off top and bottom wall
    //collion point is when the ball's edge touches wall
    if (x + dx > canvas.width - ballRadius || x + dx < ballRadius){
      dx = -dx;
    }
    if (y + dy < ballRadius){
      dy = -dy; //reverse the direction of the y axis
    }
    else if (y + dy > canvas.height - ballRadius){
      if(x > paddleX && x < paddleX + paddleWidth){
        dy = -dy; //* 1.1; //speeding up
      }
      else{
          alert("You have disappointed me. Your score is only " + count + ".");
          document.location.reload();
          //endOfGame.style.display = 'flex';
          //clearInterval(interval);
          //return;
        }
      }
    if(pressRight && paddleX < canvas.width - paddleWidth){
      paddleX += 7;
    }
    else if (pressLeft && paddleX > 0){
      paddleX -= 7;
    }
    x += dx;
    y += dy;
    requestAnimationFrame(draw);
}

//interval = setInterval(draw, 10);
//setInterval(draw, 10);
draw();
