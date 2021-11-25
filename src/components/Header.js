import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return ( 
        <header>
            <Link to="/Home">
                <img src="hubone.png" alt="Hub-One"/>
            </Link>
                <nav>
                    <div className="navbar-start">
                        <Link to="/ServiceID" className="navbar-item">
                            Corriger Service ID
                        </Link>
                        <Link to="/IccID" className="navbar-item">
                            Corriger IccID
                        </Link>
                        <Link to="/FactID" className="navbar-item">
                            Corriger Numéro Facturation
                        </Link>
                    </div>
                </nav>
        </header>
     );
}
 
export default Header;