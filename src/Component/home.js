import React, { Component } from 'react';

//import './home.scss';
import axios from 'axios';
import Gallery from './gallery';
import { Link } from 'react-router-dom';

export default class Home extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            baseUrl: 'https://api.themoviedb.org/3/discover/movie?api_key=369db2052a84d1a49d133d25a3983cbd&language=en-US&sort_by=popularity.desc',
            inputSearch: '',
            urlImage: "https://image.tmdb.org/t/p/original/",
            films: []
        }
    }
    
    componentDidMount() {

        axios.get(this.state.baseUrl)
            .then(res => {
                const films = res.data.results;
                this.setState(
                    prevState => ({ films }),
                    () => console.log(this.state.films[0])
                );
            })
    }


    render() {
        return (
            <div>
                
            <div>
                
                <div id="demo" className="carousel slide" data-ride="carousel">
                <ul className="carousel-indicators">
                    <li data-target="#demo" data-slide-to="0" className="active"></li>
                    <li data-target="#demo" data-slide-to="1"></li>
                    <li data-target="#demo" data-slide-to="2"></li>
                </ul>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        {
                            this.state.films.length !== 0 ? 
                            <img src={this.state.urlImage + this.state.films[0].backdrop_path} alt={this.state.films}  />
                            :
                            ''
                        }
                    <div className="carousel-caption">
                        <h3>{this.state.films.length !==0
                                                        ?
                                                            <Link className="nav-link" to={'/film/'+this.state.films[0].id} >{this.state.films[0].title}</Link>
                                                        : 
                                                            ""}
                        </h3>
                        <p>{this.state.films.length !==0 ?
                                                            this.state.films[0].release_date 
                                                        : 
                                                            ""}
                        </p>
                    </div>   
                    </div>
                    <div className="carousel-item">
                    {
                            this.state.films.length !== 0 ? 
                            <img src={this.state.urlImage + this.state.films[1].backdrop_path} alt={this.state.films}  />
                            :
                            ''

                    }
                    <div className="carousel-caption">
                        <h3>{this.state.films.length !==0
                                                        ?
                                                            <Link className="nav-link" to={'/film/'+this.state.films[1].id} >{this.state.films[1].title}</Link>
                                                        : 
                                                            ""}
                        </h3>
                        <p>{this.state.films.length !==0 ?
                                                            this.state.films[0].release_date 
                                                        : 
                                                            ""}
                        </p>
                    </div>   
                    </div>
                    <div className="carousel-item">
                    {
                            this.state.films.length !== 0 ? 
                            <img src={this.state.urlImage + this.state.films[2].backdrop_path} alt={this.state.films}  />
                            :
                            ''

                    }
                    <div className="carousel-caption">
                        <h3>{this.state.films.length !==0
                                                        ?
                                                            <Link className="nav-link" to={'/film/'+this.state.films[2].id} >{this.state.films[2].title}</Link>
                                                        : 
                                                            ""}
                        </h3>
                        <p>{this.state.films.length !==0 ?
                                                            this.state.films[0].release_date 
                                                        : 
                                                            ""}
                        </p>
                    </div>   
                    </div>
                </div>
                <a className="carousel-control-prev" href="#demo" data-slide="prev">
                    <span className="carousel-control-prev-icon"></span>
                </a>
                <a className="carousel-control-next" href="#demo" data-slide="next">
                    <span className="carousel-control-next-icon"></span>
                </a>
                </div>
            </div>
            
            <Gallery></Gallery>
            
            </div>

        )
    }
}
