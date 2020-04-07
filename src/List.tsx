import React from 'react';

export class List extends React.Component {
    render() {
        return (
            <div id="link-list">
                <p><a href="https://github.com/matsuyoshi30/matsuyoshi30.github.io/blob/master/resume/resume.md" target="_blank" rel="noopener noreferrer" className="link">Resume</a></p>
                <p><a href="https://github.com/matsuyoshi30" target="_blank" rel="noopener noreferrer" className="link">GitHub</a></p>
                <p><a href="https://blog.matsuyoshi30.net" target="_blank" rel="noopener noreferrer" className="link">Blog</a></p>
                <p><a href="https://twitter.com/matsuyoshi30" target="_blank" rel="noopener noreferrer" className="link">Twitter</a></p>
                <p><a href="https://matsuyoshi30.hatenablog.com" target="_blank" rel="noopener noreferrer" className="link">Diary</a></p>
                <p><a href="https://github.com/matsuyoshi30/til" className="link">TIL</a></p>
            </div>);
    }
}
