import React from 'react';
import './Login.scss';
import logo from '../../../assets/logos/logo_yard_sale.svg';

const Login = () => {
    return (
        <div className="login">
            <div className="form-container">

                <img src= {logo} alt="logo" className="logo" />
                
                <form action="/" className="form">

                    <div className="field">
                        <label htmlFor="email" className="field__label">Email adress</label>
                        <input type="email" id="email" placeholder="myadress@example.com" className="field__input input--email" />
                    </div>

                    <div className="field">
                        <label htmlFor="password" className="field__label">Password</label>
                        <input type="password" id="password" placeholder="*********" className="field__input input--password" />
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
};

export { Login };