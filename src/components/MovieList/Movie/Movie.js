import React from 'react';
import PropTypes from 'prop-types';
import * as classes from './Movie.css';

const Movie = (props) => {
    return (
        <div className={ classes.Movie }>
            <img src={props.poster} alt="poster" className={ classes.ImgMovie } />
            <div className={ classes.Container }>
                <h4><b>{props.title}</b></h4>
                <p>{props.year}</p>
            </div>
        </div> 
    );
};

Movie.propTypes ={
    title: PropTypes.string,
    year: PropTypes.string,
    poster: PropTypes.string
}

export default Movie;