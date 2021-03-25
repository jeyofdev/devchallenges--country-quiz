import React from 'react';
import Header from '../Ui/Header/Header';
import ImageSrc from '../../assets/images/header.svg';
import Layout from '../Ui/Layout/Layout';
import Button from '../Ui/Buttons/Button/Button';

const Home = () => {
    return (
        <>
            <Header title="Country quiz" imageSrc={ImageSrc} />
            <Layout>
                <Button
                    type="default"
                    containerClassname="home"
                    fullSize
                    quiz="capital"
                >
                    Capital
                </Button>
                <Button
                    type="default"
                    containerClassname="home"
                    fullSize
                    quiz="flag"
                >
                    Flag
                </Button>
            </Layout>
        </>
    );
};

export default Home;
