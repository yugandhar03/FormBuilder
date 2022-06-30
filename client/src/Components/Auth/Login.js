import React from 'react';
import {Link} from 'react-router-dom';
import { SiCodeigniter } from 'react-icons/si'

import "./style.css";

const Login = () => {
    return (
        <div className="container">
            <div className="form-container">
                <div>
                    <h3 className="brand-log"><SiCodeigniter /> Ignite</h3>
                    {/* <img width="150" src={Ignite_logo} alt="BrangImage" /> */}
                    <div>
                        <h4 className="social-media-title">Login</h4>

                        <div className="get-start-btn">
                            <button>Gmail</button>
                            <button>FaceBook</button>
                            <button>Linkdin</button>
                        </div>
                        <div>
                            <label>Email</label><br/>
                            <input className="form-input" type="email" />
                            <label>Password</label><br/>
                            <input className="form-input" type="password" />
                            <button className="submit-button" type="submit">Continue</button>
                            <div className="form-footer">
                                <Link to="/signup">Create an account</Link>
                                <Link to="/forgot">Forgot your Password? </Link>
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

export default Login