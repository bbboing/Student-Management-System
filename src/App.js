import React from 'react';
import './App.css';
// import HomePage from './pages/HomePage/HomePage.js.js'

function App(props) {
  return (
    <div className="App">
      {props.children}
    </div>
  );
}

export default App;
