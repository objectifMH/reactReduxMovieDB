import React, { Component } from 'react';

import axios from 'axios';
import './people.scss';

import { Link } from 'react-router-dom';

export default class People extends Component {
constructor(props) {
    super(props)

    this.state = {
            acteur: null,
            acteurId: '',
            urlQuery: "https://api.themoviedb.org/3/person/",
            urlImage: "https://image.tmdb.org/t/p/original",
            apiKey: "369db2052a84d1a49d133d25a3983cbd",
            films: null,
            series: null,
            isCollapse: false

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

        //https://api.themoviedb.org/3/person/{person_id}/tv_credits?api_key=<<api_key>>&language=en-US

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


    getSeries() {

        console.log("cherche series tv");
        let url = "".concat(this.state.urlQuery, this.state.acteurId, "/tv_credits?api_key=", this.state.apiKey);
        axios.get(url)
            .then(res => {
                const series = res.data;
                this.setState(
                    prevState => ({ series }),
                    () => console.log(this.state.series.cast) 
                );
        })
    }

    getFilms() {
        //https://api.themoviedb.org/3/person/{person_id}/movie_credits?api_key=<<api_key>>&language=en-US

        let url = "".concat(this.state.urlQuery, this.state.acteurId, "/movie_credits?api_key=", this.state.apiKey);
        axios.get(url)
            .then(res => {
                const films = res.data.cast;

                this.setState(
                    prevState => ({ films: films }
                ),
                () => this.getSeries());
        })
    }

    myCollapse = () => {
        this.setState(
            prevState => ({ isCollapse: !this.state.isCollapse })
        );
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
                            <img src={this.state.urlImage+this.state.acteur.profile_path}  alt={this.state.acteur.name}/> :
                            <img src={window.location.origin + '/no_image.png' }  alt={this.state.acteur.name} />

                        }
                        
                    </div>
                    <div className="droite">
                        <div className="biographie">
                        <p>{this.state.acteur.also_known_as[0]}</p>
                        <p>{this.state.acteur.place_of_birth}</p>
                        <p>{this.state.acteur.birthday}</p>
                        {this.state.acteur.deathday !== null ? this.state.acteurdeathday : ''}

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
                            <button  className="btn btn-info btn-sm mt-2 ml-3" data-toggle="collapse" data-target="#colapse-biography" 
                        onClick={this.myCollapse}>{this.state.isCollapse === false ? 'Voir plus' : 'Voir moins'}</button> 
                            : ''
                        }

                        
                    </div>
                </div>
                </div>

                <h3 className="m-2">Films </h3>
                {
                    this.state.films != null ? 
                        <div className="row">
                        <br></br>
                        {
                            this.state.films != null ? 
                            this.state.films.map( (film, index) => 
                            <Link className="nav-link link-people" to={'/film/' + film.id+'/movie'}  key={index}><span className="btn btn-film" >{film.title}</span></Link>
                            )
                            :''
                        }
                        </div>

                    :<div className="spinner-border text-dark"></div>
                    
                }

                {( this.state.series != null && this.state.series.cast.length > 0) &&  <h3 className="m-2">Series </h3>}
                {
                    this.state.series != null  
                    ?  
                    <div className="row">
                        <br></br>
                        {
                            this.state.series != null ? 
                            this.state.series.cast.map( (serie, index) => 
                            <Link className="nav-link link-people" to={'/film/' + serie.id+'/tv'}  key={index}><span className="btn btn-serie" >{serie.name}</span></Link>
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
                <span>Loading ... acteurs </span>
            )
        }
    }
}
