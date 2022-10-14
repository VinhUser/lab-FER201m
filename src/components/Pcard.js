import React, { useContext } from 'react'
import '../css/card.css';
import { useState } from 'react'
import { ThemeContext } from './ThemeContext';
import { Link } from 'react-router-dom';
export default function FilmPresentation({ films }) {
    const [film, setFilm] = useState([]);
    // eslint-disable-next-line no-unused-vars
    const {dark, theme, toggle} = useContext(ThemeContext)
    const background = theme.backgroundColor
    // eslint-disable-next-line no-unused-vars
    const color = theme.color
    return (
        <div className='container' style={{backgroundColor: background}}>
            {films.map(film => (
                <div className='card' key={film.id}>
                    <div class="card-image waves-effect waves-block waves-light ">
                        <img class="activator" src={film.image} alt=''></img>
                    </div>
                    <div class="card-content">
                        <h5 class="title">{film.title}</h5>
                        <p className='year'>{film.year}</p>
                        <h6 className='nation'>{film.nation}</h6>
                        <p><button type='button' onClick={() => { setFilm(film) }}><Link to={`/detail/${film.id}`} className='detail'>Detail</Link></button></p>
                    </div>
                    <div class="card-reveal">
                        <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
                        <p>{film.info}</p>
                    </div>
                </div>
            ))}
            {/* <div className='modal' id='modal'>
                <div className='modal-content'>
                    <a className='close' href='#'>&times;</a>
                    <img src={film.image} alt></img>
                    <h2 >Name: <span className='title'>{film.title}</span></h2>
                    <h2 >Year: <span className='year'>{film.year}</span></h2>
                    <h3 >Nation: <span className='nation'>{film.nation}</span></h3>
                    <h2>Description:</h2>
                    <p className='info'>{film.info}</p>
                </div>
            </div> */}
        </div>
    )
}
    