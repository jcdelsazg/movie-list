import React from 'react';
import PropTypes from 'prop-types';
import * as classes from './Image.css';

const Image = (props) => {
    
    return (
        <div className={classes.Image}>
            <img src={props.url} alt={props.alt} />
        </div>
    );
};

Image.propTypes = {
    url: PropTypes.string,
    alt: PropTypes.string
  }

export default Image;