import React from 'react';
import ReactDOM from "react-dom";
import { List } from "./components/List";
// import { Resume } from "./components/Resume"
import Controller from "./Controller"

const myCanvas = document.querySelector('#myCanvas') as HTMLCanvasElement
const canvasWrapper = document.querySelector('#canvas-wrapper') as HTMLDivElement
const iconImg = document.querySelector('#iconImg') as HTMLImageElement
Controller.start(myCanvas, canvasWrapper, iconImg)

class App extends React.Component {
    render() {
        return (
            <List />
        );
    }
}

const app = document.querySelector('#app')
ReactDOM.render(<App />, app)

// const resume = document.querySelector('#resume')
// ReactDOM.render(<Resume />, resume)