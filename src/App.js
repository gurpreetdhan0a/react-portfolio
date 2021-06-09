import React from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';

function App() {
  return (
    <div>
        <Header />
        <Main />
        <Portfolio />
        <Skills />
    </div>
  );
}

export default App;
