import React from 'react'
import '../css/FilmPresentation.css'
export default function FilmPresentation({ films }) {
    return (
        <div className='container'>
            {films.map(film => (
                <div className='card' key={film.id}>
                    <img src={film.image} alt=''></img>
                    <h2 className='title'>{film.title}</h2>
                    <p className='year'>{film.year}</p>
                    <h3 className='nation'>{film.nation}</h3>
                </div>
            ))}
        </div>
    )
}
