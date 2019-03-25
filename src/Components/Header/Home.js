import React from 'react';
import './Home.css';

const Home = ( {NavigateToHireMe, NavigateToContact} ) => {
    return(
    <div className="tc-l mt4 mt5-m mt6-l ph3">
        <h1 className="f2 f2-l fw2 white-90 mb0 lh-title">Hi, i'm Khaled Khazem</h1>
        <h2 className="fw1 f3 white-80 mt3 mb4">I'm a web developer from Algeria.
                        I can help you build your next product.</h2>
        <button className="Hiremenow f6 no-underline grow dib v-mid bg-blue white ba b--blue ph3 pv2 mb3 pointer" onClick={NavigateToHireMe}>Hire me now !</button>
        <span className="dib v-mid ph3 white-70 mb3">or</span>
        <button className="link f6 no-underline grow dib v-mid white ba b--white ph3 pv2 mb3 pointer" onClick={NavigateToContact}>Contact me</button>
        <div className="tc nextlinkdiv">
            <a className="nounderline" href='#mainpage'>
                <h1 className="nextlink f1 pointer">
                ☇☇
                </h1> 
            </a>
        </div>
    </div>
    )
}

export default Home;