import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const QuizContext = createContext();

const QuizContextProvider = ({ children }) => {
    const [quiz, setQuiz] = useState(null);

    const updateQuiz = (value) => {
        setQuiz(value);
    };

    return (
        <QuizContext.Provider value={{ quiz, updateQuiz }}>
            {children}
        </QuizContext.Provider>
    );
};

QuizContextProvider.propTypes = {
    children: PropTypes.oneOfType([PropTypes.any]).isRequired,
};

export default QuizContextProvider;
