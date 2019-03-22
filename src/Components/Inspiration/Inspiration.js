import React from 'react';
import './Inspiration.css';
import Particles from 'react-particles-js';

const Inspiration = () => {
    const params = {
	    "particles": {
	        "number": {
	            "value": 220,
	            "density": {
	                "enable": false
	            }
	        },
	        "size": {
	            "value": 3,
	            "random": true,
	            "anim": {
	                "speed": 1,
	                "size_min": 0.3
	            }
	        },
	        "line_linked": {
                "enable": false,
	        },
	        "move": {
	            "random": true,
	            "speed": 0.5,
	            "direction": "top",
	            "out_mode": "out"
	        }
	    },
	    "interactivity": {
	        "modes": {
	            "bubble": {
	                "distance": 250,
	                "duration": 2,
	                "size": 0,
	                "opacity": 0
	            },
	            "repulse": {
	                "distance": 400,
	                "duration": 4
	            }
	        }
	    }
	}
    return (
        <div className="mt5">
            <article className="athelas">
                <div className="mb5 drawimg vh-100 dt w-100 tc bg-dark-gray white cover">
                    <div className="dtc v-mid">
                    <h1 className="f1 f-headline-l fw1 i black">xlincw0w</h1>
                    <blockquote className="ph0 mh0 measure f4 lh-copy center">
                        <Particles className="mt5 mb5" params={params}></Particles>
                        <p className="fw1 white-80">
                        Strategic planning centered around your consumers' intent. We never talk at our customers. We build with them.
                        </p>
                        <cite className="f6 ttu tracked fs-normal pb7 white-60">Khaled Khazem</cite>
                    </blockquote>
                    </div>
                </div>
                <div className="center measure-wide f5 pv5 lh-copy ph2">
                    <h1 className="f1 lh-title blue bb bw1 grow">Building high quality responsive websites and exceptional UX</h1>
                    <p>
                    Let’s build results together. My team and I can help your company realize the true potential the Internet has to offer.
                    Research, advertising, and creative. We have the experience and drive to make it happen.
                    </p>
                    <p>
                    My passion is creating, and I find happiness in being a better me today than the me yesterday.
                    </p>
                    <div className="mt6 w-75 center">
                        <h1 className="blue center bb bw1 grow f1-l fw2">Why work with me ?</h1>
                        <p>There’s nothing I enjoy more than designing and building great websites.
                            I’ve come to figure out which types of projects I want to work on. Currently, 
                            If you’re a small to medium sized business in need of a website,
                            I’m more than sure I can help you out.</p>
                    </div>
                </div>
             </article>
        </div>
    )
}


export default Inspiration;