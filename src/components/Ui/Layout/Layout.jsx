import React from 'react';
import PropTypes from 'prop-types';
import classes from './Layout.module.css';

const Layout = ({ children }) => {
    return <div className={classes.content_block}>{children}</div>;
};

Layout.propTypes = {
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.array])
        .isRequired,
};

export default Layout;
