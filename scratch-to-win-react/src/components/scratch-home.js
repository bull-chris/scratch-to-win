import React from 'react';
import {Link} from 'react-router-dom';

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class ScratchHome extends React.Component {

    //hero images slider settings
    heroSlickSettings = {
            dots: true,
            arrows: false,
            autoplay: true,
            infinite: true,
            autoplaySpeed: 5000,
    }

    //sponsor images slider settings
    sponsorSlickSettings = {
            dots: true,
            autoplay: true,
            infinite: true,
            autoplaySpeed: 3000,
            slidesToShow: 1,
            variableWidth: true,
            lazyLoad: 'ondemand',
    }

    render() {
        //scratch home page
        return (
            <main>
                {/* hero images slider */}
                <Slider className="heroImg wrapper" {...this.heroSlickSettings}>
                    <div className="heroContainer"> 
                        <img className="hero-bg" width="2000px" alt='Hero slider 1' src={require("../images/bg.png")}/>
                        <div className="hero-content">
                            <img width="300px" alt='Buymore Dollars Logo' src={require("../images/logo_main.png")}/>
                            <img width="600px" alt='Scratch to win Logo' src={require("../images/scratch_logo.png")}/>
                            <Link to="/form"><button className="playBtn">Play Now</button></Link>
                        </div>
                    </div>
                    <div className="heroContainer"> 
                        <img className="hero-bg" width="2000px" alt='Hero slider 2' src={require("../images/slider-02.png")}/>
                        <div className="hero-content">
                            <img width="300px" alt='Buymore Dollars Logo' src={require("../images/logo_main.png")}/>
                            <img width="600px" alt='Scratch to win Logo' src={require("../images/scratch_logo.png")}/>
                            <Link to="/form"><button className="playBtn">Play Now</button></Link>
                        </div>
                    </div>
                    <div className="heroContainer"> 
                        <img className="hero-bg" width="2000px" alt='Hero slider 3' src={require("../images/slider-03.png")}/>
                    </div>
                </Slider>

                {/* instructions section */}
                <section className="info">
                    <fieldset className="cardContainer">
                        <legend>
                            How to Play The Game?
                        </legend>
                        <div className="dotLine"></div>
                        <div className="card">
                            <img src={require("../images/step_1.png")} alt='Step 1 instructions' className="cardlogo"/>
                            <p>Head to the Game Page to view the Contest Form. If you wish to play, please fill out the form with your information.</p>
                        </div>

                        <div className="card">
                            <img src={require("../images/step_2.png")} alt='Step 2 instructions' className="cardlogo"/>
                            <p>Submit the form, and then hit the "Start" button on the game page.</p>
                        </div>

                        <div className="card">
                            <img src={require("../images/step_3.png")} alt='Step 3 instructions' className="cardlogo"/>
                            <p>Scratch $ coins to reveal what's behind them. Get lucky and you could win 10k+ Buymore Dollars!</p>
                        </div>

                        <div className="card">
                            <img src={require("../images/step_4.png")} alt='Step 4 instructions' className="cardlogo"/>
                            <p>If you win a prize, you must complete a skill testing questionnaire to confirm your validity. If you lose, you may attempt again in 72 hours.</p>
                        </div>
                        <div className="infoBtn">
                            <Link to="/form"><button className="playBtn"> Play Now </button></Link>
                        </div>
                    </fieldset>
                </section>

                {/* sponsor section */}
                <section className="sponsor">
                    <div className="verticalTab">
                        <h3>OUR SPONSOR</h3>
                    </div>
                    <section className="sponsorSection">
                        <Slider {...this.sponsorSlickSettings}>
                            <img className="sponsorImg" alt='Sponsor slider 1' src={require("../images/Fresh Kicks-o-matic Dispenso Booths.png")}/>
                            <img className="sponsorImg" alt='Sponsor slider 2' src={require("../images/Glorbotronic Burgers.png")}/>
                            <img className="sponsorImg" alt='Sponsor slider 3' src={require("../images/Raw-Cabbage-on-a-stick Hut.png")}/>
                            <img className="sponsorImg" alt='Sponsor slider 4' src={require("../images/taco_superstore.png")}/>
                        </Slider>
                    </section>
                </section>
            </main>
        )
    }
}

export default ScratchHome;