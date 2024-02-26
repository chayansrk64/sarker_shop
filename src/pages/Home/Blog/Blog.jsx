import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
    return (
        <div className='my-[100px] max-w-[70%] mx-auto'>
            <div className='text-center text-4xl font-semibold mb-[100px]'>READ THE BLOG</div>

            <div className='grid grid-cols-1 lg:grid-cols-5 gap-20'>
                
                <div className='col-span-3 '>
                    <Link to="/blog">
                    <div className='overflow-hidden'>
                        <img className='w-full cover transition-transform duration-700 transform scale-100 hover:scale-105' src="https://focal-theme-carbon.myshopify.com/cdn/shop/articles/Image_blog_01_1500x1125_ed7bdb21-4c7f-42f2-b34d-48ba9790e626_600x.jpg?v=1630491815" alt="" />
                    </div>
                    </Link>
                    <Link to="/blog">
                    <div>
                        <p className='my-5'>COLLABORATION</p>
                        <h3 className='text-3xl md:text-5xl uppercase font-semibold'>NATIVE UNION X MAISON KITSUNÉ</h3>
                    </div>
                    </Link>
                </div>
               

                <div className='col-span-3 md:col-span-2'>

                    <Link to="/blog">
                    <div className='grid md:grid-cols-2 gap-5 items-center'>
                        <div className='overflow-hidden'><img className='transition-transform duration-700 transform scale-100 hover:scale-105' src="https://focal-theme-carbon.myshopify.com/cdn/shop/articles/Image_blog_08_1500x1125_88120de8-e5a2-4366-87b5-25a663fb7ae9_600x.jpg?v=1630490966" alt="" /></div>
                        <div>
                            <p className='text-sm font-semibold'>DESIGN</p>
                            <h3 className='text-3xl font-semibold'>THE NEW STANDARD OF CHARGING</h3>
                        </div>
                    </div>
                    </Link>

                    <Link to="/blog">
                    <div className='grid md:grid-cols-2 gap-5 my-7 items-center'>
                        <div className='overflow-hidden'><img className='transition-transform duration-700 transform scale-100 hover:scale-105' src="https://focal-theme-carbon.myshopify.com/cdn/shop/articles/Image_blog_12_1500x1125_2875f42d-a039-4d5e-947e-a502b6b73f12_600x.jpg?v=1630491384" alt="" /></div>
                        <div>
                            <p className='text-sm font-semibold'>NEWS</p>
                            <h3 className='text-3xl font-semibold'>HOW DO WE PROTECT OURSELVES?</h3>
                        </div>
                    </div>
                    </Link>

                    <Link to="/blog">
                    <div className='grid md:grid-cols-2 gap-5 items-center'>
                        <div className='overflow-hidden'><img className='transition-transform duration-700 transform scale-100 hover:scale-105' src="https://focal-theme-carbon.myshopify.com/cdn/shop/articles/Working-Remotely_600x.jpg?v=1630490945" alt="" /></div>
                        <div>
                            <p className='text-sm font-semibold'>NEWS</p>
                            <h3 className='text-3xl font-semibold'>BEING MORE PRODUCTIVE AT HOME</h3>
                        </div>
                    </div>
                    </Link>
                     
                </div>
                
            </div>
        </div>
    );
};

export default Blog;