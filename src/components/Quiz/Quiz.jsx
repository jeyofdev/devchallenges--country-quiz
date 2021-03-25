import React, { useContext, useEffect } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { QuizContext } from '../../contexts/QuizContext';
import Header from '../Ui/Header/Header';
import Layout from '../../containers/Layout/Layout';
import H2 from '../Ui/Titles/H2';
import AnswersList from '../../containers/AswersList/AnswersList';
import Button from '../Ui/Button/Button';
import ImageSrc from '../../assets/images/header.svg';

const Quiz = () => {
    const history = useHistory();

    const {
        quiz,
        country,
        updateCountry,
        answers,
        userChoiceId,
        updateUserChoiceId,
        steps,
        updateSteps,
        showResult,
        updateShowResult,
    } = useContext(QuizContext);

    const handleClick = () => {
        const arr = Object.values(steps);
        const stepNumber = arr.indexOf(true) + 1;
        const currentStep = `step${stepNumber}`;
        const nextStep = `step${stepNumber + 1}`;

        if (stepNumber < 5) {
            updateCountry();
            updateUserChoiceId(null);
        } else if (stepNumber === 5) {
            updateShowResult();
        }

        if (stepNumber < 6) {
            updateSteps(currentStep, nextStep);
        }
    };

    useEffect(() => {
        if (showResult) {
            history.push('/result');
        }
    }, [showResult]);

    return (
        <>
            <Header title="Country quiz" imageSrc={ImageSrc} />
            <Layout>
                {quiz === null && <Redirect to="/" />}
                {country && quiz === 'flag' && (
                    <img
                        style={{
                            width: '84px',
                            height: '54px',
                            marginBottom: '28px',
                        }}
                        src={country.flag}
                        alt="flag question"
                    />
                )}
                <H2>
                    {quiz === 'capital'
                        ? `${country && country.capital} is the capital of`
                        : 'Which country does this flag belong to ?'}
                </H2>
                <AnswersList answers={answers} />

                {userChoiceId !== null && (
                    <Button
                        link="quiz"
                        type="info"
                        containerClassname="next"
                        handleClick={() => handleClick()}
                    >
                        Next
                    </Button>
                )}
            </Layout>
        </>
    );
};

export default Quiz;
