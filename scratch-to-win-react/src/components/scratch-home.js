import React from 'react';
import {Link} from 'react-router-dom';

import Slider from 'react-slick';

class ScratchHome extends React.Component {

    heroSlickSettings = {
            dots: true,
            arrows: false,
            autoplay: true,
            infinite: true,
            autoplaySpeed: 5000,
    }

    sponsorSlickSettings = {
            dots: true,
            autoplay: true,
            infinite: true,
            autoplaySpeed: 5000,
            slidesToShow: 1,
            variableWidth: true,
            lazyLoad: 'ondemand',
    }

    render() {
        return (
            <main>
                <Slider className="heroImg wrapper" {...this.heroSlickSettings}>
                    <div className="heroContainer"> 
                        <img className="hero-bg" width="2000px" src={require("../images/bg.png")}/>
                        <div className="hero-content">
                            <img width="300px" src={require("../images/logo_main.png")}/>
                            <img width="600px" src={require("../images/scratch_logo.png")}/>
                            <Link to="/form"><button className="playBtn">Play Now</button></Link>
                        </div>
                    </div>
                    {/* <div> <img src="/"/> </div>
                    <div> <img src="/"/> </div> */}
                </Slider>

                <section className="info">
                    <fieldset className="cardContainer">
                        <legend>
                            How to Play The Game?
                        </legend>
                        <div className="dotLine"></div>
                        <div className="card">
                            <img src={require("../images/step_1.png")} className="cardlogo"/>
                            <p>Fill out user information form.
                            </p>
                        </div>

                        <div className="card">
                            <img src={require("../images/step_2.png")} className="cardlogo"/>
                            <p>Click on the "Play Game" Button.
                            </p>
                        </div>

                        <div className="card">
                            <img src={require("../images/step_3.png")} className="cardlogo"/>
                            <p>scratch a card to see your results.
                            </p>
                        </div>

                        <div className="card">
                            <img src={require("../images/step_4.png")} className="cardlogo"/>
                            <p>if you won prize you have to answer a skill question in order to get prize. if you lost on the game, you can re-attempt after 72 hours after each attempt.
                            </p>
                        </div>
                        <div className="infoBtn">
                            <Link to="/form"><button className="playBtn"> Play Now </button></Link>
                        </div>
                    </fieldset>
                </section>

                <section className="sponsor">
                    <div className="verticalTab">
                        <h3>OUR SPONSOR</h3>
                    </div>
                    <section className="sponsorSection">
                        <Slider {...this.sponsorSlickSettings}>
                            <img className="sponsorImg" src={require("../images/Fresh Kicks-o-matic Dispenso Booths.png")}/>
                            {/* <img className="sponsorImg" src={require("../images/Glorbotronic Burgers.png")}/>
                            <img src={require("../images/Raw-Cabbage-on-a-stick Hut.png")}/>
                            <img src={require("../images/taco_superstore.png")}/> */}
                        </Slider>
                    </section>
                </section>
            </main>
        )
    }
}

export default ScratchHome;