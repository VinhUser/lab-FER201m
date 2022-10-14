import React from 'react'
import { useParams } from 'react-router-dom'
import { films } from './ListOfFilms';
import '../css/Detail.css'
import { useState } from 'react';
import ModalCase from './ModalCase';
import { Button } from '@mui/material';

export default function Detail() {
    const [isOpen, setIsOpen] = useState(false);
    const params = useParams();
    const film = films.find(x => {
        return x.id == params.id;
    });
    return (
        <div className='detail-container'>
            <img src={`../${film.image}`} alt='' className='detail-image'></img>
            <div className='detail-content'>
                <h2 className='detail-title'>{film.title}</h2>
                <h2 className='detail-year'><span>Year: </span>{film.year}</h2>
                <h2 className='detail-nation'><span>Nation: </span>{film.nation}</h2>
            </div>
            <div>
                <h2 className='description'><span>Description: </span></h2>
                <p className='detail-info'><span>{film.info}</span></p>
                <Button onClick={() => setIsOpen(true)} className="btn-floating halfway-fab waves-effect waves-light red">Xem</Button>
                {isOpen && <ModalCase setIsOpen={setIsOpen} films={film} />}
            </div>
        </div>
    )
}

