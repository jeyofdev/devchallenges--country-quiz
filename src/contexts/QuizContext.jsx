import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import randomize from '../helpers/helpers';

export const QuizContext = createContext();

const QuizContextProvider = ({ children }) => {
    const [quiz, setQuiz] = useState(null);
    const [countries, setCountries] = useState([]);
    const [country, setCountry] = useState(null);
    const [answers, setAnswers] = useState([]);

    const updateQuiz = (value) => {
        setQuiz(value);
    };

    const updateCountries = () => {
        axios
            .get('https://restcountries.eu/rest/v2/region/europe')
            .then((response) => response.data)
            .then((datas) =>
                setCountries(
                    datas.map((data, index) => ({
                        id: index,
                        name: data.name,
                        capital: data.capital,
                        flag: data.flag,
                    }))
                )
            );
    };

    const updateCountry = (reset = false) => {
        if (!reset) {
            const countriesLength = countries.length;
            const randomIndex = Math.floor(
                Math.random() * (countriesLength - 0)
            );

            setCountry(countries[randomIndex]);
        } else {
            setCountry(null);
        }
    };

    const updateAnswers = () => {
        const listIdsCountries = countries
            .filter((item) => item.id !== country.id)
            .map((items) => items.id);

        const otherResponses = randomize(listIdsCountries)
            .filter((id, index) => index < 3)
            .map((item) => countries[item]);

        const responses = [country, ...otherResponses];

        setAnswers(randomize(responses));
    };

    return (
        <QuizContext.Provider
            value={{
                quiz,
                updateQuiz,
                countries,
                updateCountries,
                country,
                updateCountry,
                answers,
                updateAnswers,
            }}
        >
            {children}
        </QuizContext.Provider>
    );
};

QuizContextProvider.propTypes = {
    children: PropTypes.oneOfType([PropTypes.any]).isRequired,
};

export default QuizContextProvider;
