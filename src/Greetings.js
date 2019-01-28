import React, { Component } from 'react';
import './App.css';

function Greetings(props) {
  return (
    <div>
      Hey you! {props.firstName} {props.lastName}!
    </div>
    );
}

export default Greetings;
