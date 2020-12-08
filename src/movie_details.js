import React from 'react';

const MovieDetails = (props) => {
    const {currentMovie} = props;
    return (
        <div>
            <p>{currentMovie.title}</p>
            <p>{"Rating: "}{currentMovie.rating}</p>
            <p>{currentMovie.director}</p>
            <p>{currentMovie.releaseYear}</p>
            <p>{currentMovie.description}</p>
            <p>{currentMovie.categories.join(', ')}</p>
            <img src={currentMovie.posterUrl} style={{height: 120, width: 81}} alt={"poster for " + currentMovie.title}/>
        </div>
    )
}

export default MovieDetails;