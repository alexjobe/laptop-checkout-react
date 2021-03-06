import React, {Component} from 'react';
import DateInput from '../General/DateInput';
import NameInput from '../General/NameInput';

class CheckoutForm extends Component {

  state = {
    userName: '',
    userEmail: '',
    mgrName: '',
    dueDate: ''
  };

  handleChange = (e) => {
    // [e.target.name] is a computed property name
    let newState = {[e.target.name]: e.target.value };
    this.setState(st => {
      return newState;
    });
  }

  handleSubmit = (e) => {
    e.preventDefault(); // Prevent form from reloading the page on submit
    // Create checkout object
    var checkout = {
      userName: this.state.userName,
      userEmail: this.state.userEmail,
      mgrName: this.state.mgrName,
      dueDate: this.state.dueDate
    }
    if(this.state.userName && this.state.mgrName && this.state.dueDate) {
      // Call addCheckout(), which is passed from CheckoutView as a prop
      this.props.addCheckout(checkout);
    }
  }

  render() {
    return (
      <section id="checkoutForm">
        <h3 id="available">Available</h3>
        <form id="checkoutInput">
          <NameInput
            name='userName'
            value={this.state.userName}
            onChange={this.handleChange}
            placeholder='User Name'
          />
          <NameInput
            name='userEmail'
            value={this.state.userEmail}
            onChange={this.handleChange}
            placeholder='Email'
          />
          <NameInput 
            name='mgrName'
            value={this.state.mgrName}
            onChange={this.handleChange}
            placeholder='Approved By'
          />
          <DateInput
            name='dueDate'
            placeholder='Due Date'
            value={this.state.dueDate} 
            onChange={this.handleChange}>
          </DateInput>
          <button 
            onClick={this.handleSubmit}
          >Check out</button>
        </form>
      </section>
    )
  }
}

export default CheckoutForm;