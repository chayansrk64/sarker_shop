import React from 'react';
import Banner from '../Banner/Banner';
import Produtcs from '../Products/Produtcs';
import Reviews from '../Reviews/Reviews';
import StaticBanner from '../StaticBanner/StaticBanner';
import Blog from '../Blog/Blog';
import SatitcBannerTwo from '../StaticBannerTwo/SatitcBannerTwo';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Produtcs></Produtcs>
            <StaticBanner></StaticBanner>
            <Blog></Blog>
            <SatitcBannerTwo></SatitcBannerTwo>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;