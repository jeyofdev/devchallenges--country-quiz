import React, { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { QuizContext } from '../../contexts/QuizContext';
import classes from './Layout.module.css';

const Layout = ({ classname, children }) => {
    const location = useLocation();

    const {
        countries,
        updateCountries,
        country,
        updateCountry,
        updateAnswers,
    } = useContext(QuizContext);

    useEffect(() => {
        if (location.pathname === '/quiz') {
            if (countries.length === 0) {
                updateCountries();
            } else {
                updateCountry();
            }
        }
    }, [countries]);

    useEffect(() => {
        if (location.pathname === '/quiz') {
            if (country !== null) {
                updateAnswers();
            }
        }
    }, [country]);

    return (
        <div className={`${classes.content_block} ${classes[classname]}`}>
            {children}
        </div>
    );
};

Layout.defaultProps = {
    classname: '',
};

Layout.propTypes = {
    classname: PropTypes.string,
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.array])
        .isRequired,
};

export default Layout;
