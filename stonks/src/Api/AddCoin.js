import React, { useContext, useState, useEffect } from 'react'
import {WatchList} from "./context/WatchList"
import axios from 'axios';


function AddCoin() {
    const [availableCoins, setAvailableCoins] = useState([]);
  const [isActive, setActive] = useState(false);
    const {addCoin} = useContext(WatchList);

    const handleClick = (coin) => {
        addCoin(coin);
    }

    
    useEffect(() => {
      let mounted = true;
      axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=CAD&order=market_cap_desc&per_page=500&page=1&sparkline=false')
        .then(res => {
          let data = res.data;
          if (mounted) {
            setAvailableCoins(data);
          }
          }).catch(err => console.log(err))

      return () => mounted = false;
    }, []);

    return (
        <div className="dropdown">
            <button className="btn btn-primary dropdown-toggle" type="button" onClick={() => setActive(!isActive)}> Add Coin </button>
            <div className={isActive ? "dropdown-menu show" : "dropdown-menu"}>
                {availableCoins.map(el => {
                    return(
                        <a onClick={() => handleClick(el["id"])} href="#" className="dropdown-item">{el["name"]}</a>
                    )
                })}
            </div>
        </div>
    );
}

export default AddCoin;
