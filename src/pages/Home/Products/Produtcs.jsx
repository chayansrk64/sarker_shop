import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './Products.css'
import useProducts from '../../../hooks/useProducts';
import Button from '../../../components/Button/Button';

const Produtcs = () => {

    const [products] = useProducts();
    // console.log(products);


    const mobiles = products.filter(product => product.category === "mobile");
    console.log("Category Mobile", mobiles)
    const airpods = products.filter(product => product.category === "airpods");
    // console.log("Category airpods", airpods)
    const watches = products.filter(product => product.category === "watch");
    // console.log("Category Watch", watches)
 


    // tabs
    const [tabIndex, setTabIndex] = useState(0);

    return (

        <>
        {/* tabs */}

        <h2 className='text-6xl text-center font-bold my-10'>Explore</h2>

        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>

        <TabList>
            <Tab>Mobiles</Tab>
            <Tab>Headphones</Tab>
            <Tab>Watches</Tab>
        </TabList>

        {/* categories */}

        {/* mobile */}
            <TabPanel>
            <div className='my-20 grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    mobiles.map(mobile => 
                       
                        <div className=" bg-[#edecec]">
                           <figure>
                                <a href="/product-details">
                                    <img src="https://www.excelestore.com.bd/public/uploads/all/OGOfngE63ZsS94iVCw6BeWA3ERNAUO8fdIQ6RwK9.png" alt="Shoes" />
                                </a>
                            </figure>

                            
                            <div className="card-body">
                                <h2 className="card-title">
                                {mobile.productName}
                                <div className="badge badge-secondary">NEW</div>
                                </h2>
                                <p>{mobile.brand}</p>
                                <div className="card-actions justify-end">
                                <div className="">
                                    <span>Price:</span> <del>{mobile.price}</del>
                                </div> 
                                <div className="">
                                    <p>{mobile.price}</p>
                                </div>
                                </div>
                                <div className='flex justify-between'>
                                    <Button buttonText="Add to Cart"></Button>
                                     <button>See More</button>
                                </div>
                            </div>
                            </div>
                    )
                }
                     
            </div>
            </TabPanel>

            {/* headphones */}
            <TabPanel>
            <div className='my-20 grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    airpods.map(airpod => 
                       
                        <div className=" bg-[#edecec]">
                           <figure>
                                <a href="/product-details">
                                    <img src="https://www.custommacbd.com/cdn/shop/products/MV7N2_AV1.jpeg?v=1613634469" alt="Shoes" />
                                </a>
                            </figure>

                            
                            <div className="card-body">
                                <h2 className="card-title">
                                {airpod.productName}
                                <div className="badge badge-secondary">NEW</div>
                                </h2>
                                <p>{airpod.brand}</p>
                                <div className="card-actions justify-end">
                                <div className="">
                                    <span>Price:</span> <del>{airpod.price}</del>
                                </div> 
                                <div className="">
                                    <p>{airpod.price}</p>
                                </div>
                                </div>
                                <div className='flex justify-between'>
                                    <Button buttonText="Add to Cart"></Button>
                                     <button>See More</button>
                                </div>
                            </div>
                            </div>
                    )
                }
                     
            </div>
            </TabPanel>

            {/* watch */}
            <TabPanel>
            <div className='my-20 grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    watches.map(watch => 
                       
                        <div className=" bg-[#edecec]">
                           <figure>
                                <a href="/product-details">
                                    <img src="https://m.media-amazon.com/images/I/61keHlij6dL.jpg" alt="Shoes" />
                                </a>
                            </figure>

                            
                            <div className="card-body">
                                <h2 className="card-title">
                                {watch.productName}
                                <div className="badge badge-secondary">NEW</div>
                                </h2>
                                <p>{watch.brand}</p>
                                <div className="card-actions justify-end">
                                <div className="">
                                    <span>Price:</span> <del>{watch.price}</del>
                                </div> 
                                <div className="">
                                    <p>{watch.price}</p>
                                </div>
                                </div>
                                <div className='flex justify-between'>
                                    <Button buttonText="Add to Cart"></Button>
                                     <button>See More</button>
                                </div>
                            </div>
                            </div>
                    )
                }
                     
            </div>
            </TabPanel>
            
        </Tabs>


      


        </>
    );
};



export default Produtcs;