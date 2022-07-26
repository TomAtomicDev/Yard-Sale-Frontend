import React, { useRef } from 'react';
import './Login.scss'

function Login (props) {

  const form = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(form.current);
    const data = {
      userEmail: formData.get('email'),
      password: formData.get('password')
    };
    console.log(data);
  };

  return (
    <div className="Login"> 
      <div className="Login-container">
        <img src="./assets/logos/logo_yard_sale.svg" alt="logo" className="logo" />
        <form action="/" className="form" ref={form}>
          <div className="form-field">
            <label htmlFor="email" className="form-field__label">Email adress</label>
            <input type="email" name="email" placeholder="myadress@example.com" className="form-field__input input--email" />
          </div>
          <div className="form-field">
            <label htmlFor="password" className="form-field__label">Password</label>
            <input type="password" name="password" placeholder="*********" className="form-field__input input--password" />
          </div>
          <button
            onClick={handleSubmit}
            className="button button--primary">
          Log in
          </button> 

          <a 
            href="/" 
            className="tinny-note tinny-note__link">
          Forgot my password
          </a>
        </form>
        <button 
          className="button button--secondary">         
        Sign up
        </button>
      </div>
    </div> 

  );
}

export {Login}  ;