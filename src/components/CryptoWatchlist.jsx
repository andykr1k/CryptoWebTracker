import * as React from 'react'
import '../App.css'
import CoinInfo from './CoinInfo';


function CryptoWatchlist() {
  return (
    <div className='grid place-items-center'>
        <h1 className='flex text-4xl lg:text-6xl font-extrabold m-5 text-white'>Watchlist</h1>
        <CoinInfo />
    </div>
  )
}

export default CryptoWatchlist;