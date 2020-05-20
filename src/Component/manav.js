import React, { Component } from 'react';

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';


class Manav extends Component {
    render() {
        return (


            <div className="ma-nav-container">

                <nav className="navbar navbar-expand-lg fixed-top navbar-dark secondary-color-dark">
                    <div className="container">



                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav"
                            aria-controls="basicExampleNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>


                        <div className="collapse navbar-collapse" id="basicExampleNav">


                            <ul className="navbar-nav mx-auto mr-auto manav-ul">
                                <li className="nav-item active mx-2 ">
                                    <Link className="nav-link link-logo" to='/home' > <span className="logo">8Mirr∞r</span> </Link>
                                    <span className="sr-only "></span>
                                </li>
                                <li className="nav-item active mx-2 vide">
                                    <span className="sr-only "></span>
                                </li>
                                <li className="nav-item active mx-2">
                                    <Link className="nav-link" to='/home' > Home </Link>
                                    <span className="sr-only"></span>
                                </li>
                                <li className="nav-item mx-2">
                                    <Link className="nav-link" to='/favoris' >My favourites<span className="badge badge-success badge-pill mr-1 nb-fav">{this.props.films.length}</span></Link>
                                    <span className="sr-only"></span>
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
