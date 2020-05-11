import React, { Component } from 'react';
import './card.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm, faPlusCircle} from '@fortawesome/free-solid-svg-icons';



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

    //data-toggle="collapse" data-target={'#demo'+this.props.film.id}  

    render() {
        return (
            <div className="m-2">

                <div className="card div-card" >

                    <h6 className="card-title p-2">{this.props.film.title}</h6>
                    {this.props.film['poster_path']=== null ? <FontAwesomeIcon icon={faFilm} /> : <img className="card-img-top" src={this.state.urlImage + this.props.film['poster_path']} alt="Card" />}
                    <FontAwesomeIcon icon={faPlusCircle}    
                                                            data-toggle="modal" data-target="#myModal" 
                                                            onClick={this.clickCollapseCard} />
                    
                    
                    
                </div>
                
            </div>
        )
    }
}
