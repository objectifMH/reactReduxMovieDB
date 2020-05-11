import React, { Component } from 'react';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Link } from '../node_modules/react-router-dom';


export default class Manav extends Component {
    render() {
        return (

            
            <div>
                
                <nav className="navbar navbar-expand-lg fixed-top navbar-dark secondary-color-dark">
                    <div className="container">
                
                    
                    
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav"
                            aria-controls="basicExampleNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    
                    
                        <div className="collapse navbar-collapse" id="basicExampleNav">
                    
                    
                            <ul className="navbar-nav mx-auto mr-auto">
                                <li className="nav-item active mx-2">
                                    <Link className="nav-link" to='home' >Home</Link>
                                    <span className="sr-only">(current)</span>
                                </li>
                            
                                
                                <li className="nav-item mx-2">
                                    <a className="nav-link" href="#projects">Projects</a>
                                </li>
                                <li className="nav-item mx-2">
                                    <a className="nav-link" href="#pricing">Pricing</a>
                                </li>
                                <li className="nav-item mx-2">
                                    <Link className="nav-link" to='/favoris' >Mes favoris</Link>
                                </li>
                                <li className="nav-item mx-2">
                                    <Link className="nav-link" to='/diaporama' >Diaporamas</Link>
                                </li>		
                                <li className="nav-item mx-2">
                                    <Link className="nav-link" to='/gallery' >Gallery</Link>
                                </li>					
                                <li className="nav-item mx-2">
                                    <a className="nav-link" href="#contact">Contact</a>
                                </li>								
                            </ul>
                    
                            <form className="form-inline text-white">
                                <div className="md-form my-0">
                                    <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search"/>
                                    <i className="fa fa-search pr-3"></i>
                                </div>
                            </form>
                        </div>
                    
                    </div>
                    
                 </nav>
             </div>
        )
    }
}
