import React,{useState} from 'react';
import { Link,useNavigate } from 'react-router-dom';
import { SiCodeigniter } from 'react-icons/si'
import { signin } from "../../redux/actions/UserAction";
import { useDispatch } from "react-redux";

import "./style.css";

const initialState = {
    email: "",
    password: "",
  };

const Login = () => {
    const [user, setUser] = useState(initialState);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    const google = () => {
        window.open("http://localhost:5000/auth/google", "_self");
      };
    
      const linkdin = () => {
        window.open("http://localhost:5000/auth/linkedin", "_self");
      };
    
      const facebook = () => {
        window.open("http://localhost:5000/auth/facebook", "_self");
      };
    const handleChange = (e) =>
    setUser({ ...user, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(user)
        dispatch(signin(user, navigate));
      };
    return (
        <div className="container">
            <div className="form-container">
                <div>
                    <h3 className="brand-log"><SiCodeigniter /> Ignite</h3>
                    {/* <img width="150" src={Ignite_logo} alt="BrangImage" /> */}
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
                            <button className="submit-button" type="submit" onClick={handleSubmit}>Continue</button>
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