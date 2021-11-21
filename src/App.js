import React from 'react';
import './App.css';

import Table from './Api/Table'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import { WatchListContextProvider } from './Api/context/WatchList';

function App() {
  return (
    <WatchListContextProvider>
      <div className="App">
        <Header/>
        <div className="App-body">
          <Table/>
        </div>
        <Footer/>
      </div>
    </WatchListContextProvider>
    
  );
}

export default App;