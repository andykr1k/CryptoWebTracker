import React from 'react';
import {Link} from 'react-router-dom'

const Coin = ({
  name,
  price,
  symbol,
  marketcap,
  volume,
  image,
  priceChange
}) => {
  return (
    <div className='mt-5 bg-white rounded-2xl p-5 items-center'>
        <div className='grid place-items-center text-center'>
            <img src={image} className='w-16 mr-3' alt='crypto' />
            <div className='flex'>
                <h1 className='font-extrabold text-xl'>{name}</h1>
                <p className='m-0 text-xs'>{symbol}</p>
            </div>
            <div className='flex space-x-2'>
                {priceChange < 0 ? (
                    <p className='text-red-600'>{price}</p>
                    ) : (
                    <p className='text-green-600'>{price}</p>
                )}
                {priceChange != null && priceChange < 0 ? (
                    <p className='text-red-600'>{priceChange.toFixed(2)}%</p>
                ) : (
                    <p className='text-green-600'>+{priceChange}%</p>
                )}
            </div>
            <div className='text-xs m-0'>
            <p className=''>Volume: {volume}</p>
            <p className=''>
                Market Cap: ${marketcap}
            </p>
        </div>
        </div>
    </div>
  );
};

export default Coin;