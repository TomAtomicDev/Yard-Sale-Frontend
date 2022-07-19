import React from 'react';
import './NewPassword.scss';
import iconLogo from '@logos/logo_yard_sale.svg';

function NewPassword(props) {
  return (
    <div className="NewPassword">
      <div className="NewPassword-container">
        <img src={iconLogo} alt="logo" className="logo" />
        <h1 className="title">Create a new password</h1>
        <p className="subtitle">Enter a new password for your account</p>
        <form action="/" className="form">
          <div className="form-field">
            <label htmlFor="password" className="form-field__label">Password</label>
            <input type="password" id="password" placeholder="*********" className="form-field__input input--password" />
          </div>
          <div className="form-field">
            <label htmlFor="new-password" className="form-field__label">Re-enter password</label>
            <input type="password" id="new-password" placeholder="*********" className="form-field__input input--password" />
          </div>
          <input type="submit" defaultValue="Confirm" className="button button--primary" />
        </form>
      </div>
    </div> 

  );
}

export {NewPassword} ;