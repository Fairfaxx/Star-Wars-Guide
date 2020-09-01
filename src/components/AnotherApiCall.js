import React, { useState, useEffect } from 'react';
import './AnotherApiCall.css';
import axios from 'axios';




const AnotherApiCall = () => {


    const [movieNum, setMovieNum] = useState(1)
    const [movie, setMovie] = useState('')

    useEffect(() => {
        const getData = async () => {
            const response = await axios.get(`https://swapi.dev/api/films/${movieNum}`);
            setMovie(response.data)
        }

        getData()


    }, [movieNum]);


    return (
        <div>
            <h1 className='mt-5 text-light'>Do you want to watch Star Wars and don't know where to start?</h1>
            <h2 className='text-light'>Follow the saga in order</h2>
            <h2 className='text-light'>Pick a Movie</h2>
            <select className='text-dark' value={movieNum} onChange={(e) => setMovieNum(e.target.value)}>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
                <option value='6'>6</option>
            </select>
            <h2 className='text-light'>Title: {movie.title}</h2>
            <p className='text-light'>Release: {movie.release_date}</p>
            <p className='w-50 m-auto text-light'>{movie.opening_crawl}</p>
            {/* <img src={} className="img-fluid" alt="Responsive image" /> */}
        </div>
    )
}

export default AnotherApiCall;
