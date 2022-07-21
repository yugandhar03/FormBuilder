import React, { useState, useEffect, Fragment } from 'react';
import * as api from '../../redux/api/index'
import { useParams } from "react-router-dom";
import { SiCodeigniter } from 'react-icons/si';
import validator from 'validator';


const PasswordReset = () => {
    const [validUrl, setValidUrl] = useState();
    const [notvalidUrl, setNotValidUrl] = useState();
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
                setNotValidUrl(true);
            }
        };
        verifyUrl();
    }, [user_id]);
    // const validate = (value) => {

    //     if (validator.isStrongPassword(value, {
    //         minLength: 8, minLowercase: 1,
    //         minUppercase: 1, minNumbers: 1, minSymbols: 1
    //     })) {
    //         setFormErrors(null)

    //     } else {
    //         setFormErrors('Is Not Strong Password')
    //     }
    // }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validator.isStrongPassword(password, {
            minLength: 8, minLowercase: 1,
            minUppercase: 1, minNumbers: 1, minSymbols: 1
        })) {
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

        } else {
            setError('Is Not Strong Password')
        }
    };
    return (
        <Fragment>
            {validUrl && (
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
            )}
            {notvalidUrl && <h1>404 Not Found</h1>}
        </Fragment>
    )
}
export default PasswordReset