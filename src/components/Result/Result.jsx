import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Layout from '../../containers/Layout/Layout';
import Header from '../Ui/Header/Header';
import imageSrc from '../../assets/images/result.svg';
import H2 from '../Ui/Titles/H2';
import Button from '../Ui/Button/Button';
import classes from './Result.module.css';
import { QuizContext } from '../../contexts/QuizContext';

const Result = () => {
    const history = useHistory();
    const { correctAnswers, showResult, updateAllReset, reset } = useContext(
        QuizContext
    );

    const handleClick = () => {
        updateAllReset();
        reset();
    };

    useEffect(() => {
        if (!showResult) {
            history.push('/');
        }
    }, [showResult]);

    return (
        <>
            <Header title="Country quiz" />
            <Layout classname="result">
                <img src={imageSrc} alt="result" />
                <H2 classname={classes.result_title}>Results</H2>

                <p className={classes.content_text}>
                    You got <span>{correctAnswers}</span> correct answers
                </p>

                <Button
                    type="default"
                    containerClassname="try_again"
                    handleClick={handleClick}
                >
                    Try again
                </Button>
            </Layout>
        </>
    );
};

export default Result;
