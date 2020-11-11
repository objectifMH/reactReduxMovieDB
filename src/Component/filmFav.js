import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//import './filmFav.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes} from '@fortawesome/free-solid-svg-icons';

export default class FilmFav extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            film: {
                cover:'https://image.tmdb.org/t/p/original',
                isPresent: true
            }
             
        }
    }
    
    render() {

        const type = this.props.film.first_air_date !== undefined  ? "tv" : "movie";
        //console.log(this.props.film)

        return (
            
            <div className=" container my-container-film">
                <div className="gauche">
                <Link className="nav-link link-people" to={'/film/' + this.props.film.id+'/'+type}  >
                    
                    {
                        this.props.film['poster_path'] !== null ? 
                        <img  src={this.state.film.cover + this.props.film['poster_path']} alt={"Cover "+this.props.film.title}></img>
                                                                :
                        <img  src={process.env.PUBLIC_URL +'/no_image.png'}  alt={this.props.film.title}/>                                         
                    }
                    
                </Link>
                </div>
                <div className="centre">
                <Link className="nav-link link-people" to={'/film/' + this.props.film.id+'/'+type}  >
                    <h4>
                        {
                            type === "tv" ? this.props.film.original_name : this.props.film.title
                        }
                    </h4>
                </Link>
                    <p>
                        {                  
                            type === "tv" ?  (this.props.film.first_air_date) : this.props.film.release_date
                        }
                    </p>
                </div>
                <div className="droite">
                    <FontAwesomeIcon icon={faTimes}  onClick={this.props.clickHandler}/>
                </div>
                
            </div>
        )
    }
}
