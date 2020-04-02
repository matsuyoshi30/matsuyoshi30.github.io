import Sushi from "./Sushi";

export const getRandomInt = (max:number, min:number) => {
    max = Math.floor(max);
    min = Math.floor(min);
    return Math.floor((Math.random() * (max - min)) + min);
}

export const loop = (objects:Sushi[], canvas:HTMLCanvasElement, context:CanvasRenderingContext2D, timestamp:number) => {
    context.clearRect(0, 0, canvas.width, canvas.height);
    objects.forEach((obj) => obj.update(canvas.width, canvas.height));
    objects.forEach((obj) => obj.draw(context));
    window.requestAnimationFrame((ts) => loop(objects, canvas, context, timestamp));
}