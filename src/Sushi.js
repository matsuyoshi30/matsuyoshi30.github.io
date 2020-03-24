export default class Sushi {
    constructor(canvas, context, x, y, vx, vy, sushiFlag) {
        this.x = x;
        this.y = y;
        this.vx = vx;
        this.vy = vy;
        sushiFlag ? this.image = '🍣' : this.image = '☕';
    }

    update(width, height) {
        if (0 > this.x || this.x > width - 30) {
            this.vx = this.vx * -1;
        }
        this.x += this.vx;
        if (30 > this.y || this.y > height) {
            this.vy = this.vy * -1;
        }
        this.y += this.vy;
    }
    changeImage() {
        this.image == '🍣' ? this.image = '☕' : this.image = '🍣';
    }
    draw(context) {
        context.fillText(this.image, this.x, this.y);
    }
}