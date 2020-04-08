import React from 'react';

export class Resume extends React.Component {
    render() {
        let components = [<Information />, <Works />];
        return (
            <>
                <h1>Resume</h1>
                {components}
            </>
        );
    }
}

class Information extends React.Component {
    render() {
        return (
            <>
            <h2>Information</h2>
                <p>Name: 渡邉 将哉（わたなべ まさや）</p>
                <p>Birth: 1992年11月12日</p>
                <h4>Links</h4>
                    <InformationLinks />
            </>
        );
    }
}

class InformationLinks extends React.Component {
    render() {
        return (
            <ul>
                <li><a href="https://www.linkedin.com/in/masaya-watanabe-67a03910a/">LinkedIn</a></li>
                <li><a href="https://www.wantedly.com/users/128963014">Wantedly</a></li>
                <li><a href="https://findy-code.io/share_profiles/wCUN34hZPle5A">Findy</a></li>
                <li><a href="https://lapras.com/public/ZURYOWL">Lapras</a></li>
            </ul>
        );
    }
}

class Works extends React.Component {
    render() {
        return (
            <>
                <h2>Works</h2>
                    <h3>Career</h3>
                        <h4>SCSK株式会社[201604-now</h4>
                            <CareerList />
                    <h3>Personal Projects</h3>
                        <PersonalProjectList />
                    <h3>Experiences</h3>
                        <ExperienceList />
                    <h3>Certificates</h3>
                        <CertificateList />
            </>
        );
    }
}

class CareerList extends React.Component {
    render() {
        return (
            <ul>
              <li><a href="https://github.com/matsuyoshi30/matsuyoshi30.github.io/blob/master/resume/202002-.md" target="_blank" rel="noopener noreferrer" >証券会社向け 対外報告文書システム化(202002-)</a></li>
              <li><a href="https://github.com/matsuyoshi30/matsuyoshi30.github.io/blob/master/resume/201910-202001.md" target="_blank" rel="noopener noreferrer" >証券会社向け IFRS（国際会計基準）任意適用に向けた早期化対応(201910-202001)</a></li>
              <li><a href="https://github.com/matsuyoshi30/matsuyoshi30.github.io/blob/master/resume/201907-201909.md" target="_blank" rel="noopener noreferrer" >社内向け DX推進インフラ構築(201907-201909)</a></li>
              <li><a href="https://github.com/matsuyoshi30/matsuyoshi30.github.io/blob/master/resume/201907-201908.md" target="_blank" rel="noopener noreferrer" >社内向け 新規ソリューション検討(201907-201908)</a></li>
              <li><a href="https://github.com/matsuyoshi30/matsuyoshi30.github.io/blob/master/resume/201906-201909.md" target="_blank" rel="noopener noreferrer" >社内外向け RPA推進(201906-201909)</a></li>
              <li><a href="https://github.com/matsuyoshi30/matsuyoshi30.github.io/blob/master/resume/201904-201905.md" target="_blank" rel="noopener noreferrer" >生命保険会社向け コールセンター更改(201904-201905)</a></li>
              <li><a href="https://github.com/matsuyoshi30/matsuyoshi30.github.io/blob/master/resume/201608-201903.md" target="_blank" rel="noopener noreferrer" >銀行向け 勘定系システム更改(201608-201903)</a></li>
            </ul>
        );
    }
}

class PersonalProjectList extends React.Component {
    render() {
        return (
            <ul>
              <li><a href="https://github.com/matsuyoshi30/harbor">harbor</a>: simple and minimal Hugo theme</li>
              <li><a href="https://github.com/matsuyoshi30/gom2h">gom2h</a>: convert markdown to html</li>
              <li><a href="https://github.com/matsuyoshi30/godiff">godiff</a>: simple diff command and web app</li>
              <li><a href="https://github.com/matsuyoshi30/gomaze">gomaze</a>: a cli tool to play maze</li>
              <li><a href="https://github.com/matsuyoshi30/gorec">gorec</a>: [archived] simple terminal recorder</li>
              <li><a href="https://github.com/matsuyoshi30/gocp">gocp</a>: [suspended] an atcoder cli tool</li>
              <li>simple cli tool</li>
              <ul>
                <li><a href="https://github.com/matsuyoshi30/go-trendrepo">go-trendrepo</a>: check trending and recently made GitHub repository</li>
                <li><a href="https://github.com/matsuyoshi30/go-imgdl">go-imgdl</a>: image downloader</li>
              </ul>
            </ul>
        );
    }
}

class ExperienceList extends React.Component {
    render() {
        return (
            <>
                <h4>Programming Language</h4>
                    <p>Java / SQL / PLSQL / VBA / Shell / HTML / CSS</p>
                <h4>DB</h4>
                    <p>OracleDB / HiRDB</p>
                <h4>Tool</h4>
                    <p>Subversion / Git / GitHub</p>
            </>
        );
    }
}

class CertificateList extends React.Component {
    render() {
        return (
            <ul>
                <li>TOEIC 855[202002]</li>
                <li>応用情報処理技術者[201612]</li>
                <li>基本情報処理技術者[201606]</li>
            </ul>
        );
    }
}