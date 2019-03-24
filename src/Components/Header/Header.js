import React from 'react';
import './Header.css';
import Home from './Home';
import About from './About';
import Journey from './Journey';
import Pricing from './Pricing';
import spider from '../../Images/spider.png';



const Header = ( {render, NavigateToHome, NavigateToAbout, NavigateToJourney, NavigateTopricing, NavigateToHireMe, NavigateToContact} ) => {


    return(
        <div className="header mb5">
            <header className="db bg-black-80 h-100 w-100">
                <div className="cover bg-left bg-center-l">
                    <div className="pb5 pb6-m pb7-l">
                        <nav className="dt w-100 mw8 center"> 
                            <div onClick={NavigateToHome} className="w-30 dtc w2 v-mid pa3 pointer grow">
                                <img src={spider} alt="spider" className="spider"/>
                                <h1 className="dib white-80">xlincw0w</h1>
                            </div>
                            <div className="dtc v-mid tr pa3">
                                <button className="link f6 fw4 hover-white no-underline white-70 dn dib-l pv2 ph3" onClick={NavigateToAbout}>About</button> 
                                <button className="link f6 fw4 hover-white no-underline white-70 dn dib-l pv2 ph3" onClick={NavigateToJourney}>Journey</button> 
                                <button className="link f6 fw4 hover-white no-underline white-70 dn dib-ns pv2 ph3" onClick={NavigateTopricing}>Pricing</button> 
                                <button className="link f6 fw4 hover-white no-underline white-70 dib ml2 pv2 ph3 ba" onClick={NavigateToHireMe}>Hire me</button> 
                            </div>
                        </nav>
                        <div>
                            <Home NavigateToHireMe={NavigateToHireMe} NavigateToContact={NavigateToContact}/>
                            <About NavigateToHome={NavigateToHome} render={render} />
                            <Journey NavigateToHome={NavigateToHome} render={render} />
                            <Pricing NavigateToHome={NavigateToHome} render={render} />
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header;