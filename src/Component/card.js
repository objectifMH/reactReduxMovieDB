import React, { Component } from 'react';

import { Link } from 'react-router-dom';
//import './card.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots, faPlusCircle, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';


class Card extends Component {

    constructor(props) {
        super(props)

        this.state = {

            urlCover: "http://api.themoviedb.org/3/search/movie?api_key=369db2052a84d1a49d133d25a3983cbd&query=",
            urlImage: "https://image.tmdb.org/t/p/original/",
            isFavorite: false
        }

    }
    verifFavorite() {
        return this.props.films.map(film => {
            if (film.id === this.props.film.id) {
                this.setState(
                    prevState => ({ isFavorite: true })
                );
            }
        })
    }

    clickCollapseCard = () => {
        this.props.clickCollapse(this.props.film);
        console.log(this.props.film);
    }

    clickAjouterFilmFav = () => {
        this.setState(
            prevState => ({ isFavorite: !this.state.isFavorite }),
            () => this.props.ajouterFilmFavDispatch(this.props.film) ,
            //this.verifFavorite()
        );

    }

    clickSuppFilmFav = () => {
        this.setState(
            prevState => ({ isFavorite: !this.state.isFavorite }),
            () => this.props.supprimeFilmFavDispatch(this.props.film) ,
            //this.verifFavorite()
        );

    }

    render() {

        let fav = false;
        for (let film of this.props.films) {
            if (film.id === this.props.film.id) {
                fav = true;
            }
        }

        const type = this.props.film.first_air_date !== undefined  ? "tv" : "movie";
        //console.log(this.props.film)

        return (
            <div className="m-2">

                <div className="card div-card" >

                    <h6 className="card-title p-2">
                        {
                            this.props.tv === true ? this.props.film.name : this.props.film.title
                        }

                    </h6>
                    <Link className="nav-link link-people" to={'/film/' + this.props.film.id + '/' + type}  >
                        {
                            this.props.film['poster_path'] === null ?
                            <img className="card-img-top" src={process.env.PUBLIC_URL + '/no_image.png'} alt={this.props.film.title}  />:
                            <img className="card-img-top" src={this.state.urlImage + this.props.film['poster_path']} alt={this.props.film.title} />
                        }
                    </Link>

                    <FontAwesomeIcon icon={faCommentDots} title="Plus de détails"
                        data-toggle="modal" data-target="#myModal"
                        onClick={this.clickCollapseCard} />

                    {
                        fav === false ?
                            <FontAwesomeIcon icon={faPlusCircle} onClick={this.clickAjouterFilmFav} /> :
                            <FontAwesomeIcon icon={faCheckCircle} onClick={this.clickSuppFilmFav} />
                    }



                </div>

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
            dispatch({ type: "SUPP_FILM_FAV", film: film });
        },

        ajouterFilmFavDispatch: film => {
            dispatch({ type: "AJ_FILM_FAV", film: film });
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Card)