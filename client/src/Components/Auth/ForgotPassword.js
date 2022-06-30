import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import { SiCodeigniter } from 'react-icons/si'

import "./style.css";

const ForgotPassword = () => {
    return (
        <div className="container">
            <div className="form-container">
                <div>
                    <h3 className="brand-log"><SiCodeigniter /> Ignite</h3>
                    {/* <img width="150" src={Ignite_logo} alt="BrangImage" /> */}
                    <div>
                        <h4 className="social-media-title">Reset Your Password</h4>
                        <p className="reset-text">Just let us know the email you used to signin to Iginit and we'll help you got your password back.</p>
                         <div>
                            <label>Email Address</label><br />
                            <input className="form-input" type="email" />
                            <button className="reset-button" type="submit">Send Password Reset Email</button>
                            <div className="form-footer">
                                <Link to="/">Take me back to Login</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="privacy-policy">
                    <p>By registering, you agree to our <strong>Terms of Service</strong> and <strong> Privacy Policy.</strong></p>
                </div>

            </div>
        </div >
    )
}

export default ForgotPassword