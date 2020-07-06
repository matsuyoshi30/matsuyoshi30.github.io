export default class Sushi {
    private x: number;
    private y: number;
    private vx: number;
    private vy: number;
    private image: string;

    constructor(private e: MouseEvent, private wrapper: HTMLDivElement, private context: CanvasRenderingContext2D, sushiFlag: boolean) {
        e.type == "initial" ? this.x = 300 : this.x = e.clientX;
        e.type == "initial" ? this.y = 400 : this.y = e.clientY;
        this.vx = this.getRandomInt(5, -5)
        this.vy = this.getRandomInt(5, -5)
        sushiFlag ? this.image = '🍣' : this.image = '☕'
        this.context.font = '30px sans-serif'

        requestAnimationFrame(this.move.bind(this))
    }

    public move() {
        if (0 > this.x || this.x > this.wrapper.offsetWidth - 30) {
            this.vx = this.vx * -1;
        }
        this.x += this.vx;
        if (30 > this.y || this.y > this.wrapper.offsetHeight) {
            this.vy = this.vy * -1;
        }
        this.y += this.vy;
    }

    public changeImage() {
        this.image == '🍣' ? this.image = '☕' : this.image = '🍣';
    }

    public draw(context: CanvasRenderingContext2D) {
        context.fillText(this.image, this.x, this.y);
    }

    private getRandomInt(max:number, min:number) {
        return Math.floor((Math.random() * (Math.floor(max) - Math.floor(min))) + Math.floor(min));
    }
}