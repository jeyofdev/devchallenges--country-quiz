import React, { useContext } from 'react';
import { QuizContext } from '../../contexts/QuizContext';
import Header from '../Ui/Header/Header';
import Layout from '../Ui/Layout/Layout';
import H2 from '../Ui/Titles/H2';
import ImageSrc from '../../assets/images/header.svg';

const Quiz = () => {
    const { quiz } = useContext(QuizContext);

    return (
        <>
            <Header title="Country quiz" imageSrc={ImageSrc} />
            <Layout>
                <H2>
                    {quiz === 'capital'
                        ? 'Paris is the capital of'
                        : 'Which country does this flag belong to ?'}
                </H2>
            </Layout>
        </>
    );
};

export default Quiz;
