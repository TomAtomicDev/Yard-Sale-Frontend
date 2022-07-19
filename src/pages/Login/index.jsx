import React from 'react';

function Login (props) {
  return (
    <div className="Login"> 
      <div className="Login-container">
        <img src="./assets/logos/logo_yard_sale.svg" alt="logo" className="logo" />
        <form action="/" className="form">
          <div className="form-field">
            <label htmlFor="email" className="form-field__label">Email adress</label>
            <input type="email" id="email" placeholder="myadress@example.com" className="form-field__input input--email" />
          </div>
          <div className="form-field">
            <label htmlFor="password" className="form-field__label">Password</label>
            <input type="password" id="password" placeholder="*********" className="form-field__input input--password" />
          </div>
          <input type="submit" defaultValue="Login" className="button button--primary" />
          <a href="/" className="tinny-note tinny-note__link">
            Forgot my password
          </a>
        </form>
        <button className="button button--secondary">
          Sign up
        </button>
      </div>
    </div> 

  );
}

export {Login}  ;