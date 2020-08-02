import React from 'react';

import Header from './components/Header';
import MainComponent from './components/MainComponent';
import Footer from './components/Footer';

import NumberPlayer from './components/misc/NumberPlayer';
import StarWarsInfo from './components/misc/StarWarsInfo';


import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <MainComponent />
      <Footer />
      {/* <NumberPlayer/> */}
      {/* <StarWarsInfo/> */}
    </div>
  );
}

export default App;
