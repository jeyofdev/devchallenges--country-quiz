import React from 'react';
import PropTypes from 'prop-types';
import './Titles.css';

const H1 = ({ children, classname }) => {
    return <h1 className={classname}>{children}</h1>;
};

H1.defaultProps = {
    classname: '',
};

H1.propTypes = {
    children: PropTypes.string.isRequired,
    classname: PropTypes.string,
};

export default H1;
