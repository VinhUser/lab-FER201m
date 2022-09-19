import React, { Component } from 'react'
import FilmPresentation from './FilmPresentation';
import { films } from './ListOfFilms';
export default class Main extends Component {
    constructor() {
        super();
        this.state = {
            film: films
        }
    }
    render() {
        return (
            <div>
                <FilmPresentation films={this.state.film}></FilmPresentation>
            </div>
        )
    }
}
