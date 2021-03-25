import React from 'react';
import PropTypes from 'prop-types';
import H1 from '../Titles/H1';
import classes from './Header.module.css';

const Header = ({ imageSrc, title }) => {
    return (
        <div className={classes.content_header}>
            <H1 classname="title_h1">{title}</H1>
            {imageSrc && <img src={imageSrc} alt="header deco" />}
        </div>
    );
};

Header.defaultProps = {
    imageSrc: '',
};

Header.propTypes = {
    title: PropTypes.string.isRequired,
    imageSrc: PropTypes.string,
};

export default Header;
