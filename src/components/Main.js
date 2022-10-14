import React, { Component } from 'react'
// import FilmPresentation from './FilmPresentation';
import { films } from './ListOfFilms';
import Pcard from './Pcard';
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
                <Pcard films={this.state.film}></Pcard>
            </div>
        )
    }
}
