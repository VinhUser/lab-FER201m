import React, { useContext } from 'react'
import '../css/FilmPresentation.css'
import { useState } from 'react'
import { ThemeContext } from './ThemeContext';
export default function FilmPresentation({ films }) {
    const [film, setFilm] = useState([]);
    const {dark, theme, toggle} = useContext(ThemeContext)
    const background = theme.backgroundColor
    const color = theme.color
    return (
        <div className='container' style={{backgroundColor: background}}>
            {films.map(film => (
                <div className='card' key={film.id}>
                    <img src={film.image} alt=''></img>
                    <h2 className='title'>{film.title}</h2>
                    <p className='year'>{film.year}</p>
                    <h3 className='nation'>{film.nation}</h3>
                    <p><button type='button' onClick={() => { setFilm(film) }}><a href='#modal' className='detail'>Detail</a></button></p>
                </div>
            ))}
            <div className='modal' id='modal'>
                <div className='modal-content'>
                    <a className='close' href='#'>&times;</a>
                    <img src={film.image} alt></img>
                    <h2 >Name: <span className='title'>{film.title}</span></h2>
                    <h2 >Year: <span className='year'>{film.year}</span></h2>
                    <h3 >Nation: <span className='nation'>{film.nation}</span></h3>
                    <h2>Description:</h2>
                    <p className='info'>{film.info}</p>
                </div>
            </div>
        </div>
    )
}
