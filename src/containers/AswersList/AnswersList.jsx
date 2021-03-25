import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Answer from '../../components/Answer/Answer';
import { QuizContext } from '../../contexts/QuizContext';

const AnswersList = ({ answers }) => {
    const {
        goodAnswerId,
        userChoiceId,
        updateUserChoiceId,
        userHasChoice,
        updateUserHasChoice,
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

        if (userHasChoice) {
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

    const handleClick = (answerId) => {
        updateUserHasChoice(true);
        updateUserChoiceId(answerId);
    };

    return (
        <>
            {answers.map((answer, index) => (
                <Answer
                    key={answer.id}
                    type={setAnswerType(answer.id)}
                    index={letter(index)}
                    disabled={userHasChoice}
                    handleClick={() => handleClick(answer.id)}
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
