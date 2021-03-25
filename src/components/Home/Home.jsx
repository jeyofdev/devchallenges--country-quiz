import React, { useContext } from 'react';
import Header from '../Ui/Header/Header';
import ImageSrc from '../../assets/images/header.svg';
import Layout from '../Ui/Layout/Layout';
import Button from '../Ui/Buttons/Button/Button';
import { QuizContext } from '../../contexts/QuizContext';

const Home = () => {
    const { updateQuiz } = useContext(QuizContext);

    return (
        <>
            <Header title="Country quiz" imageSrc={ImageSrc} />
            <Layout>
                <Button
                    link="quiz"
                    type="default"
                    containerClassname="home"
                    fullSize
                    quiz="capital"
                    handleClick={updateQuiz}
                >
                    Capital
                </Button>
                <Button
                    link="quiz"
                    type="default"
                    containerClassname="home"
                    fullSize
                    quiz="flag"
                    handleClick={updateQuiz}
                >
                    Flag
                </Button>
            </Layout>
        </>
    );
};

export default Home;
