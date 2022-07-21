import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { SiCodeigniter } from 'react-icons/si'
import { signin } from "../../redux/actions/UserAction";
import { useDispatch, useSelector } from "react-redux";
import * as api from '../../redux/api/index';


import "./style.css";

const initialState = {
    email: "",
    password: "",
};

const Login = () => {
    const [user, setUser] = useState(initialState);
    // const [message, setMessage] = useState()
    const [error_msg, setErrorMsg] = useState()
    const loginstatus = useSelector((state) => state.UserReducer);
    const navigate = useNavigate();
    const dispatch = useDispatch();
  
    
    const google = () => {
        window.open(api.googleApi, "_self");
    };

    const linkdin = () => {
        window.open(api.linkedinApi, "_self");
    };

    const facebook = () => {
        window.open(api.facebookApi, "_self");
    };
    const handleChange = (e) =>
        setUser({ ...user, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(signin(user, navigate));
    };

    useEffect(() => {
        if (loginstatus.errors) {
            // let message_status = loginstatus.errors.message;
            let error_status = loginstatus.errors.error_message;
            // setMessage(message_status)
            setErrorMsg(error_status)
        }
    })
    
    return (
        <div className="container">
            <div className="form-container">
                <div>
                    <h3 className="brand-log"><SiCodeigniter /> Ignite</h3>
                    <div>
                        <h4 className="social-media-title">Login</h4>
                     
                        <div className="get-start-btn">
                        
                            <button onClick={google}>Gmail</button>
                            <button onClick={facebook}>FaceBook</button>
                            <button onClick={linkdin}>Linkdin</button>
                        </div>
                        <div>
                            <label>Email</label><br />
                            <input className="form-input"
                                type="email"
                                name="email"
                                onChange={handleChange} />
                            <label>Password</label><br />
                            <input className="form-input"
                                type="password"
                                name="password"
                                onChange={handleChange} />
                            {error_msg && <p className="error-message">{error_msg}</p>}
                            {/* {message && <p className="success-message" >{message}</p>} */}
                            <button className="submit-button" type="submit" onClick={handleSubmit}>Continue</button>
                            <div className="form-footer">
                                <a href="/signup">Create an account</a>
                                <a href="/forgot">Forgot your Password? </a>
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