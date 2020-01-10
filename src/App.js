import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name    : '',
      phone   : '',
      email   : '',
      message : '',
    }
    this.onChangeInput = this.onChangeInput.bind(this);
  }

submitForm = (event) => {
  event.preventDefault();
  //console.log(this.state.name,this.state.phone,this.state.email,this.state.message);
  console.log(this.state);
}

onChangeInput(event) {
  const name = event.target.name;
  const value = event.target.value;
  this.setState({[name]:value});
}

  render () {
    return (
      <div className='contact--form-wrapper'>
        <form className='contact--form' onSubmit={this.submitForm}>
          <input type='hidden' name='form-name' value='getintouch' />
          <input type='hidden' name='bot-field' />
          <input type='text' name='name'    className='contact--form-input' placeholder='Name'  onChange={this.onChangeInput} required/>
          <input type='email' name='email'  className='contact--form-input' placeholder='E-mail'  onChange={this.onChangeInput} required />
          <input type='tel' name='phone'    className='contact--form-input' placeholder='Phone number'  onChange={this.onChangeInput} />
          <textarea name='message'          className='contact--form-input' placeholder='Message'  onChange={this.onChangeInput}></textarea>
          <button type='submit' className='link-button dark wide'>Send</button>
        </form>
      </div>
    );
  }
}

export default App;
