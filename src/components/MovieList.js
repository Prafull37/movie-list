import React from 'react'
import MovieCard from './MovieCard';
import MoviesJson from "../mockdata/movies.json";

function MovieList({movies}) {
  
    return (
        <div className="movie-container">
        {movies.map((movie)=><MovieCard movie={movie} key={movie._id}/>)}
        </div>
    )
}

export default MovieList;
