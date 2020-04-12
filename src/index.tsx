import React from 'react';
import ReactDOM from "react-dom";
import Controller from "./Controller"

const myCanvas = document.querySelector('#myCanvas') as HTMLCanvasElement
const canvasWrapper = document.querySelector('#canvas-wrapper') as HTMLDivElement
const iconImg = document.querySelector('#iconImg') as HTMLImageElement
Controller.start(myCanvas, canvasWrapper, iconImg)

class App extends React.Component {
    render() {
        return ( <Link /> );
    }
}

class Link extends React.Component {
    render() {
        return (
            <div id="link-list">
                <ResumeLink />
                <p><a href="https://github.com/matsuyoshi30" target="_blank" rel="noopener noreferrer" className="link">GitHub</a></p>
                <p><a href="https://blog.matsuyoshi30.net" target="_blank" rel="noopener noreferrer" className="link">Blog</a></p>
                <p><a href="https://twitter.com/matsuyoshi30" target="_blank" rel="noopener noreferrer" className="link">Twitter</a></p>
                <p><a href="https://matsuyoshi30.hatenablog.com" target="_blank" rel="noopener noreferrer" className="link">Diary</a></p>
                <p><a href="https://til.matsuyoshi30.net/" className="link">TIL</a></p>
            </div>
        );
    }
}

class ResumeLink extends React.Component {
    constructor(props: any) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <p><a href="./resume" className="link">Resume</a></p>
        );
    }
}

const app = document.querySelector('#app')
ReactDOM.render(<App />, app)