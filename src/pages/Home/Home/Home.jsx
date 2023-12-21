import React from 'react';
import Banner from '../Banner/Banner';
import Produtcs from '../Products/Produtcs';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Produtcs></Produtcs>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;