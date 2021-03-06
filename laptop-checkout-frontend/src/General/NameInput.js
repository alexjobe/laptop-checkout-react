import React, {Component} from 'react';

class NameInput extends Component {

  state = {
    hasFocus: false
  };

  handleBlur = () => {
    // The onBlur DOM event occurs when an object loses focus
    this.setState(st => {
      return {hasFocus: false};
    });
  }

  handleFocus = () => {
    // The onFocus DOM event occurs when an object has focus
    this.setState(st => {
      return {hasFocus: true};
    });
  }

  render() {
    var placeholder = this.props.placeholder;
    if(this.props.value) {
      // If value is passed as a prop, render placeholder and value, for example: "User Name: Bilbo" where
      // placeholder is "User Name" and value is "Bilbo"
      placeholder = placeholder + ': ' + this.props.value;
    }
    return (
      <input 
        name={this.props.name}
        type='text'
        value={this.state.hasFocus? this.props.value : ''}
        onChange={this.props.onChange}
        placeholder={placeholder}
        onFocus = {this.handleFocus}
        onBlur= {this.handleBlur}
      />
    )
  }
}

export default NameInput;