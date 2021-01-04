import React from 'react';
import logo from './logo.svg';
import './App.css';
import Mensagem from './components/ExMensagem';

function App() {
  return (
    // porque nao funciona caso o className for da Mensagem?
    <div className="App"> 
      <Mensagem/>
      <img src={logo} alt="Hello World" className="App-logo"/>
    </div>
  );
}

export default App;
