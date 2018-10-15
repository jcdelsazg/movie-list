import React from 'react';
import PropTypes from 'prop-types';
import Movie from './Movie/Movie';
import * as classes from './MovieList.css';

const MovieList = (props) => {
    return (
        <div className={classes.moviesList}>
            {
                props.movies.map( movie => {
                    
                    return (
                        <div className={classes.moviesListItem} key={movie.imdbID} >    
                            <Movie 
                                    
                                title = {movie.Title}
                                year = {movie.Year}
                                poster = {movie.Poster}
                                />
                        </div>
                    )
                })
            }
        </div>
    );
};

MovieList.propTypes = {
    movies: PropTypes.array.isRequired
};

export default MovieList;