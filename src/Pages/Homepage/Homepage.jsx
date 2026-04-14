import React from 'react';
import StaticSection from './StaticSection';
import CardSection from './CardSection';
import AllCards from '../../Component/AllCards/AllCards';

const Homepage = () => {
    return (
        <>
        <StaticSection />
        <CardSection />
        <AllCards />
        </>
    );
};

export default Homepage;