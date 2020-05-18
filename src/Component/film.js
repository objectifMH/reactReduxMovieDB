import React, { Component } from 'react';

import axios from 'axios';

//import './film.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft , faPlusCircle , faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import { connect } from 'react-redux';

class Film extends Component {
    constructor(props) {
        super(props)

        this.state = {
            film: null,
            filmId: '',
            acteurs: null,
            urlQuery: "https://api.themoviedb.org/3/",
            urlCover: "http://api.themoviedb.org/3/search/movie?api_key=369db2052a84d1a49d133d25a3983cbd&query=",
            urlImage: "https://image.tmdb.org/t/p/original",
            apiKey: "369db2052a84d1a49d133d25a3983cbd",
            isFavorite: null,
            type: null

            //https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=<<api_key>>
        }
        console.log(this.props);
    }

    componentDidMount() {
        
        let paramId = this.props.match.params.id; 
        let type = this.props.match.params.type;
        console.log(paramId);
        console.log(this.state.films);

        this.setState(
            prevState => ({ filmId: paramId,
            type: type }),
            () => this.getFilm(this.state.filmId)
        )

    }

    getFilm() {
        let url = "".concat(this.state.urlQuery, this.state.type, '/', this.state.filmId, "?api_key=", this.state.apiKey);
        axios.get(url)
            .then(res => {
                const filmResult = res.data;
                console.log(res.data);

                this.setState(
                    prevState => ({ film: filmResult , isFavorite: false }),
                    () => {
                        this.getActeurs();
                        // eslint-disable-next-line array-callback-return
                        this.props.films.map(film => {
                            if (film.id === this.state.film.id)
                                {
                                    this.setState(
                                        prevState => ({ isFavorite: true })
                                    );
                                 }
                        }) 

                    }
                );
            })
    }

    getActeurs() {

        //https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=<<api_key>>

        let url = "".concat(this.state.urlQuery, this.state.type, '/', this.state.filmId, "/credits?api_key=", this.state.apiKey);
        axios.get(url)
            .then(res => {
                const acteursRes = res.data;
                console.log(res.data);

                this.setState(
                    prevState => ({ acteurs: acteursRes })
                );
            })
    }

    

    clickAjouterFilmFav = (film) => {
        console.log(film);
        this.setState(
            prevState => ({ isFavorite: !this.state.isFavorite }),
            () => this.props.ajouterFilmFavDispatch(film)
        );
        
    }

    clickSuppFilmFav= (film) => {
        console.log(film);
        this.setState(
            prevState => ({ isFavorite: !this.state.isFavorite }),
            () => this.props.supprimeFilmFavDispatch(film)
        );
        
    }

    render() {

        console.log(this.props.film)
        let srcBack =   this.state.film ? ( this.state.film['backdrop_path'] ? this.state.urlImage + this.state.film['backdrop_path'] : window.location.origin + '')
                                    : window.location.origin + ''
                ;
        let srcPoster =   this.state.film ? ( this.state.film['poster_path'] ? this.state.urlImage + this.state.film['poster_path'] : process.env.PUBLIC_URL +'/no_image.png')
                                    : process.env.PUBLIC_URL +'/no_image.png'
                ;

        if (this.state.film != null)
            return (
                
                <div className="container-fluid header-container" style={{
                    backgroundImage: "url(" + srcBack + ")"
                }}>
                    <Link className="nav-link close" to={'/gallery'} >
                        <FontAwesomeIcon icon={faArrowAltCircleLeft} alt={'Retour à la page précedente'} data-toggle="tooltip" data-placement="right" title="Retour à la page précédente!" />
                    </Link>
                    <div className="container">

                        <h1>
                            {
                                this.state.type === 'movie' ? 
                                this.state.film.title
                                :
                                this.state.film.name 
                            }
                        <span className="date"> ({
                            this.state.type === 'movie' 
                            ? 
                            this.state.film.release_date
                            :
                            this.state.film.first_air_date + ' / ' + this.state.film.last_air_date
                        }) 
                        </span>
                            
                            <p className="tagline">{
                                this.state.type === 'movie' 
                                ? 
                                this.state.film.tagline
                                :
                                this.state.film.original_name
                            
                            }</p>
                        </h1>

                        <div className="container-gd">
                            <div className="gauche">
                                <img src={srcPoster}  alt={this.state.film.title}/>
                                
                            </div>
                            <div className="droite">
                                <div className="sypnosis">
                                    {
                                        this.state.film.genres.map((genre, index) =>
                                            <span key={index} className="badge badge-success badge-pill mr-1 genre">{genre.name}
                                            </span>)
                                    }

                                    <p>
                                        <strong>Sypnosis: </strong>
                                    </p>
                                    <p>
                                        {this.state.film.overview}
                                    </p>
                                    <span>
                                    {
                                        this.state.isFavorite === false ? 
                                        <FontAwesomeIcon icon={faPlusCircle} onClick={() => this.clickAjouterFilmFav(this.state.film)} /> :
                                        <FontAwesomeIcon icon={faCheckCircle} onClick={() => this.clickSuppFilmFav(this.state.film)} />
                                    }
                                    </span>
                                    
                                    <span className="badge badge-warning badge-pill vote">Vote : {this.state.film.vote_average}</span>
                                    
                                    {this.state.acteurs != null ? 

                                        this.state.acteurs.cast.map((acteur, index) =>

                                            index <= 10 ? <Link className="nav-link link-people" to={'/people/' + acteur.id}  key={index} 
                                            data-toggle="tooltip" title={"<img src="+this.state.urlImage+acteur.profile_path+" />"}
                                            ><span className="btn btn-info m-1 mt-3" >{acteur.name}</span></Link> :
                                            ''
                                        ) : 
                                        <div className="spinner-border text-info"></div>

                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        else {
            return <div>
                Loading ...
        </div>
        }
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
        },

        ajouterFilmFavDispatch: film => {
            dispatch({ type: "AJ_FILM_FAV", film: film});
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Film)