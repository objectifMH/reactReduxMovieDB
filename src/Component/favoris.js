import React, { Component } from 'react';
import FilmFav from './filmFav';

export default class Favoris extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    

    render() {
        return (
            <div className="mt-5">
                <div className="m-2">
                    <FilmFav></FilmFav>
                </div>
                <div className="m-2">
                    <FilmFav></FilmFav>
                </div>
                <div className="m-2">
                    <FilmFav></FilmFav>
                </div>
                <div className="m-2">
                    <FilmFav></FilmFav>
                </div>
                <div className="m-2">
                    <FilmFav></FilmFav>
                </div>
                <div className="m-2">
                    <FilmFav></FilmFav>
                </div>
                <div className="m-2">
                    <FilmFav></FilmFav>
                </div>
                <div className="m-2">
                    <FilmFav></FilmFav>
                </div>

                <div className="m-2">
                    <FilmFav></FilmFav>
                </div>
                
                
            </div>
        )
    }
}
