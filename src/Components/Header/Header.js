import React from 'react';
import './Header.css';

const Header = () => {
    return(
        <header className="sans-serif">
        <div className="cover bg-left bg-center-l" style={{backgroundImage: 'url(http://mrmrs.github.io/photos/u/011.jpg)'}}>
            <div className="bg-black-80 pb5 pb6-m pb7-l">
            <nav className="dt w-100 mw8 center"> 
                <div className="dtc w2 v-mid pa3">
                <h1 className="white-80">xlincw0w</h1>
                </div>
                <div className="dtc v-mid tr pa3">
                <a className="f6 fw4 hover-white no-underline white-70 dn dib-l pv2 ph3" href="/" >About</a> 
                <a className="f6 fw4 hover-white no-underline white-70 dn dib-l pv2 ph3" href="/" >Careers</a> 
                <a className="f6 fw4 hover-white no-underline white-70 dn dib-ns pv2 ph3" href="/" >Pricing</a> 
                <a className="f6 fw4 hover-white no-underline white-70 dib ml2 pv2 ph3 ba" href="/" >Hire me</a> 
                </div>
            </nav> 
            <div className="tc-l mt4 mt5-m mt6-l ph3">
                <h1 className="f2 f2-l fw2 white-90 mb0 lh-title">Hi, this is Khaled Khazem</h1>
                <h2 className="fw1 f3 white-80 mt3 mb4">I'm a web developer from Algeria.
                                I can help you build your next product.</h2>
                <a className="f6 no-underline grow dib v-mid bg-blue white ba b--blue ph3 pv2 mb3" href="/">Hire me now !</a>
                <span className="dib v-mid ph3 white-70 mb3">or</span>
                <a className="f6 no-underline grow dib v-mid white ba b--white ph3 pv2 mb3" href="">Contact me</a>
            </div>
            </div>
        </div> 
        </header>
    )
}

export default Header;