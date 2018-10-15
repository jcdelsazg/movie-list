import React from 'react';
import PropTypes from 'prop-types';
import * as classes from './Input.css';

const Input = (props) => {
    
    return (
        <div className={classes.Input}>
            <label className={classes.Label}>{props.label}</label> 
            <input 
                {...props.configuration}  
                value={props.value === 0 ? '' : props.value} 
                onChange={props.changed} />
            <button type="button" onClick={props.clicked} className={classes.Button}> {props.buttonText} </button> 
        </div>
    );
};

Input.propTypes = {
    label: PropTypes.string.isRequired,
    configuration: PropTypes.object.isRequired,
    changed: PropTypes.func.isRequired,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
      ]).isRequired,
    clicked: PropTypes.func.isRequired,
    buttonText: PropTypes.string.isRequired
  };

export default Input;