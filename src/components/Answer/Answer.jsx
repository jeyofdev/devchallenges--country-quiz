import React from 'react';
import PropTypes from 'prop-types';
import classes from './Answer.module.css';

const Answer = ({ type, index, children }) => {
    return (
        <button type="button" className={`${classes.answer} ${classes[type]}`}>
            <div className={classes.answer_content}>
                <span>{index}</span>
                <span>{children}</span>
            </div>
        </button>
    );
};

Answer.defaultProps = {
    type: 'default',
    children: '',
};

Answer.propTypes = {
    index: PropTypes.string.isRequired,
    type: PropTypes.string,
    children: PropTypes.string,
};

export default Answer;
