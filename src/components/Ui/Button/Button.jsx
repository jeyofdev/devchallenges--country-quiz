import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classes from './Button.module.css';

const Button = ({
    link,
    type,
    containerClassname,
    fullSize,
    quiz,
    children,
    handleClick,
}) => {
    return (
        <Link
            to={`/${link}`}
            className={`${classes.btn_group} ${classes[containerClassname]}`}
        >
            <button
                type="button"
                name={quiz}
                className={`${classes.btn} ${classes[type]} ${
                    fullSize ? classes.fullsize : ''
                }`}
                onClick={handleClick}
            >
                {children}
            </button>
        </Link>
    );
};

Button.defaultProps = {
    link: '',
    type: 'default',
    quiz: '',
    fullSize: false,
    handleClick: null,
};

Button.propTypes = {
    link: PropTypes.string,
    type: PropTypes.string,
    containerClassname: PropTypes.string.isRequired,
    fullSize: PropTypes.bool,
    quiz: PropTypes.string,
    children: PropTypes.string.isRequired,
    handleClick: PropTypes.func,
};

export default Button;
