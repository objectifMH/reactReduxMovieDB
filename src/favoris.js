import React, { Component } from 'react';
import FilmFav from './filmFav';
import { connect } from 'react-redux';
import './favoris.scss';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faTrash } from '@fortawesome/free-solid-svg-icons';

class Favoris extends Component {
    
    supprimeFilmFav = (film) => {
        console.log(film);
        this.props.supprimeFilmFavDispatch(film);
    }

    render() { 

        return (
            <div className=" container-list">
                <h3>Mes Films Favoris:</h3>
                {
                    this.props.films.length !== 0 ? 
                    this.props.films.map( film => 
                        <div className="m-2 div-film" key={film.id}> 
                            <FilmFav film={film}></FilmFav>
                            <FontAwesomeIcon icon={faTrash} onClick={() => this.supprimeFilmFav(film)}/>
                        </div>
                        )                      :
                        <p>Votre liste de favoris est vide </p>
                }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        films: state.films
    }
}

const mapDispatchToProps = dispatch => {
    return {
        supprimeFilmFavDispatch: film => {
            dispatch({ type: "SUPP_FILM_FAV", film: film});
        } 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Favoris)