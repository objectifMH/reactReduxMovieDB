import React, { Component } from 'react';
import FilmFav from './filmFav';
import { connect } from 'react-redux';
//import './favoris.scss';


class Favoris extends Component {
    
    supprimeFilmFav = (film) => {
        this.props.supprimeFilmFavDispatch(film);
    }

    render() { 

        return (
            <div className=" container container-list">
                <h3>My favorite movies:</h3>
                {
                    this.props.films.length !== 0 ? 
                    this.props.films.map( film => 
                        <div className="m-2 div-film" key={film.id}> 
                            <FilmFav film={film} clickHandler={()=> this.supprimeFilmFav(film)}></FilmFav>
                            {/* <FontAwesomeIcon icon={faTrash} onClick={() => this.supprimeFilmFav(film)}/> */}
                        </div>
                        )                      :
                        <p className="your-list">Your List is empty </p>
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