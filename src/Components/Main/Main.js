import React from 'react';
import Image from 'react-bootstrap/Image';
import khaled from '../../Images/khaled.jpg';
import './Main.css';

const Main = () => {
    return (
        <div className="">
            <article className="cf ph3 ph5-ns pv5">
                <header className="fn fl-ns w-50-ns pr4-ns">
                    <h1 className="f2 lh-title fw9 mb3 mt0 pt3 bt bw2 blue grow">
                    Skills & Experience
                    </h1>
                    <h2 className="f3 mid-gray lh-title">
                    3rd year computer scientist at Mouloud Mammeri University
                    </h2>
                    <time className="f5 gray">Reactjs, Nodejs, Javascript, Python</time>
                </header>
                <div className="fn fl-ns w-50-ns">
                    <p className="f5 lh-copy measure mt0-ns">
                    <b className="f3 blue">Everything</b> started since 2014 when i first googled "How to create a website", 
                    this was the moment i've landed into HTML, for an instant it was astonishing,
                    few mounth later i jumped into javascript and that was much more exciting 
                    i literally fell in love with that language.
                    </p>
                    <p className="f5 lh-copy measure">
                    Who am i ?, Alright since i've got my baccalaureate in mathematics field, i signed up in Mouloud Mammeri
                    Tizi-Ouzou university and i'm still there for finishing my course in computer science domain
                    i'm a guy who was completely addictive to video games like Counter Strike
                    but for now i spent my time more coding and learning then anything else.
                    </p>
                </div>
            </article>
            <div className="disapear center">
            <div className="mt7 mb4">
                    <div className="tc ph5 mh7 bl br bw2 b--blue">
                    <Image className="ba bw1 b--blue" src={khaled} roundedCircle />
                    </div>             
            </div>
            </div>
        </div>
    )
}


  export default Main;