import React from 'react'
import { useParams } from 'react-router-dom'
import { films } from './ListOfFilms';
import '../css/Detail.css'
export default function Detail() {
    const params = useParams();
    const Film = films.find(x => {
        return x.id.toString() === params.id;
    });
    console.log(Film)
    return (
        <div className='detail-container'>
            <img src={`../${Film.image}`} alt='' className='detail-image'></img>
            <div className='detail-content'>
                <h2 className='detail-title'>{Film.title}</h2>
                <h2 className='detail-year'><span style={{ color: 'black' }}>Year: </span>{Film.year}</h2>
                <h2 className='detail-nation'><span style={{ color: 'black' }}>Nation: </span>{Film.nation}</h2>
                {/* <h2 className='detail-type'><span style={{ color: 'black' }}>Type: </span>{Film.type}</h2> */}
                {/* <h2 className='detail-duration'><span style={{ color: 'black' }}>Duration: </span>{Film.duration}</h2>
                <h2 className='detail-director'><span style={{ color: 'black' }}>Director: </span>{Film.director}</h2> */}
            </div>
            <div>
                <h2 className='description'>Description:</h2>
                <p className='detail-info'>{Film.info}</p>
            </div>
        </div>
    )
}
