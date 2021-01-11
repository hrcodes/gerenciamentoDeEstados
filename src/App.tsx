import React from 'react';
import FormSearch from './components/FormSearch';
import './App.css';

function App() {
  const send = (value: string) => { console.log('Helder', value) }
  const clear = () => { console.log('reset') }

  return (
    <div className="App">
      <FormSearch onSubmit={ send } onReset={ clear }/>
    </div>
  );
}

export default App;
