import React, { Component } from 'react';
import './card.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm, faPlusCircle, faArrowsAlt, faCircle} from '@fortawesome/free-solid-svg-icons';



export default class Card extends Component {

    constructor(props) {
        super(props)

        this.state = {

            urlCover: "http://api.themoviedb.org/3/search/movie?api_key=369db2052a84d1a49d133d25a3983cbd&query=",
            urlImage: "https://image.tmdb.org/t/p/original/"

        }

        //console.log(this.props, this.props.film['poster_path']);
    }


    clickCollapseCard = () => {
        console.log(this.props);
        this.props.clickCollapse(this.props.film);
        console.log(this.props.film);
    }

    render() {
        return (
            <div className="m-2">

                <div className="card div-card" >

                    <h6 className="card-title p-2">{this.props.film.title}</h6>
                    {this.props.film['poster_path']=== null ? <img className="card-img-top"  src={window.location.origin + '/no_image.png'}  alt={this.props.film.title}/>: <img className="card-img-top" src={this.state.urlImage + this.props.film['poster_path']} alt={this.props.film.title} />}
                    <FontAwesomeIcon icon={faArrowsAlt}     title="Plus de détails" 
                                                            data-toggle="modal" data-target="#myModal" 
                                                            onClick={this.clickCollapseCard} />
                    <FontAwesomeIcon icon={faPlusCircle}  />
                    
                    
                </div>
                
            </div>
        )
    }
}
