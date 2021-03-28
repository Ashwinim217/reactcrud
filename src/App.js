import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import Contacts from './components/Contacts';

function App() {
  return (
    <div className="row">
      <div className="col-md-8 offset-md-2">
        <Contacts ></Contacts>
      </div>
    </div>
  );
}

export default App;