import React, { Component } from 'react';
import Greetings from './Greetings';
import style from './style';
import TexField from './TextField';
import FirstNameField from './FirstNameField';
import LastNameField from './LastNameField';

class SimpleForm extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    firstNameError: ""
  };

  validateName = name => {
    const regex = /[A-Za-z]{3,}/;

    return !regex.test(name)
      ? "The name must contain at least three letters. Numbers and special characters are not allowed."
      : "";
  };

  onFirstNameBlur = () => {
    const { firstName } = this.state;

    const firstNameError = this.validateName( firstName );

    return this.setState({ firstNameError });
  };

  onLastNameBlur = () => {
    const { lastName } = this.state;

    const lastNameError = this.validateName( lastName );

    return this.setState({ lastNameError });
  };

  onFirstNameChange = event =>
    this.setState({
      firstName: event.target.value
    });

  onLastNameChange = event =>
    this.setState({
      lastName: event.target.value
    });

  render() {
    const { firstNameError, firstName, lastName, lastNameError } = this.state;
    return (
      <div style={style.form}>
       <FirstNameField onChange={this.onFirstNameChange}
                       onBlur={this.onFirstNameBlur}
                       error={firstNameError} />
       <LastNameField onChange={this.onLastNameChange}
                      onBlur={this.onLastNameBlur}
                      error={lastNameError} />
       <div>
        <Greetings firstName={ firstName } lastName={ lastName } />
       </div>
      </div>
    );
  }
}

export default SimpleForm;
