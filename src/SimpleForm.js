import React, { Component } from 'react';
import Greetings from './Greetings';
import './App.css';

class SimpleForm extends React.Component {
  state = {
    firstName: "",
  };

  onFirstNameChange = event =>
    this.setState({
      firstName: event.target.value
    });

  render() {
    return (
      <div>
        <input type="text" name="firstName" onChange={this.onFirstNameChange} />

        <Greetings firstName={this.state.firstName} />
      </div>
    );
  }
}

export default SimpleForm;
