import React, { Component } from 'react';

class Navbar extends Component {
    render() { 
        return (  
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container headingformats">
                    <a className="navbar-brand" href="#">Lam Nguyen</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-item nav-link" href="index.html">About <span className="sr-only">(current)</span></a>
                            <a className="nav-item nav-link" href="portfolio.html">Portfolio</a>
                            <a className="nav-item nav-link" href="contact.html">Contact</a>
                        </div>
                    </div>
                </div>
            </nav>

        );
    }
}
 
export default Navbar;