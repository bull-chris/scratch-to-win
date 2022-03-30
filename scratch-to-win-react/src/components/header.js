import React from 'react';

class Header extends React.Component {

    render() {
        return (
            <header className="navBar">
            <a className="logo">
                <img  alt="Logo" width="175px" src={require("../images/logo_main.png")}/>
            </a>
            <nav className="navLinkContainer">
                <ul>
                    <li>                
                        <a className="navlink" href="#"> HOME </a>
                    </li>
                    <li>                
                        <a className="navlink" href="#"> GAME </a>
                    </li>
                    <li>                
                        <a className="navlink" href="#"> FAQ </a>
                    </li>
                    <li>                
                        <a className="navlink" href="#"> CONTACT </a>
                    </li>
                </ul>
            </nav>
        </header>
        )
    }
}

export default Header;