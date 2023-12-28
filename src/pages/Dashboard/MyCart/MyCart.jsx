import React from 'react';
import useCart from '../../../hooks/useCart';

const MyCart = () => {

    const [cart] = useCart();
    console.log(cart);
    const totalPrice = [];
    cart.map(item => {
        const [currency, money] = item.price.split('$'); // TODO: have to chage the dababase price into only number
        const price = parseFloat(money);
        totalPrice.push(price);
    })
    // console.log(totalPrice)
    const cartTotalPrice = totalPrice.reduce((total, currentValue) => total + currentValue, 0);
    console.log(cartTotalPrice);

    return (
        <div className='w-full '>
            <div className='flex justify-between '>
                <h2 className='text-2xl'>Total Orders: {cart.length}</h2>
                <h2 className='text-2xl'>Total Price: {cartTotalPrice}</h2>
                <button className='btn btn-warning'>PAY</button>
            </div>
        </div>
    );
};

export default MyCart;