import React from 'react';
import { Link }  from 'react-router-dom';

class Header extends React.Component {

    render() {
        return (
            <header className="navBar">
            <Link to="/"><img  alt="Logo" width="175px" src={require("../images/logo_main.png")}/></Link>
                
            <nav className="navLinkContainer">
                <ul>
                    <li>                
                        <Link to="/" className="navlink"> HOME </Link>
                    </li>
                    <li>                
                        <Link to="/form" className="navlink"> GAME </Link>
                    </li>
                    <li>                
                        <Link to="/game" className="navlink"> FAQ </Link>
                    </li>
                    <li>                
                        <Link to="/contact" className="navlink"> CONTACT </Link>
                    </li>
                </ul>
            </nav>
        </header>
        )
    }
}

export default Header;