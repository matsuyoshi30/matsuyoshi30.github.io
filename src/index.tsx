import { createRoot } from "react-dom/client";
import iconImg from "./icon.png";
import "./stylesheet.css";

function App() {
  return (
    <div className="container">
      <header>
        <img src={iconImg} alt="matsuyoshi30" />
        <h1>matsuyoshi30</h1>
        <p className="subtitle">software engineer</p>
      </header>

      <nav>
        <p className="links">
          <a
            href="https://github.com/matsuyoshi30"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            GitHub
          </a>
          {" / "}
          <a
            href="https://blog.matsuyoshi30.net"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            Blog
          </a>
          {" / "}
          <a
            href="https://twitter.com/matsuyoshi30"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            Twitter
          </a>
          {" / "}
          <a
            href="http://diary.matsuyoshi30.net"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            Diary
          </a>
        </p>
      </nav>

      <section className="resume">
        <h2>Information</h2>
        <p>
          <strong>Name: </strong>Masaya Watanabe
        </p>
        <p>
          <strong>Links: </strong>
          <a
            href="https://www.linkedin.com/in/masaya-watanabe-67a03910a/"
            target="_blank"
            rel="noopener noreferrer"
            className="resume-link"
          >
            LinkedIn
          </a>
          {" / "}
          <a
            href="https://www.wantedly.com/users/128963014"
            target="_blank"
            rel="noopener noreferrer"
            className="resume-link"
          >
            Wantedly
          </a>
          {" / "}
          <a
            href="https://findy-code.io/share_profiles/wCUN34hZPle5A"
            target="_blank"
            rel="noopener noreferrer"
            className="resume-link"
          >
            Findy
          </a>
          {" / "}
          <a
            href="https://lapras.com/public/matsuyoshi30"
            target="_blank"
            rel="noopener noreferrer"
            className="resume-link"
          >
            Lapras
          </a>
        </p>

        <h2>Career</h2>
        <ul>
          <li>
            <a
              href="https://henry.jp/"
              target="_blank"
              rel="noopener noreferrer"
              className="resume-link"
            >
              Henry, Inc.
            </a>{" "}
            [202410 - now]
          </li>
          <li>
            <a
              href="https://www.cloudsign.jp/"
              target="_blank"
              rel="noopener noreferrer"
              className="resume-link"
            >
              Bengo4.com, Inc. (CloudSign)
            </a>{" "}
            [202010 - 202409]
          </li>
          <li>
            <a
              href="https://www.scsk.jp/"
              target="_blank"
              rel="noopener noreferrer"
              className="resume-link"
            >
              SCSK Corporation
            </a>{" "}
            [201604 - 202009]
          </li>
        </ul>
      </section>
    </div>
  );
}

const root = createRoot(document.getElementById("root")!);
root.render(<App />);
