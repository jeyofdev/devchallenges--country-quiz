import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import Answer from '../../components/Answer/Answer';
import { QuizContext } from '../../contexts/QuizContext';

const AnswersList = ({ answers }) => {
    const {
        goodAnswerId,
        updateCorrectAnswers,
        userChoiceId,
        updateUserChoiceId,
    } = useContext(QuizContext);

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

    const setAnswerType = (answerId) => {
        let type = '';

        if (userChoiceId !== null) {
            if (goodAnswerId === answerId) {
                type = 'success';
            } else if (goodAnswerId !== answerId && answerId === userChoiceId) {
                type = 'danger';
            } else {
                type = 'default';
            }
        } else {
            type = 'default';
        }

        return type;
    };

    useEffect(() => {
        if (userChoiceId !== null && userChoiceId === goodAnswerId) {
            updateCorrectAnswers();
        }
    }, [userChoiceId]);

    return (
        <>
            {answers.map((answer, index) => (
                <Answer
                    key={answer.id}
                    type={setAnswerType(answer.id)}
                    index={letter(index)}
                    disabled={userChoiceId !== null}
                    handleClick={() => updateUserChoiceId(answer.id)}
                >
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
