import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/header';
import MainComponent from './components/mainComponent';
import Footer from './components/footer';


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
