import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header';
import MainComponent from './components/MainComponent';
import Footer from './components/Footer';


import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <MainComponent />
      <Footer />
    </div>
  );
}

export default App;
