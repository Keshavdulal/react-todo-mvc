import React from 'react';

import Header from './components/Header';
import MainComponent from './components/MainComponent';
import Footer from './components/Footer';

import NumberPlayer from './components/NumberPlayer';
import StarWarsInfo from './components/StarWarsInfo';


import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <MainComponent />
      <Footer />
      <NumberPlayer/>
      <StarWarsInfo/>
    </div>
  );
}

export default App;
