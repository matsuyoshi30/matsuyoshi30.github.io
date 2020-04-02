import Sushi from "./Sushi"
import {getRandomInt, loop} from "./util"
import "./stylesheet.css"
import jpg from './icon.jpg'

let imgJpg = document.createElement('img')
imgJpg.src = jpg
imgJpg.alt = "matsuyoshi30.net"
imgJpg.id = "img"
document.getElementById('icon')!.appendChild(imgJpg)

const myCanvas = document.getElementById('myCanvas')
const WIDTH = myCanvas!.clientWidth;
const HEIGHT = myCanvas!.clientHeight;
const canvas = document.createElement('canvas');
canvas.width = WIDTH;
canvas.height = HEIGHT;
const ctx = canvas.getContext('2d');
if (ctx !== null) ctx.font = '30px sans-serif';
myCanvas!.appendChild(canvas);

let sushiFlag = true;

const objects: Sushi[] = [];
objects.push(new Sushi(canvas, ctx!, 80, 40, 5, 2, sushiFlag));

window.requestAnimationFrame((ts) => loop(objects, canvas, ctx!, ts));

window.addEventListener('click', event => {
    objects.push(new Sushi(canvas, ctx!, event.x, event.y, getRandomInt(5, -5), getRandomInt(5, -5), sushiFlag));
});

const label = document.getElementById('cblabel')
if (label !== null) {
    label.addEventListener('click', (event: { stopPropagation: () => void }) => {
        event.stopPropagation();
    });
}
const cb = document.getElementById('cb')
if (cb !== null) {
    cb.addEventListener('click', event => {
        event.stopPropagation();
    });
}
document.querySelectorAll('.link').forEach(function (target) {
    target.addEventListener('click', event => {
        event.stopPropagation();
    });
});

const img = document.getElementById('img')
if (img !== null) {
    img.addEventListener('click', event => {
        event.stopPropagation();
        objects.forEach((obj) => obj.changeImage());
        sushiFlag = !sushiFlag;
    });
}