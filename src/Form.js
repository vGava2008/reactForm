import React from 'react';
import './Form.css';

class Form extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name    : '',
      phone   : '',
      email   : '',
      message : '',
    }
    this.onChangeInput = this.onChangeInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

handleSubmit (event) {
   event.preventDefault();
const templateId = 'template_nG6q9g9Y';
this.sendFeedback(templateId, this.state);
console.log(this.state);
}

sendFeedback (templateId, variables) {
window.emailjs.send(
  'gmail', templateId, variables
  ).then(res => {
    console.log('Email successfully sent!')
  })
  .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
}

onChangeInput(event) {
  const name = event.target.name;
  const value = event.target.value;
  this.setState({[name]:value});
}

  render () {
    return (
      <div className='contact--form-wrapper'>
        <form className='contact--form' onSubmit={this.handleSubmit}>
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

export default Form;
