import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Navbar extends Component {
    render() { 
        return (  
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container headingformats">
                    <Link className="navbar-brand" to="/about">Lam Nguyen</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link className="nav-item nav-link" to="/about">About <span className="sr-only">(current)</span></Link>
                            <Link className="nav-item nav-link" to="/portfolio">Portfolio</Link>
                            <Link className="nav-item nav-link" to="/contact">Contact</Link>
                        </div>
                    </div>
                </div>
            </nav>

        );
    }
}
 
export default Navbar;