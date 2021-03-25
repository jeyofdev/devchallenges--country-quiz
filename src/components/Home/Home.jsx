import React from 'react';
import Header from '../Ui/Header/Header';
import ImageSrc from '../../assets/images/header.svg';
import Layout from '../Ui/Layout/Layout';

const Home = () => {
    return (
        <>
            <Header title="Country quiz" imageSrc={ImageSrc} />
            <Layout>layout</Layout>
        </>
    );
};

export default Home;
