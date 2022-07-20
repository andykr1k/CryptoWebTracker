import axios from "axios";
import { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import { Link } from "react-router-dom";
import { TrendingCoins } from "../config/api";
import { Coin } from '../components'

const CoinInfo = () => {
    const [coins, setCoins] = useState([]);
    const [search, setSearch] = useState('');
  
    useEffect(() => {
      axios
        .get(
          'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
        )
        .then(res => {
          setCoins(res.data);
          console.log(res.data);
        })
        .catch(error => console.log(error));
    }, []);
  
    const handleChange = e => {
      setSearch(e.target.value);
    };
  
    const filteredCoins = coins.filter(coin =>
      coin.name.toLowerCase().includes(search.toLowerCase())
    );

  return (
    <div>
        <div className='flex justify-center items-center bg-black bg-opacity-5 p-3 rounded'>
            <form>
                <input
                    className='w-full text-center'
                    type='text'
                    onChange={handleChange}
                    placeholder='Search'
                />
            </form>
        </div>
        {filteredCoins.map(coin => {
        return (
          <Coin
            key={coin.id}
            name={coin.name}
            price={coin.current_price}
            symbol={coin.symbol}
            marketcap={coin.total_volume}
            volume={coin.market_cap}
            image={coin.image}
            priceChange={coin.price_change_percentage_24h}
          />
        );
      })}
    </div>
  );
};

export default CoinInfo;