import React from 'react';
import PropTypes from 'prop-types';
import './Titles.css';

const H2 = ({ classname, children }) => {
    return <h2 className={`title_h2 ${classname}`}>{children}</h2>;
};

H2.defaultProps = {
    classname: '',
};

H2.propTypes = {
    classname: PropTypes.string,
    children: PropTypes.string.isRequired,
};

export default H2;
