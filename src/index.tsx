import React from 'react';
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation
} from "react-router-dom";
import { Location } from 'history';
import Controller from "./Controller"
import "./stylesheet.css"

window.onload = () => {
  const myCanvas = document.querySelector('#myCanvas') as HTMLCanvasElement
  const canvasWrapper = document.querySelector('#canvas-wrapper') as HTMLDivElement
  const iconImg = document.querySelector('#iconImg') as HTMLImageElement

  Controller.start(myCanvas, canvasWrapper, iconImg);

  const app = document.querySelector('#app')
  ReactDOM.render(<App />, app)
};

export default function App() {
  return (
    <Router>
      <RouteList />
    </Router>
  );
}

function RouteList() {
  let location = useLocation<{ background?: Location}>();
  const background = location.state?.background;

  return (
    <div>
      <Switch location={background || location}>
        <Route exact path="/"><LinkList /></Route>
        <Route path="/resume"><MyResume /></Route>
      </Switch>
    </div>
  );
}

function LinkList() {
  return (
    <div className="link-list">
      <p><Link to="/resume" className="link">Resume</Link></p>
      <p><a href="https://github.com/matsuyoshi30" target="_blank" rel="noopener noreferrer" className="link">GitHub</a></p>
      <p><a href="https://blog.matsuyoshi30.net" target="_blank" rel="noopener noreferrer" className="link">Blog</a></p>
      <p><a href="https://twitter.com/matsuyoshi30" target="_blank" rel="noopener noreferrer" className="link">Twitter</a></p>
      <p><a href="http://diary.matsuyoshi30.net" target="_blank" rel="noopener noreferrer" className="link">Diary</a></p>
    </div>
  );
}

function MyResume() {
  let location = useLocation();

  return (
    <div id="resume-contents"
         style={{
           textAlign: 'left',
           userSelect: 'auto',
           letterSpacing: 'normal',
         }}
    >
      <div style={{fontSize: '12px'}}>
        <h2>Information</h2>
        <p style={{ margin: 0 }}><strong>Name: </strong>Masaya Watanabe</p>
        <p style={{
          color: '#000000',
          textDecoration: 'none',
          position: 'relative',
          display: 'inline-block',
          margin: 0,}}
        >
          <strong>Links: </strong>
          <a href="https://www.linkedin.com/in/masaya-watanabe-67a03910a/" target="_blank" rel="noopener noreferrer" className="resume-link">LinkedIn</a>&nbsp;/&nbsp;
          <a href="https://www.wantedly.com/users/128963014" target="_blank" rel="noopener noreferrer" className="resume-link">Wantedly</a>&nbsp;/&nbsp;
          <a href="https://findy-code.io/share_profiles/wCUN34hZPle5A" target="_blank" rel="noopener noreferrer" className="resume-link">Findy</a>&nbsp;/&nbsp;
          <a href="https://lapras.com/public/matsuyoshi30" target="_blank" rel="noopener noreferrer" className="resume-link">Lapras</a>
        </p>
      </div>
      <h2>Works</h2>
      <h3>Career</h3>
      <ul>
        <li><a href="https://henry.jp/" target="_blank" rel="noopener noreferrer" className="resume-link">Henry, Inc.</a> [202410 - now]</li>
        <li><a href="https://www.cloudsign.jp/" target="_blank" rel="noopener noreferrer" className="resume-link">Bengo4.com, Inc. (CloudSign)</a> [202010 - 202409]</li>
        <li><a href="https://www.scsk.jp/" target="_blank" rel="noopener noreferrer" className="resume-link">SCSK Corporation</a> [201604 - 202009]</li>
      </ul>
      <h3>Personal Projects</h3>
      <ul>
        <li>
          <a href="https://github.com/matsuyoshi30/harbor" target="_blank" rel="noopener noreferrer" className="resume-link">harbor</a><br />
          simple and minimal Hugo theme
        </li>
        <li>
          <a href="https://github.com/matsuyoshi30/gitsu" target="_blank" rel="noopener noreferrer" className="resume-link">gitsu</a><br />
          switch git user easily
        </li>
        <li>
          <a href="https://github.com/matsuyoshi30/germanium" target="_blank" rel="noopener noreferrer" className="resume-link">germanium</a><br />
          generate image from source code
        </li>
        <li>
          <a href="https://github.com/matsuyoshi30/germanium-el" target="_blank" rel="noopener noreferrer" className="resume-link">germanium.el</a><br />
          Emacs Package for generating image from source code using germanium
        </li>
        <li>
          <a href="https://github.com/matsuyoshi30/mmcc" target="_blank" rel="noopener noreferrer" className="resume-link">mmcc</a><br />
          self-hosted C compiler except the C preprocessor
        </li>
        <li>
          <a href="https://github.com/matsuyoshi30/gom2h" target="_blank" rel="noopener noreferrer" className="resume-link">gom2h</a><br />
          convert markdown to html
        </li>
        <li>
          <a href="https://github.com/matsuyoshi30/godiff" target="_blank" rel="noopener noreferrer" className="resume-link">godiff</a><br />
          simple diff command and web app
        </li>
        <li>
          <a href="https://github.com/matsuyoshi30/gomaze" target="_blank" rel="noopener noreferrer" className="resume-link">gomaze</a><br />
          a cli tool to play maze
        </li>
      </ul>
      <h3>Certificates</h3>
      <ul>
        <li>TOEIC 855 [202002]</li>
        <li>Applied Information Technology Engineer Examination (IPA) [201612]</li>
      </ul>
      <p><a href="../" className="resume-link">Back</a></p>
    </div>
  );
}
