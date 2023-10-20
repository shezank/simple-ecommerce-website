import React from 'react';
import Header from './Header';
import Brand from '../Brand/Brand';
import Steps from './Steps';
import Contens from './Contens';

const Home = () => {
    return (
        <div>
            <Header/>
            <Brand></Brand>
            <Steps></Steps>
            <Contens></Contens>
        </div>
    );
};

export default Home;