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
    <div className='flex mt-3 bg-white rounded p-3'>
        <img src={image} className='w-14' alt='crypto' />
        <div>
            <h1 className='font-extrabold text-xl'>{name}</h1>
            <div className='flex'>
                <p className='m-0 text-xs'>{symbol}</p>
                {priceChange < 0 ? (
                    <p className=' text-red-600'>{price}</p>
                    ) : (
                    <p className='text-green-600'>{price}</p>
                )}
            </div>
        </div>
        <div className='text-xs m-0'>
            <p className=''>${volume.toLocaleString()}</p>

            {priceChange < 0 ? (
                    <p className=' text-red-600'>{priceChange.toFixed(2)}%</p>
                ) : (
                    <p className='text-green-600'>{priceChange.toFixed(2)}%</p>
            )}

            <p className='m-0'>
                Market Cap: ${marketcap.toLocaleString()}
            </p>
        </div>
    </div>
  );
};

export default Coin;