import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './filmFav.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes, faCheckCircle} from '@fortawesome/free-solid-svg-icons';

export default class FilmFav extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            film: {
                cover:'https://image.tmdb.org/t/p/original',
                isPresent: true
            }
             
        }
    }
    
    render() {

        console.log(this.props.film)
        return (
            <div className=" container my-container-film">
                <div className="gauche">

                    {
                        this.props.film['poster_path'] !== null ? 
                        <img  src={this.state.film.cover + this.props.film['poster_path']} alt={"Cover "+this.props.film.title}></img>
                                                                :
                        <img  src={window.location.origin + '/no_image.png'}  alt={this.props.film.title}/>                                         
                                                                
                    }
                    
                </div>
                <div className="centre">
                <Link className="nav-link link-people" to={'/film/' + this.props.film.id}  ><h4>{this.props.film.title}</h4></Link>
                    
                    <p>{this.props.film.release_date}</p>
                </div>
                <div className="droite">
                    {
                        this.state.film.isPresent === true ? 
                        <FontAwesomeIcon icon={faCheckCircle}  /> : 
                        <FontAwesomeIcon icon={faTimes}  />
                    }
                    
                
                </div>
                
            </div>
        )
    }
}
