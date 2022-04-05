import React from 'react';
import {Link} from 'react-router-dom';

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <section className="footerContainer">
                    {/* footer logo */}
                    <Link to="/" className="logo">
                        <img  alt="Logo" width="150px" src={require("../images/buyMoreDollars_black_logo.png")}/>
                    </Link>
                    {/* footer copyright */}
                    <p>Copyright 2022 All Rights Reserved by BuyMore Dollars</p>
                    {/* footer legal */}
                    <Link to="/legal"><p>Legal</p></Link>
                </section>
                {/* social media icons */}
                <section className="socialIcon">
                    <p>Stay Connected : </p>
                    <img width="35px" src={require("../images/FB_icon.png")} alt=""/>
                    <img width="35px" src={require("../images/twittter_icon.png")} alt=""/>
                    <img width="35px" src={require("../images/instagram_icon.png")} alt=""/>
                    <img width="35px" src={require("../images/youtube_icon.png")} alt=""/>
                </section>
            </footer>
        )
    }
}

export default Footer;