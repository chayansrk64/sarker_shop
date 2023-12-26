import React from 'react';

const Button = ({buttonText, onClick}) => {
    return (
        <div>
            <button onClick={onClick} className='px-8 py-4 bg-[#F3FF34] hover:bg-[#c7d40f] hover:underline font-bold tracking-wider  text-black font-xl uppercase '>{buttonText}</button>
        </div>
    );
};

export default Button;