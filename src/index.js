import Sushi from "./Sushi"
import {getRandomInt, loop} from "./util"
import "./stylesheet.css"
import jpg from './icon.jpg'

let imgJpg = document.createElement('img')
imgJpg.src = jpg
imgJpg.alt = "matsuyoshi30.net"
imgJpg.id = "img"
document.getElementById('icon').appendChild(imgJpg)

const WIDTH = document.getElementById('myCanvas').clientWidth;
const HEIGHT = document.getElementById('myCanvas').clientHeight;

const canvas = document.createElement('canvas');
canvas.width = WIDTH;
canvas.height = HEIGHT;
const ctx = canvas.getContext('2d');
ctx.font = '30px sans-serif';
document.getElementById('myCanvas').appendChild(canvas);

let sushiFlag = true;

const objects = [];
objects.push(new Sushi(canvas, ctx, 80, 40, 5, 2, sushiFlag));

window.requestAnimationFrame((ts) => loop(objects, canvas, ctx, ts));

window.addEventListener('click', event => {
    objects.push(new Sushi(canvas, ctx, event.x, event.y, getRandomInt(5, -5), getRandomInt(5, -5), sushiFlag));
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