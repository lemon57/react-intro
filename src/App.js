import React, { Component } from 'react';
import './App.css';
import Greetings from './Greetings';
import SimpleForm from './SimpleForm';


function App() {
    return (
      <div className="App">
        <div>
          <SimpleForm />
        </div>
        <div>
          <Greetings firstName="Roman" lastName="Lemon" />
        </div>
      </div>
    );
  }


export default App;
