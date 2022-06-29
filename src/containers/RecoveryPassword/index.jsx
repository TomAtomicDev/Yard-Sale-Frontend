import React from 'react';
import 'RecoveryPassword.scss';

const RecoveryPassword = () => {
    return (
        <div className="login">
            <div className="form-container">
                
                <img src="./assets/logos/logo_yard_sale.svg" alt="logo" className="logo" />

                <h1 className="title">Create a new password</h1>

                <p className="subtitle">Enter a new password for your account</p>

                <form action="/" className="form">

                    <div className="field">
                        <label for="password" className="field__label">Password</label>
                        <input type="password" id="password" placeholder="*********" className="field__input input--password" />
                    </div>
                    
                    <div className="field">
                        <label for="new-password" className="field__label">Re-enter password</label>
                        <input type="password" id="new-password" placeholder="*********" className="field__input input--password" />
                    </div>
                    
                    <input type="submit" value="Confirm" className="button button--primary" />
                </form>
            </div>
        </div>
    );
};

export {RecoveryPassword};
