import React from 'react';
import { useLocation } from 'react-router-dom'


function Trade() {
    const location = useLocation()
    const { cName, cImg } = location.state
    const coinName = cName
    const coinImg = cImg

    return (
        <body>
      <div className="tradePage">
            <img src={coinImg} alt="crypto"></img>
            <h1> {coinName} TradePage </h1>
      </div>
      <div className = 'graphs'>
            <div>graph 1</div>
            <div>graph 2</div>
      </div>
      <div className="tradePage-body">
          <h1 className="buy-button">Buy</h1>
          <h1 className = "sell-button">Sell</h1>
        </div>
      </body>
    );
  }
  

export default Trade;