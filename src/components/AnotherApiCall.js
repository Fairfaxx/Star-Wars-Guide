import React, { useState, useEffect } from 'react';
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
            <h1>Pick a Movie</h1>
            <select value={movieNum} onChange={(e) => setMovieNum(e.target.value)}>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
                <option value='6'>6</option>
            </select>
            <h2>Title: {movie.title}</h2>
            <p>Release: {movie.release_date}</p>
            <p className='w-50 m-auto'>{movie.opening_crawl}</p>
            {/* <img src={} className="img-fluid" alt="Responsive image" /> */}
        </div>
    )
}

export default AnotherApiCall;
