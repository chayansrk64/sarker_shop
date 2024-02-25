import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './Products.css'
import useProducts from '../../../hooks/useProducts';
import ProductTab from './ProductTab/ProductTab';

const Produtcs = () => {

    const [products] = useProducts();
    // console.log(products);


    const mobiles = products.filter(product => product.category === "mobile");
    // console.log("Category Mobile", mobiles)
    const airpods = products.filter(product => product.category === "airpods");
    // console.log("Category airpods", airpods)
    const watches = products.filter(product => product.category === "watch");
    // console.log("Category Watch", watches)
 


    // tabs
    const [tabIndex, setTabIndex] = useState(0);

    return (

        <div className='mx-4 max-w-[1400px] lg:px-[100px] lg:mx-auto'>
        {/* tabs */}

        <h2 className='text-5xl text-center my-10'>Explore</h2>

        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>

        <TabList>
            <Tab>Mobiles</Tab>
            <Tab>Headphones</Tab>
            <Tab>Watches</Tab>
        </TabList>

        {/* categories */}

            <TabPanel>
                    <ProductTab products={mobiles}></ProductTab>
            </TabPanel>
            <TabPanel>
                    <ProductTab products={airpods}></ProductTab>
            </TabPanel>
            <TabPanel>
                    <ProductTab products={watches}></ProductTab>
            </TabPanel>
            
        </Tabs>


      

        </div>
    );
};



export default Produtcs;