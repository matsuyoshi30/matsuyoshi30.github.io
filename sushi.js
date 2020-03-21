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

class Sushi {
    constructor(x, y, vx, vy, sushiFlag) {
        this.x = x;
        this.y = y;
        this.vx = vx;
        this.vy = vy;
        sushiFlag ? this.image = '🍣' : this.image = '☕';
    }
    update() {
        if(0 > this.x || this.x > WIDTH-30) {
            this.vx = this.vx * -1;
        }
        this.x += this.vx;
        if(30 > this.y || this.y > HEIGHT) {
            this.vy = this.vy * -1;
        }
        this.y += this.vy;
    }
    changeImage() {
        this.image == '🍣' ? this.image = '☕' : this.image = '🍣';
    }
    draw(ctx) {
        ctx.fillText(this.image, this.x, this.y);
    }
}

function getRandomInt(max, min) {
    max = Math.floor(max);
    min = Math.floor(min);
    return Math.floor((Math.random() * (max-min)) + min);
}

let sushiFlag = true;

const objects = [];
objects.push(new Sushi(80, 40, 5, 2, sushiFlag));

function loop(timestamp) {
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
    objects.forEach((obj) => obj.update());
    objects.forEach((obj) => obj.draw(ctx));
    window.requestAnimationFrame((ts) => loop(ts));
}

window.requestAnimationFrame((ts) => loop(ts));

window.addEventListener('click', event => {
    objects.push(new Sushi(event.x, event.y, getRandomInt(5, -5), getRandomInt(5, -5), sushiFlag));
});

const label = document.getElementById('cblabel');
label.addEventListener('click', event => {
    event.stopPropagation();
});
const cb = document.getElementById('cb');
cb.addEventListener('click', event => {
    event.stopPropagation();
});
const links = document.querySelectorAll('.link');
links.forEach(function (target) {
    target.addEventListener('click', event => {
        event.stopPropagation();
    });
});

const img = document.getElementById('img');
img.addEventListener('click', event => {
    event.stopPropagation();
    objects.forEach((obj) => obj.changeImage());
    sushiFlag = !sushiFlag;
});