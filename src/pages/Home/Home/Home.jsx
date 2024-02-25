import React from 'react';
import Banner from '../Banner/Banner';
import Produtcs from '../Products/Produtcs';
import Reviews from '../Reviews/Reviews';
import StaticBanner from '../StaticBanner/StaticBanner';
import Blog from '../Blog/Blog';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Produtcs></Produtcs>
            <StaticBanner></StaticBanner>
            <Blog></Blog>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;