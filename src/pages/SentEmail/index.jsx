import React from 'react';
import './SentEmail.scss';
import iconLogo from '@logos/logo_yard_sale.svg';
import iconEmail from '@icons/email.svg'

function SentEmail (props) {
  return (
    <div className="SentEmail">
      <div className="SentEmail-container">
        <img src={iconLogo} alt="logo" className="logo" />
        <h1 className="title">Email has been sent!</h1>
        <p className="subtitle">Please check your inbox for instructions on how to reset the password</p>
        <div className="email-icon">
          <img src={iconEmail} alt="Email" />
        </div>
        <button className="button button--primary">Login</button>
        <p className="tinny-note">
          <span>Didn't received the email?</span>
          <a className="tinny-note__link" href="/">Resend</a>
        </p>
      </div>
    </div> 

  );
}

export {SentEmail} ;