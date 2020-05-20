import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faCommentDots, falinkedin, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

export default class Footer extends Component {
    render() {
        return (
            <div className="position-relative footer">

                <ul>
                    <li className="nav-item active mx-2 ">
                        <Link className="nav-link link-logo" to='/home' > <span className="logo-bottom">8Mirr∞r</span> </Link>

                    </li>
                    <li>
                        <a href='https://www.themoviedb.org/?language=fr-FR' > <img className="card-img-top" src={process.env.PUBLIC_URL + '/tmdb.svg'} alt="The movie DB" />
                        </a>

                    </li>
                    <li>Contact Us
                        <div>
                            <a href='https://www.linkedin.com/in/m-hatchi-bb4b49156/' >
                                <FontAwesomeIcon icon={faLinkedinIn} />
                            </a>
                            <a href='https://github.com/objectifMH/reactReduxMovieDB' >
                                <FontAwesomeIcon icon={faGithub} />
                            </a>

                        </div>
                    </li>

                </ul>
                <div className="footer-foot">
                    <span>©2020 copyright.fr. All right reserved.</span>
                </div>
            </div>
        );
    }
}
