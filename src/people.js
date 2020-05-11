import React, { Component } from 'react';

import axios from '../node_modules/axios';
import './people.scss';

import { Link } from '../node_modules/react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';

export default class People extends Component {
constructor(props) {
    super(props)

    this.state = {
            acteur: null,
            acteurId: '',
            urlQuery: "https://api.themoviedb.org/3/person/",
            urlImage: "https://image.tmdb.org/t/p/original",
            apiKey: "369db2052a84d1a49d133d25a3983cbd",
            films: null

        }
    }

    componentDidMount() {
        this.setState(
            prevState => ({ acteurId: this.props.match.params.id }),
            () => this.getActeur(this.state.acteur)
            )
    }

    getActeur() {
        //https://api.themoviedb.org/3/person/{person_id}?api_key=<<api_key>>&language=en-US

        //https://api.themoviedb.org/3/person/153/api_key=369db2052a84d1a49d133d25a3983cbd

        let url = "".concat(this.state.urlQuery, this.state.acteurId, "?api_key=", this.state.apiKey);
        axios.get(url)
            .then(res => {
                const acteurRes = res.data;
                console.log(res.data);

                this.setState(
                    prevState => ({ acteur: acteurRes }),
                    () => this.getFilms()
                );
        })
    }

    getFilms() {
        //https://api.themoviedb.org/3/person/{person_id}/movie_credits?api_key=<<api_key>>&language=en-US

        let url = "".concat(this.state.urlQuery, this.state.acteurId, "/movie_credits?api_key=", this.state.apiKey);
        axios.get(url)
            .then(res => {
                const filmRes = res.data.cast;

                this.setState(
                    prevState => ({ films: filmRes })
                );
        })
    }


    render() {
        if ( this.state.acteur != null)
        return (
            <div className="container people">

            

            <h1>{this.state.acteur.name}</h1>
                <div className="row">
                <div className="container-gd">
                    <div className="gauche">
                        {
                            this.state.acteur.profile_path !== null ? 
                            <img src={this.state.urlImage+this.state.acteur.profile_path} /> :
                            <img src={window.location.origin + '/no_image.png'} />

                        }
                        
                    </div>
                    <div className="droite">
                        <div className="biographie">
                        <p>{this.state.acteur.also_known_as[0]}</p>
                        <p>{this.state.acteur.place_of_birth}</p>
                        <p>{this.state.acteur.birthday}</p>
                        {this.state.acteur.deathday !== null ? this.state.acteurdeathday : ''}

                        <br></br>

                                <strong>{this.state.acteur.biography.length !== 0 ? 'Biographie:' : "" } 
                                    <br></br>
                                    <br></br>
                                    {this.state.acteur.biography.split(' ').map( (mot, index) => index < 30 ? mot+' ' : '')}
                                    </strong>
                                    <div id="colapse-biography" className="collapse">
                                        {this.state.acteur.biography.split(' ').map( (mot, index) => index < 30 ?  '': mot+' ')}
                                    </div>
                               
                        </div>
                        {
                            this.state.acteur.biography.split(' ').length >= 30 ? 
                            <button  className="btn btn-info btn-sm mt-2 ml-3" data-toggle="collapse" data-target="#colapse-biography">Voir plus</button> 
                            : ''
                        }

                        
                    </div>
                </div>
                </div>

                <h3 className="m-2">Films: </h3>
                {
                    this.state.films != null ? 
                        <div className="row">
                        <br></br>
                        {
                            this.state.films != null ? 
                            this.state.films.map( (film, index) => 
                            <Link className="nav-link link-people" to={'/film/' + film.id}  key={index}><span className="btn btn-film" >{film.title}</span></Link>
                            )
                            :''
                        }
                        </div>

                    :<div className="spinner-border text-dark"></div>
                    
                }
                
                

        </div>
        )
        else {
            return (
                <span>Loading ... acteur </span>
            )
        }
    }
}
