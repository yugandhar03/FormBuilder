import React, { useState, useEffect, Fragment } from 'react';
import * as api from '../../redux/api/index'
import axios from 'axios'
import { useParams, useNavigate } from "react-router-dom";
import { SiCodeigniter } from 'react-icons/si';


const PasswordReset = () => {
    const [validUrl, setValidUrl] = useState(false);
    const [password, setPassword] = useState("");
    const [msg, setMsg] = useState("");
    const [error, setError] = useState("");
    const user_id = useParams();

    useEffect(() => {
        const verifyUrl = async () => {
            try {
                await api.verifylink(user_id);
                setValidUrl(true);
            } catch (error) {
                setValidUrl(false);
            }
        };
        verifyUrl();
    }, [user_id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formData = { id: user_id.id, token: user_id.token, password: password }
            const { data } = await api.updatepassword(formData);
            setMsg(data.message);
            setError("");
            window.location = "/";
        } catch (error) {
            if (
                error.response &&
                error.response.status >= 400 &&
                error.response.status <= 500
            ) {
                setError(error.response.data.message);
                setMsg("");
            }
        }
    };
    return (
        <Fragment>
            {validUrl ? (
                <div className="container">
                    <div className="form-container">
                        <div>
                            <h3 className="brand-log"><SiCodeigniter /> Ignite</h3>
                            <div>
                                <h4 className="social-media-title">Reset Your Password</h4>
                                <p className="reset-text">Just let us know the email you used to signin to Iginit and we'll help you got your password back.</p>
                                <div>
                                    <label>New Password</label><br />
                                    <input className="form-input" type="password" name="password"
                                        onChange={(e) => setPassword(e.target.value)}
                                        value={password}
                                        required />
                                    {error && <div >{error}</div>}
                                    {msg && <div >{msg}</div>}
                                    <button className="reset-button" onClick={handleSubmit} type="submit">Send Password Reset</button>
                                </div>
                            </div>
                        </div>
                        <div className="privacy-policy">
                            <p>By registering, you agree to our <strong>Terms of Service</strong> and <strong> Privacy Policy.</strong></p>
                        </div>
                    </div>
                </div >
            ) : (
                <h1>404 Not Found</h1>
            )}
        </Fragment>
    )
}
export default PasswordReset