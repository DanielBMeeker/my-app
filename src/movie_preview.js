import React from 'react';

const movieContainerStyles = {
    backgroundColor: '#F2EDEB',
    height: '300px',
    width: '300px',
    margin: '25px',
    padding: '5px',
    boxShadow: '4px 4px 12px #9A8B84',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
}

const MoviePreview = (props) => {
    const {movie, onClickFunction} = props;

    return (
        <button key={movie.title} style={movieContainerStyles} onClick={() => {onClickFunction(movie)}}>
            <p>{"Title: "}{movie.title}</p>
            <p>{"Rating: "}{movie.rating}</p>
            <p>{movie.releaseYear}</p>
            <img src={movie.posterUrl} style={{height: 120, width: 81}}/>
        </button>
    )
};

export default MoviePreview;