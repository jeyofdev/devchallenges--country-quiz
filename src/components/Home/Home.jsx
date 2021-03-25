import React, { useContext } from 'react';
import Header from '../Ui/Header/Header';
import { QuizContext } from '../../contexts/QuizContext';
import ImageSrc from '../../assets/images/header.svg';
import Layout from '../../containers/Layout/Layout';
import Button from '../Ui/Button/Button';

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
                    handleClick={() => updateQuiz('capital')}
                >
                    Capital
                </Button>
                <Button
                    link="quiz"
                    type="default"
                    containerClassname="home"
                    fullSize
                    quiz="flag"
                    handleClick={() => updateQuiz('flag')}
                >
                    Flag
                </Button>
            </Layout>
        </>
    );
};

export default Home;
