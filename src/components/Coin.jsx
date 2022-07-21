import React from 'react';

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
    <div className='flex mt-3 bg-white rounded p-3 items-center justify-between'>
        <div className='flex items-center'>
            <img src={image} className='w-16 mr-3' alt='crypto' />
            <div className=''>
                <div className='flex'>
                    <h1 className='font-extrabold text-xl'>{name}</h1>
                    <p className='m-0 text-xs'>{symbol}</p>
                </div>
                {priceChange < 0 ? (
                    <p className='text-red-600'>{price}</p>
                    ) : (
                    <p className='text-green-600'>{price}</p>
                )}
            </div>
        </div>
    
        <div className='text-xs m-0'>
            {priceChange < 0 ? (
                    <p className='text-red-600'>{priceChange.toFixed(2)}%</p>
                ) : (
                    <p className='text-green-600'>{priceChange.toFixed(2)}%</p>
            )}
            <p className=''>Volume: {volume.toLocaleString()}</p>
            <p className=''>
                Market Cap: ${marketcap.toLocaleString()}
            </p>
        </div>
    </div>
  );
};

export default Coin;