'use strict';
const WIDTH = document.getElementById('myCanvas').clientWidth;
const HEIGHT = document.getElementById('myCanvas').clientHeight;
// console.log('WIDTH is ' + WIDTH + ', HEIGHT is ' + HEIGHT);

const canvas = document.createElement('canvas');
canvas.width = WIDTH;
canvas.height = HEIGHT;
const ctx = canvas.getContext('2d');
ctx.font = '30px sans-serif';

document.getElementById('myCanvas').appendChild(canvas);

var sushi = {
    x: 20,
    y: 10,
    vx: 5,
    vy: 2,
    image: '🍣',
    draw: function() {
        ctx.fillText(this.image, this.x, this.y);
    }
}

function loop() {
    ctx.clearRect(0,0, WIDTH, HEIGHT);
    sushi.x += sushi.vx;
    sushi.y += sushi.vy;
    if (0 > sushi.x || sushi.x > WIDTH) {
        sushi.vx = sushi.vx * -1;
    }
    if (0 > sushi.y || sushi.y > HEIGHT) {
        sushi.vy = sushi.vy * -1;
    }
    sushi.draw();
    requestAnimationFrame(loop);
}

loop();