import React from 'react';
import { Link }  from 'react-router-dom';

class Header extends React.Component {

    render() {
        return (
            <header className="navBar">
            <a className="logo" href=''><img  alt="Logo" width="175px" src={require("../images/logo_main.png")}/></a>
                
            <nav className="navLinkContainer">
                <ul>
                    <li>                
                        <Link to="/" className="navlink" href="#"> HOME </Link>
                    </li>
                    <li>                
                        <Link to="/form" className="navlink" href="#"> GAME </Link>
                    </li>
                    <li>                
                        <Link to="/faq" className="navlink" href="#"> FAQ </Link>
                    </li>
                    <li>                
                        <Link to="/contact" className="navlink" href="#"> CONTACT </Link>
                    </li>
                </ul>
            </nav>
        </header>
        )
    }
}

export default Header;