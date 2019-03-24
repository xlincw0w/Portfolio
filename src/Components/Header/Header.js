import React from 'react';
import './Header.css';
import spider from '../../Images/spider.png';

const Header = ( {NavigateToAbout, NavigateToCareers, NavigateTopricing, NavigateToHireMe, NavigateToContact} ) => {
    return(
        <div className="header mb5">
        <header className="db bg-black-80 h-100 w-100">
            <div className="cover bg-left bg-center-l">
                <div className="pb5 pb6-m pb7-l">
                <nav className="dt w-100 mw8 center"> 
                    <div className="w-30 dtc w2 v-mid pa3 pointer grow">
                        <img src={spider} alt="spider" className="spider"/>
                        <h1 className="dib white-80">xlincw0w</h1>
                    </div>
                    <div className="dtc v-mid tr pa3">
                    <button className="link f6 fw4 hover-white no-underline white-70 dn dib-l pv2 ph3" onClick={NavigateToAbout}>About</button> 
                    <button className="link f6 fw4 hover-white no-underline white-70 dn dib-l pv2 ph3" onClick={NavigateToCareers}>Careers</button> 
                    <button className="link f6 fw4 hover-white no-underline white-70 dn dib-ns pv2 ph3" onClick={NavigateTopricing}>Pricing</button> 
                    <button className="link f6 fw4 hover-white no-underline white-70 dib ml2 pv2 ph3 ba" onClick={NavigateToHireMe}>Hire me</button> 
                    </div>
                </nav> 
                <div className="tc-l mt4 mt5-m mt6-l ph3">
                    <h1 className="f2 f2-l fw2 white-90 mb0 lh-title">Hi, i'm Khaled Khazem</h1>
                    <h2 className="fw1 f3 white-80 mt3 mb4">I'm a web developer from Algeria.
                                    I can help you build your next product.</h2>
                    <button className="link f6 no-underline grow dib v-mid bg-blue white ba b--blue ph3 pv2 mb3" onClick={NavigateToHireMe}>Hire me now !</button>
                    <span className="dib v-mid ph3 white-70 mb3">or</span>
                    <button className="link f6 no-underline grow dib v-mid white ba b--white ph3 pv2 mb3" onClick={NavigateToContact}>Contact me</button>
                </div>
                </div>
            </div>
            <div className="tc nextlinkdiv">
            <a href='#mainpage'>
                <span className="nextlink f1 mt5 pointer">
                ☇☇
                </span> 
            </a>
            </div>
        </header>
        </div>
    )
}

export default Header;