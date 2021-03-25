import React from 'react';
import PropTypes from 'prop-types';
import Answer from '../../components/Answer/Answer';

const AnswersList = ({ answers }) => {
    const letter = (index) => {
        let output = '';

        switch (index) {
            case 0:
                output = 'A';
                break;
            case 1:
                output = 'B';
                break;
            case 2:
                output = 'C';
                break;
            case 3:
                output = 'D';
                break;
            default:
                break;
        }

        return output;
    };

    return (
        <>
            {answers.map((answer, index) => (
                <Answer key={answer.id} index={letter(index)}>
                    {answer.name}
                </Answer>
            ))}
        </>
    );
};

AnswersList.propTypes = {
    answers: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default AnswersList;
