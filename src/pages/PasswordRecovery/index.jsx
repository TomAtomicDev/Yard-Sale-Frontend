import React from 'react';
import './PasswordRecovery.scss';
import iconLogo from '@logos/logo_yard_sale.svg';

function PasswordRecovery (props) {
  return (
    <div className="PasswordRecovery">
      <div className="PasswordRecovery-container">
        <img src={iconLogo} alt="logo" className="logo" />
        <h1 className="form-title">Password recovery</h1>
        <p className="form-subtitle">Enter Inform the email address used to create your account</p>
        <form action="/" className="form">
          <div className="form-field">
            <label htmlFor="email" className="form-field__label">Email adress</label>
            <input type="email" id="email" placeholder="myadress@example.com" className="form-field__input input--email" />
          </div>
          <input type="submit" defaultValue="ConfirmRecovery" className="button button--primary" />
        </form>
      </div>
    </div>

  ); 
}

export {PasswordRecovery}  ;