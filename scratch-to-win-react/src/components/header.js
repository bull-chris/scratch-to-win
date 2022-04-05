import React from 'react';
import { Link }  from 'react-router-dom';

class Header extends React.Component {

    render() {
        return (
            <header className="navBar">
            {/* header logo */}
            <Link to="/scratch-to-win/"><img  alt="Logo" width="175px" src={require("../images/logo_main.png")}/></Link>
                
            {/* header nav bar */}
            <nav className="navLinkContainer">
                <ul>
                    <li>                
                        <Link to="/scratch-to-win/" className="navlink"> HOME </Link>
                    </li>
                    <li>                
                        <Link to="/form" className="navlink"> GAME </Link>
                    </li>
                    <li>                
                        <Link to="/legal" className="navlink"> LEGAL </Link>
                    </li>
                </ul>
            </nav>
        </header>
        )
    }
}

export default Header;