var canvas = document.getElementById('canvas')

var centerY = canvas.width / 2;
var balls = []

function init()
{
  context= canvas.getContext('2d');
  context.width 
  setInterval(draw,16);
}

function draw()
{
  context.clearRect(0,0, canvas.width,canvas.height);
  
  for (let i = 0; i < balls.length; i++) {
    context.beginPath();

    var ball = balls[i];
    
    // Draws the circle
    
    context.fillStyle = ball.color;
    context.arc(ball.x++,(ball.y *=  0.995) + centerY,ball.dataAmount,0,Math.PI*2,true);
    
    context.closePath();
    context.fill();
  }
}

function createBall() {
  balls.push({
    x: 0,
    y: Math.random() * canvas.height - centerY,
    dataAmount: 5 + Math.random() * 50,
    color: 'rgb(' + 255 * Math.random() + ',' + 255 * Math.random() + ','+ 255 * Math.random() + ')'
  })
}

init();

setInterval(createBall,500);

