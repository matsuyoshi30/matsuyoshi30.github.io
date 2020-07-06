import Sushi from "./Sushi"

export default class Controller {
    private context: CanvasRenderingContext2D
    private objects: Sushi[]
    private sushiFlag: boolean

    constructor(canvas: HTMLCanvasElement, private wrapper: HTMLDivElement, private img: HTMLImageElement) {
        this.context = <CanvasRenderingContext2D>canvas.getContext('2d')
        canvas.setAttribute('width', `${wrapper.offsetWidth}`)
        canvas.setAttribute('height', `${wrapper.offsetHeight}`)
        this.objects = []
        this.sushiFlag = true

        this.render()
    }

    static start(canvas: HTMLCanvasElement, wrapper: HTMLDivElement, img: HTMLImageElement) {
        new Controller(canvas, wrapper, img).start();
    }

    public start() {
        this.addSushi(new MouseEvent("initial", undefined));
        this.wrapper.onclick = e => this.addSushi(e);
        this.img.onclick = () => {
            this.objects.forEach((obj) => obj.changeImage())
            this.sushiFlag = !this.sushiFlag
        }
    }

    private render() {
        this.context.clearRect(0, 0, this.wrapper.offsetWidth, this.wrapper.offsetHeight)
        this.objects.forEach((obj) => obj.move())
        this.objects.forEach((obj) => obj.draw(this.context))
        requestAnimationFrame((ts) => this.render());
    }

    private addSushi(e: MouseEvent) {
        this.objects.push(new Sushi(e, this.wrapper, this.context, this.sushiFlag));
    }
}