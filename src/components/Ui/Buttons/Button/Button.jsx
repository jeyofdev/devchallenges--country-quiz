import React from 'react';
import PropTypes from 'prop-types';
import classes from './Button.module.css';

const Button = ({
    type,
    containerClassname,
    fullSize,
    quiz,
    children,
    handleClick,
}) => {
    return (
        <div className={`${classes.btn_group} ${classes[containerClassname]}`}>
            <button
                type="button"
                name={quiz}
                className={`${classes.btn} ${classes[type]} ${
                    fullSize ? classes.fullsize : ''
                }`}
                onClick={() => handleClick(quiz)}
            >
                {children}
            </button>
        </div>
    );
};

Button.defaultProps = {
    type: 'default',
    quiz: '',
    fullSize: 'false',
};

Button.propTypes = {
    type: PropTypes.string,
    containerClassname: PropTypes.string.isRequired,
    fullSize: PropTypes.bool,
    quiz: PropTypes.string,
    children: PropTypes.string.isRequired,
    handleClick: PropTypes.func.isRequired,
};

export default Button;
