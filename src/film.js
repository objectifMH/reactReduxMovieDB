import React, { Component } from 'react';

import axios from '../node_modules/axios';

import './film.scss';
import { Link } from '../node_modules/react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';


export default class Film extends Component {
    constructor(props) {
        super(props)

        this.state = {
            film: null,
            filmId: '',
            acteurs: null,
            urlQuery: "https://api.themoviedb.org/3/movie/",
            urlCover: "http://api.themoviedb.org/3/search/movie?api_key=369db2052a84d1a49d133d25a3983cbd&query=",
            urlImage: "https://image.tmdb.org/t/p/original/",
            apiKey: "369db2052a84d1a49d133d25a3983cbd",

            //https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=<<api_key>>
        }
    }

    componentDidMount() {
        this.setState(
            prevState => ({ filmId: this.props.match.params.id }),
            () => this.getFilm(this.state.filmId)
        )

    }

    getFilm() {

        let url = "".concat(this.state.urlQuery, this.state.filmId, "?api_key=", this.state.apiKey);
        axios.get(url)
            .then(res => {
                const filmResult = res.data;
                console.log(res.data);

                this.setState(
                    prevState => ({ film: filmResult }),
                    () => this.getActeurs()
                );
            })
    }

    getActeurs() {

        //https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=<<api_key>>

        let url = "".concat(this.state.urlQuery, this.state.filmId, "/credits?api_key=", this.state.apiKey);
        axios.get(url)
            .then(res => {
                const acteursRes = res.data;
                console.log(res.data);

                this.setState(
                    prevState => ({ acteurs: acteursRes })
                );
            })

    }

    render() {
        let srcBack =   this.state.film ? ( this.state.film['backdrop_path'] ? this.state.urlImage + this.state.film['backdrop_path'] : window.location.origin + '')
                                    : window.location.origin + ''
                ;
        let srcPoster =   this.state.film ? ( this.state.film['poster_path'] ? this.state.urlImage + this.state.film['poster_path'] : window.location.origin + '/no_image.png')
                                    : window.location.origin + '/no_image.png'
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

                        <h1>{this.state.film.title}<span className="date"> ({this.state.film.release_date}) </span>
                            <br></br>
                            <span className="tagline">{this.state.film.tagline}</span>
                        </h1>


                        <div className="container-gd">
                        <div className="gauche">
                            <img src={srcPoster} />

                        </div>
                        <div className="droite">
                        <div className="sypnosis">
                                {

                                    this.state.film.genres.map((genre, index) =>
                                        <span key={index} className="btn btn-success mr-1">{genre.name}


                                        </span>
                                    )

                                }

                                <br></br><br></br><strong>Sypnosis: </strong>
                                <br></br>
                                <br></br>

                                {this.state.film.overview}
                                <span class="badge badge-warning badge-pill vote">Vote : {this.state.film.vote_average}</span>
                                <br></br>
                                {this.state.acteurs != null ? 

                                    this.state.acteurs.cast.map((acteur, index) =>

                                        index <= 10 ? <Link className="nav-link link-people" to={'/people/' + acteur.id}  key={index}><span className="btn btn-info m-1 mt-3" >{acteur.name}</span></Link> :
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
