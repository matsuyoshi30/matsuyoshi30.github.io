export default class Sushi {
    x: number;
    y: number;
    vx: number;
    vy: number;
    image: string;
    constructor(canvas:HTMLCanvasElement, context:CanvasRenderingContext2D, x:number, y:number, vx:number, vy:number, sushiFlag:boolean) {
        this.x = x;
        this.y = y;
        this.vx = vx;
        this.vy = vy;
        sushiFlag ? this.image = '🍣' : this.image = '☕';
    }

    update(width:number, height:number) {
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
    draw(context:CanvasRenderingContext2D) {
        context.fillText(this.image, this.x, this.y);
    }
}