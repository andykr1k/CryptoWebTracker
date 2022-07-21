import axios from "axios";
import { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import { Link } from "react-router-dom";
import { TrendingCoins } from "../config/api";
import { Coin } from '../components'
import { motion } from "framer-motion";

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
        <div className='flex justify-center items-center'>
            <form>
            <input
                    className='block h-10 p-3 border-2 border-gray-200 rounded-lg bg-transparent'
                    type='text'
                    onChange={handleChange}
                    placeholder='Search'
                />
            </form>
        </div>
        {filteredCoins.map(coin => {
        return (
          <Link to={`/coin/${coin.name}`} element={<Coin />}>
          <motion.div whileHover={{scale:1.2}}>
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
          </motion.div>
          </Link>
        );
      })}
    </div>
  );
};

export default CoinInfo;