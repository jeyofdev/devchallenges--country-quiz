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
    const [goodAnswerId, setGoodAnswerId] = useState(null);
    const [userChoiceId, setUserChoiceId] = useState(null);
    const [steps, setSteps] = useState({
        step1: true,
        step2: false,
        step3: false,
        step4: false,
        step5: false,
        step6: false,
    });
    const [showResult, setShowResult] = useState(false);

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

    const updateCountry = () => {
        const countriesLength = countries.length;
        const randomIndex = Math.floor(Math.random() * (countriesLength - 0));

        setCountry(countries[randomIndex]);
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
        setGoodAnswerId(country.id);
    };

    const updateUserChoiceId = (answerId) => {
        setUserChoiceId(answerId);
    };

    const updateSteps = (currentStep, nextStep) => {
        setSteps({ ...steps, [currentStep]: false, [nextStep]: true });
    };

    const updateShowResult = () => {
        setShowResult(!showResult);
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
                goodAnswerId,
                userChoiceId,
                updateUserChoiceId,
                steps,
                updateSteps,
                updateShowResult,
                showResult,
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
