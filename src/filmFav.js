import React, { Component } from 'react';

import './filmFav.scss';
import axios from '../node_modules/axios';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes} from '@fortawesome/free-solid-svg-icons';
import { Link } from '../node_modules/react-router-dom';

export default class FilmFav extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            film: {
                id:'',
                titre:'film.titre',
                annee:'film.annee',
                cover:'https://image.tmdb.org/t/p/original//h4VB6m0RwcicVEZvzftYZyKXs6K.jpg',
                isPresent: true
            }
             
        }
    }
    
    render() {
        return (
            <div className=" container my-container-film">
                <div className="gauche">
                    <img  src={this.state.film.cover} ></img>
                </div>
                <div className="centre">
                    <p>{this.state.film.titre}</p>
                    <p>{this.state.film.annee}</p>
                </div>
                <div className="droite">
                    {
                        this.state.film.isPresent === true ? 
                        <FontAwesomeIcon icon={faCheck}  /> : 
                        <FontAwesomeIcon icon={faTimes}  />
                    }
                    
                
                </div>
                
            </div>
        )
    }
}
