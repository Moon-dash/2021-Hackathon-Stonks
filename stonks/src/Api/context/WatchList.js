import React, { createContext, useState } from "react";


export const WatchList = createContext();

export const WatchListContextProvider = props =>    {
    const [ watchList, setWatchList ] = useState([
        "bitcoin", 
        "ethereum", 
        "ripple",
        "litecoin"
    ]);

    const addCoin = coin => {
        if(watchList.indexOf(coin) === -1)
        {
            setWatchList([...watchList, coin])
        }
    }

    const deleteCoin = (coin) => {
        setWatchList(
            watchList.filter(el => {
                return el !== coin
        }))
    };

    return  (
        <WatchList.Provider value={{watchList, deleteCoin, addCoin}}>
            {props.children}

        </WatchList.Provider>

    );

}