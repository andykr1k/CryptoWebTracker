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
    <div className='mt-3 m-auto bg-white'>
      <div className='flex'>
        <div className='flex'>
          <img src={image} className='w-14' alt='crypto' />
          <div>
            <div className='flex'>
                <h1 className='font-extrabold text-xl'>{name}</h1>
                <p className=''>{symbol}</p>
            </div>
            <p className='coin-price'>${price}</p>
          </div>
        </div>
        <div className='text-xs'>
          <p className=''>${volume.toLocaleString()}</p>

          {priceChange < 0 ? (
            <p className=' text-red-600'>{priceChange.toFixed(2)}%</p>
          ) : (
            <p className='text-green-600'>{priceChange.toFixed(2)}%</p>
          )}

          <p className=''>
            Mkt Cap: ${marketcap.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Coin;