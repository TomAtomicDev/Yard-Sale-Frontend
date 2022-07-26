import React from 'react';
import './MyAccount.scss';

function MyAccount (props) {
  return (
    <div className="MyAccount">
      <div className="MyAccount-container">
        <h1 className="title title--myaccount">My Account</h1>
        <form action="/" className="form">
          <div className="form-field">
            <label htmlFor="name" className="form-field__label">Name</label>
            <p className="form-field__value">Harry Potter</p>
          </div>
          <div className="form-field">
            <label htmlFor="email" className="form-field__label">Email adress</label>
            <p className="form-field__value">survivor2001@ministry.com</p>
          </div>
          <div className="form-field">
            <label htmlFor="new-password" className="form-field__label">Password</label>
            <p className="form-field__value">*********</p>
          </div>
          <input type="submit" defaultValue="Edit" className="button button--secondary" />
        </form>
      </div>
    </div> 

  );
}

export {MyAccount}  ;