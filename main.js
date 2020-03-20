'use strict';
const WIDTH = document.getElementById('myCanvas').clientWidth;
const HEIGHT = document.getElementById('myCanvas').clientHeight;
// console.log('WIDTH is ' + WIDTH + ', HEIGHT is ' + HEIGHT);

const canvas = document.createElement('canvas');
canvas.width = WIDTH;
canvas.height = HEIGHT;
const ctx = canvas.getContext('2d');

document.getElementById('myCanvas').appendChild(canvas);

var ball = {
    x: 20,
    y: 10,
    vx: 7,
    vy: 5,
    radius: 5,
    color: '#000000',
    draw: function() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2, true);
        ctx.closePath();
        ctx.fillStyle = this.color;
        ctx.fill();
        // console.log('ball x is ' + this.x + ', and y is ' + this.y);
    }
};

function loop() {
    ctx.clearRect(0,0, WIDTH, HEIGHT);
    ball.x += ball.vx;
    ball.y += ball.vy;
    if (0 > ball.x || ball.x > WIDTH) {
        ball.vx = ball.vx * -1;
    }
    if (0 > ball.y || ball.y > HEIGHT) {
        ball.vy = ball.vy * -1;
    }
    ball.draw();
    requestAnimationFrame(loop);
}

loop();