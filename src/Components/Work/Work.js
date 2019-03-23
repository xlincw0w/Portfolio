import React from 'react';
import './Work.css';

const Work = () => {
    return (
        <div className="mt7 mb7" id="mainpage">
            <header className="tc ph4">
                <h1 className="f1 fw2 blue w-30 center bb bw1 mv3 grow ">How it works !</h1>
                <div className="mt6">
                    <h2 className="mt5">
                        Getting Started
                    </h2>
                    <h3 className="textwork f5 f4-m f3-l fw2 black-50 mt0 lh-copy">
                    There is a standard way that i work with all my projects, however,
                    all starts with a conversation where we get to know each other. It also helps me understand what you’re all about. 
                    From there I’ll get you to fill in a brief so I can grasp the important details.
                    </h3>
                    <h2 className="mt5">
                        Design & Development
                    </h2>
                    <h3 className="textwork f5 f4-m f3-l fw2 black-50 mt0 lh-copy">
                    it starts off with wireframes and design as the first step.
                    When the design is signed off the project goes into development. From there I built the site using react, 
                    or whatever tool we’ve decided is applicable to your project.
                    </h3>
                    <h2 className="mt5">
                        Launch
                    </h2>
                    <h3 className="textwork f5 f4-m f3-l fw2 black-50 mt0 lh-copy">
                    After the site is built I’ll give you as much tutoring as you’ll need. 
                    This will allow you to fully control over managing the site in the future,
                    and of course even after the site is deployed i'll be available.
                    </h3>
                </div>
            </header>
        </div>
    )
}


  export default Work;