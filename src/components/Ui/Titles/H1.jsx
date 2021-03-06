import React from 'react';
import PropTypes from 'prop-types';
import './Titles.css';

const H1 = ({ classname, children }) => {
    return <h1 className={`title_h1 ${classname}`}>{children}</h1>;
};

H1.defaultProps = {
    classname: '',
};

H1.propTypes = {
    classname: PropTypes.string,
    children: PropTypes.string.isRequired,
};

export default H1;
