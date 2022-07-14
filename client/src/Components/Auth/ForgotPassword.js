import React, { useState, useEffect } from 'react';
import { forgotpassword } from "../../redux/actions/UserAction";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { SiCodeigniter } from 'react-icons/si';

import "./style.css";

const initialState = {
    email: ""
};
const ForgotPassword = () => {
    const [user, setUser] = useState(initialState);
    const [message, setMessage] = useState()
    const [error_msg, setErrorMsg] = useState()
    const userstatus = useSelector((state) => state.UserReducer);
 
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handleChange = (e) =>
        setUser({ ...user, [e.target.name]: e.target.value });
    const onSubmit = e => {
        e.preventDefault();
        dispatch(forgotpassword(user, navigate));
    };
    useEffect(() => {
        if (userstatus.errors) {
            let message_status = userstatus.errors.message;
            let error_status = userstatus.errors.error_message;
            setMessage(message_status)
            setErrorMsg(error_status)
        }
    })


    return (
        <div className="container">
            <div className="form-container">
                <div>
                    <h3 className="brand-log"><SiCodeigniter /> Ignite</h3>
                    <div>
                        <h4 className="social-media-title">Forgot Your Password</h4>
                        <p className="reset-text">Just let us know the email you used to signin to Iginit and we'll help you got your password back.</p>
                        <div>
                            <label>Email Address</label><br />
                            <input className="form-input" type="email" name="email"
                                // onChange={(e) => setUser(e.target.value)}
                                onChange={handleChange} />
                            {error_msg && <p className = "error-message">{error_msg}</p>}
                            {message && <p className = "success-message" >{message}</p>}
                            <button className="reset-button" type="submit" onClick={onSubmit}>Send Password Reset Email</button>
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