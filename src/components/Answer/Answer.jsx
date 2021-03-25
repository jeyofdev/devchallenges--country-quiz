import React from 'react';
import PropTypes from 'prop-types';
import { FaRegTimesCircle, FaRegCheckCircle } from 'react-icons/fa';
import classes from './Answer.module.css';

const Answer = ({ type, index, disabled, children, handleClick }) => {
    return (
        <button
            type="button"
            className={`${classes.answer} ${classes[type]}`}
            disabled={disabled}
            onClick={handleClick}
        >
            <div className={classes.answer_content}>
                <span>{index}</span>
                <span>{children}</span>
            </div>
            {type === 'success' && (
                <FaRegCheckCircle className={classes.icon} />
            )}
            {type === 'danger' && <FaRegTimesCircle className={classes.icon} />}
        </button>
    );
};

Answer.defaultProps = {
    type: 'default',
    children: '',
};

Answer.propTypes = {
    type: PropTypes.string,
    index: PropTypes.string.isRequired,
    disabled: PropTypes.bool.isRequired,
    children: PropTypes.string,
    handleClick: PropTypes.func.isRequired,
};

export default Answer;
