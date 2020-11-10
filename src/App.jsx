import React from 'react';
import './App.css';
import io from 'socket.io-client'

const server = io('http://localhost:3000')


function App() {


  return (
    <div className="App">
      Hello
    </div>
  );
}

export default App;
