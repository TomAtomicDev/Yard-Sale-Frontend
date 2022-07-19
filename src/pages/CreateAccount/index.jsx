import React from 'react';
import './CreateAccount.scss';

function CreateAccount(props) {
  return (
    <div className="CreateAccount"> 
      <div className="CreateAccount-container">
        <h1 className="title">Create a new Account</h1>
        <form action="/" className="form">
          <div className="form-field">
            <label htmlFor="name" className="form-field__label">Name</label>
            <input type="text" id="name" placeholder="Harry Potter" className="form-field__input input--password" />
          </div>
          <div className="form-field">
            <label htmlFor="email" className="form-field__label">Email adress</label>
            <input type="email" id="email" placeholder="myadress@example.com" className="form-field__input input--email" />
          </div>
          <div className="form-field">
            <label htmlFor="new-password" className="form-field__label">Re-enter password</label>
            <input type="password" id="new-password" placeholder="*********" className="form-field__input input--password" />
          </div>
          <input type="submit" defaultValue="Create" className="button button--primary" />
        </form>
      </div>
    </div> 

  );
}

export {CreateAccount} ;