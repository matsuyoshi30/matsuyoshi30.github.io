import React from 'react';

export class List extends React.Component {
    render() {
        return (
            <div id="link-list">
                <p><a href="https://matsuyoshi30.net/resume" className="link disabled">Resume(TBD)</a></p>
                <p><a href="https://github.com/matsuyoshi30" target="_blank" rel="noopener noreferrer" className="link">GitHub</a></p>
                <p><a href="https://blog.matsuyoshi30.net" target="_blank" rel="noopener noreferrer" className="link">Blog</a></p>
                <p><a href="https://twitter.com/matsuyoshi30" target="_blank" rel="noopener noreferrer" className="link">Twitter</a></p>
                <p><a href="https://matsuyoshi30.hatenablog.com" target="_blank" rel="noopener noreferrer" className="link">Diary</a></p>
                <p><a href="https://til.matsuyoshi30.net/" className="link">TIL</a></p>
            </div>);
    }
}
