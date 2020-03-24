export const getRandomInt = (max, min) => {
    max = Math.floor(max);
    min = Math.floor(min);
    return Math.floor((Math.random() * (max - min)) + min);
}

export const loop = (objects, canvas, context, timestamp) => {
    context.clearRect(0, 0, canvas.width, canvas.height);
    objects.forEach((obj) => obj.update(canvas.width, canvas.height));
    objects.forEach((obj) => obj.draw(context));
    window.requestAnimationFrame((ts) => loop(objects, canvas, context, timestamp));
}