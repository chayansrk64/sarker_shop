import React from 'react';

const Button = ({buttonText, onClick}) => {
    return (
        <div>
            <button onClick={onClick} className='px-8 py-4 bg-warning hover:bg-[#ffbf00f0] hover:underline font-bold tracking-wider  text-black font-xl uppercase '>{buttonText}</button>
        </div>
    );
};

export default Button;