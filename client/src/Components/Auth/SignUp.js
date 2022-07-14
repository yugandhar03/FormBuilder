import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { SiCodeigniter } from 'react-icons/si'
import { signup, emailvalidate } from "../../redux/actions/UserAction";
import { useDispatch, useSelector } from "react-redux";
import * as api from '../../redux/api/index'

import "./style.css";

const initialState = {
  email: "",
  fullname: "",
  password: "",
};

const SignUp = () => {
  const [isemailexists, setIsEmailexists] = useState(true)
  const [user, setUser] = useState(initialState);
  const [formErrors, setFormErrors] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleContinue = async () => {
    var validRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (user.email.match(validRegex)) {
    } else {
      setFormErrors("Invalid email address!");
    }
    try {
      await api.emailvalidate(user);
      setIsEmailexists(false);
      console.log('')
    } catch (error) {
      setIsEmailexists(true);
      setFormErrors("Email Address Already Exist  "); 
    }
    var validRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (user.email.match(validRegex)) {
    } else {
      setFormErrors("Invalid email address!");
    }

  }

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signup(user, navigate));
  };
  return (
    <div className="container">
      <div className="form-container">
        <div>
          <h3 className="brand-log"><SiCodeigniter /> Ignite</h3>
          <div>
            <h5 className="social-media-title">Get Started With Ignite</h5>
            {
              isemailexists ?
                <>
                  <div className="get-start-btn">
                    <button>Gmail</button>
                    <button>FaceBook</button>
                    <button>Linkdin</button>
                  </div>
                  <div>
                    <div>
                      <label>Email</label>
                    </div>
                    <input className={formErrors ? "error" : "form-input"}
                      type="text"
                      name="email"
                      onChange={handleChange} />
                    {formErrors && <p className="error-message">{formErrors}</p>}
                    <button className="submit-button" type="submit" onClick={handleContinue}>Continue</button>
                    <div className="form-footer">
                      <p>Already use Ignite? <Link to="/">Login</Link></p>
                      <Link to="/forgot">Forgot your Password? </Link>
                    </div>
                  </div>
                </>
                :
                <>
                  <div>
                    <label>Full Name</label><br />
                    <input className="form-input"
                      type="Text"
                      name="fullname"
                      onChange={handleChange} />
                    <label>Password</label><br />
                    <input className="form-input"
                      type="password"
                      name="password"
                      onChange={handleChange} />
                    <button className="submit-button" type="submit" onClick={handleSubmit} >Continue</button>
                  </div>
                </>
            }
          </div>
        </div>
        <div className="privacy-policy">
          <p>By registering, you agree to our <strong>Terms of Service</strong> and <strong> Privacy Policy.</strong></p>
        </div>
      </div>
    </div>
  )
}
export default SignUp