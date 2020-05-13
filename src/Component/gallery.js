import React, { Component } from 'react';
import './gallery.css';
import Card from './card.js';
import axios from '../../node_modules/axios';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare} from '@fortawesome/free-solid-svg-icons';
import { Link } from '../../node_modules/react-router-dom';

export default class Gallery extends Component {

    constructor(props) {
        super(props)

        this.state = {
            api_key: '369db2052a84d1a49d133d25a3983cbd',
            url: 'https://api.themoviedb.or550g/3/movie/?api_key=369db2052a84d1a49d133d25a3983cbd',
            urlSearch: 'https://api.themoviedb.org/3/search/movie?api_key=369db2052a84d1a49d133d25a3983cbd&query=',
            urlImage: "https://image.tmdb.org/t/p/original/",
            inputSearch: '',
            listFilm: [],
            filmCollapse: {},
            idCollapse: '',
            isShow: false,
            testRechercheIdFilm: 'https://api.themoviedb.org/3/movie/384737/videos?api_key=369db2052a84d1a49d133d25a3983cbd',
            filmJumbo: null
        }
    }


    changeInput = (event) => {
        this.setState({
            inputSearch: event.target.value
        })
    }

    clickSearch = (event) => {
        this.getFilms(this.state.inputSearch);

    }

    componentDidMount() {
        let random = Math.floor(Math.random(this.state.listFilm.length-1) * 10);

        axios.get('https://api.themoviedb.org/3/discover/movie?api_key=369db2052a84d1a49d133d25a3983cbd&language=en-US&sort_by=popularity.desc')
            .then(res => {
                const persons = res.data.results;
                this.setState({ listFilm: persons,
                    filmJumbo: persons[random]
                });
            })
        //console.log(this.state.films);
    }

    getFilms(inputSearch) {
        axios.get(this.state.urlSearch.concat(inputSearch))
            .then(res => {
                const films = res.data.results;
                console.log(films);
                this.setState({ listFilm: films });
            })
        console.log(this.state.listFilm)
    }

    showCollapse = (film) => {

        console.log(film);
        this.setState({
            filmCollapse: film,
            idCollapse: film.id
        }, this.recupererFilm(film.id))

    }

    recupererFilm(idSelect) {

        console.log("recupere film ", idSelect, typeof this.state.listFilm);
        let tab = this.state.listFilm.filter(film => film.id === idSelect);
        console.log(tab);

        this.setState({
            isShow: this.state.idCollapse === idSelect ? !this.state.isShow : true
        })

    }

    render() {

        
        console.log(this.state.listFilm[0]);
        return (
            <div className="comp-gallery m-3">


                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="ex: Jack Reacher" value={this.state.inputSearch}
                        onChange={this.changeInput} />
                    <div className="input-group-append">
                        <button className="btn btn-success" type="submit" onClick={this.clickSearch}>Rechercher</button>
                    </div>
                </div>
                {
                    this.state.filmJumbo != null ? 
                    <div className="jumbotron" 
                        style={{
                        backgroundImage: "url(" + this.state.urlImage + this.state.filmJumbo['backdrop_path'] + ")"}}
                    >
                    <div>
                            
                        <h3><span className="box-shadow">{this.state.filmJumbo.title}</span></h3>
                        <p>
                        <span className="box-shadow">{this.state.filmJumbo['release_date']}</span>
                        </p>
                    </div>
                    </div> :
                    ''
                }
                

                <h3>Les films les + populaires</h3>
                {
                    
                    <div>
                    <div className="modal fade" id="myModal">
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">

                                
                                <div className="modal-header">
                                    <h4 className="modal-title">{this.state.filmCollapse.title}</h4>
                                    <button type="button" className="close modal-close" data-dismiss="modal" title="fermer la modal">&times;</button>
                                </div>
                                <div className="modal-body" >
                                    {this.state.filmCollapse['backdrop_path']=== null ? <img className="card-img-top"  src={window.location.origin + '/no_image.png'}  alt={this.state.filmCollapse.title}/>: <img className="card-img-top" src={this.state.urlImage + this.state.filmCollapse['backdrop_path']} alt={this.state.filmCollapse.title} />}
                    
                                    <hr></hr>
                                    <p className="card-text">{this.state.filmCollapse.overview}</p>
                                    <p className="card-text">{this.state.filmCollapse.release_date}</p>
                                </div>

                            <Link className="nav-link close" to={'/film/'+this.state.filmCollapse.id} >
                                <FontAwesomeIcon icon={faPlusSquare} data-toggle="modal" data-target="#myModal" alt={'En savoir plus sur '+this.state.filmCollapse.title}/>
                            </Link>

                            </div>
                        </div>
                    </div>

                    </div>

                }
                <div className="container-fluid color-grey div-cont ">
                    {
                        this.state.listFilm.map((film, index) =>
                            <div key={index}>
                                <Card key={index} film={film} clickCollapse={this.showCollapse}></Card>


                            </div>
                        )
                    }


                </div>
            </div>
        )
    }
}
