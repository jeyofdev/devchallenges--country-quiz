import React, { useContext } from 'react';
import { QuizContext } from '../../contexts/QuizContext';
import Header from '../Ui/Header/Header';
import Layout from '../../containers/Layout/Layout';
import H2 from '../Ui/Titles/H2';
import AnswersList from '../../containers/AswersList/AnswersList';
import Button from '../Ui/Button/Button';
import ImageSrc from '../../assets/images/header.svg';

const Quiz = () => {
    const {
        quiz,
        country,
        updateCountry,
        answers,
        userChoiceId,
        updateUserChoiceId,
        steps,
        updateSteps,
    } = useContext(QuizContext);

    const handleClick = () => {
        const arr = Object.values(steps);
        const stepNumber = arr.indexOf(true) + 1;

        if (stepNumber < 5) {
            const currentStep = `step${stepNumber}`;
            const nextStep = `step${stepNumber + 1}`;

            updateSteps(currentStep, nextStep);
            updateCountry();
            updateUserChoiceId(null);
        }
    };

    return (
        <>
            <Header title="Country quiz" imageSrc={ImageSrc} />
            <Layout>
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
