import React, { Component } from 'react';
import './gallery.scss';
import Card from './card.js';
import axios from '../../node_modules/axios';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare} from '@fortawesome/free-solid-svg-icons';
import { Link } from '../../node_modules/react-router-dom';

export default class Gallery extends Component {

    constructor(props) {
        super(props)

        this.state = {
            api_key: '?api_key=369db2052a84d1a49d133d25a3983cbd',
            url: 'https://api.themoviedb.or550g/3/movie/?api_key=369db2052a84d1a49d133d25a3983cbd',
            urlSearch: 'https://api.themoviedb.org/3/search/movie?api_key=369db2052a84d1a49d133d25a3983cbd&query=',
            urlImage: "https://image.tmdb.org/t/p/original/",
            urlBase: 'https://api.themoviedb.org/3/',
            inputSearch: '',
            listFilm: [],
            listSerie: [],
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
        this.getSerie(this.state.inputSearch);

    }

    componentDidMount() {
        let random = Math.floor(Math.random(this.state.listFilm.length-1) * 10);

         let urlDiscover = 'https://api.themoviedb.org/3/discover/movie?api_key=369db2052a84d1a49d133d25a3983cbd&language=en-US&sort_by=popularity.desc';

        axios.get(urlDiscover)
            .then(res => {
                const persons = res.data.results;
                this.setState(
                    prevState => ({ listFilm: persons,
                                    filmJumbo: persons[random] }),
                                    () => this.getSerie()
                );
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

    getSerie(inputSearch) {
        console.log(inputSearch);
        let testSerie = 'https://api.themoviedb.org/3/discover/tv?api_key=369db2052a84d1a49d133d25a3983cbd&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false';
        let suffixe = inputSearch !== undefined ? 'search/tv'+this.state.api_key+'&query='
                                        : 'discover/tv?api_key=369db2052a84d1a49d133d25a3983cbd&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false';
        console.log(inputSearch, this.state.urlBase.concat(suffixe, inputSearch));
        axios.get(this.state.urlBase.concat(suffixe)+inputSearch)
            .then(res => {
                const listSerie = res.data.results;
                console.log(res.data.results)
                this.setState(
                    prevState => ({ listSerie }),
                    () => console.log(listSerie)
                                    
                );
            })
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

        
        //console.log(this.state.listFilm[0]);
        return (
            <div className="comp-gallery m-3">


                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="ex: Jack Reacher" value={this.state.inputSearch}
                        onChange={this.changeInput} />
                    <div className="input-group-append">
                        <button className="btn" type="submit" onClick={this.clickSearch}>Rechercher</button>
                    </div>
                </div>
                { 
                /** 
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
                */
                }
                

                <h3>Les films les + populaires</h3>
                {
                    
                    <div>
                    <div className="modal fade" id="myModal">
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">

                                
                                <div className="modal-header">
                                    <h4 className="modal-title">{
                                    this.state.filmCollapse.title ? 
                                    this.state.filmCollapse.title : 
                                    this.state.filmCollapse.name
                                    }</h4>
                                    <button type="button" className="close modal-close" data-dismiss="modal" title="fermer la modal">&times;</button>
                                </div>
                                <div className="modal-body" >
                                    {this.state.filmCollapse['backdrop_path']=== null ? <img className="card-img-top"  src={window.location.origin + '/no_image.png'}  alt={this.state.filmCollapse.title}/>: <img className="card-img-top" src={this.state.urlImage + this.state.filmCollapse['backdrop_path']} alt={this.state.filmCollapse.title} />}
                    
                                    <hr></hr>
                                    <p className="card-text">{this.state.filmCollapse.overview}</p>
                                    <p className="card-text">{this.state.filmCollapse.release_date}</p>
                                </div>

                            <Link className="nav-link close" to={
                                
                                this.state.filmCollapse.title ? 
                                '/film/'+this.state.filmCollapse.id+'/movie' : 
                                '/film/'+this.state.filmCollapse.id+'/tv'
                                } >
                                <FontAwesomeIcon icon={faPlusSquare} data-toggle="modal" data-target="#myModal" alt={'En savoir plus sur '+this.state.filmCollapse.title}/>
                            </Link>

                            </div>
                        </div>
                    </div>

                    </div>

                }
                <div className="container-fluid color-grey div-cont ">
                    {
                        this.state.listFilm.map((film, index) => (
                                index <=  (this.state.inputSearch === '' ? 13 : this.state.listFilm.length)  ? 
                                <div key={index}>
                                    <Card key={index} film={film} tv={false} clickCollapse={this.showCollapse}></Card>


                                </div> : ""
                            )
                        )
                    }


                </div>


                { /** Les Meilleurs séries  */}

                <h3>Les Séries les + populaires</h3>
                <div className="container-fluid color-grey div-cont ">
                    {
                        this.state.listSerie.map((serie, index) => (
                            index <=  (this.state.inputSearch === '' ? 13 : this.state.listSerie.length)  ? 
                                <div key={index}>
                                    <Card key={index} film={serie} tv={true} clickCollapse={this.showCollapse}></Card>


                                </div> : ""
                            )
                        )
                    }


                </div>


            </div>
        )
    }
}
