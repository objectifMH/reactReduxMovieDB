import React, { Component } from 'react';

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';


class Manav extends Component {
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
                                    <Link className="nav-link" to='/home' >New Home 4</Link>
                                    <span className="sr-only">(current)</span>
                                </li>
                                <li className="nav-item mx-2">
                                    <Link className="nav-link" to='/favoris' >Mes favoris<span className="badge badge-success badge-pill mr-1 nb-fav">{this.props.films.length}</span></Link>
                                    
                                </li>	
                                <li className="nav-item mx-2">
                                    <Link className="nav-link" to='/gallery' >Gallery</Link>
                                </li>								
                            </ul>
                        </div>
                    
                    </div>
                    
                 </nav>
             </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        films: state.films
    }
}

export default connect(mapStateToProps)(Manav)
