import React, { useState } from 'react';
import { Link,useNavigate  } from 'react-router-dom';
import { SiCodeigniter } from 'react-icons/si'
import { signup } from "../../redux/actions/UserAction";
import { useDispatch } from "react-redux";

import "./style.css";
const initialState = {
  email: "",
  fullname:"",
  password: "",
};

const SignUp = () => {
  const [isemailexists, setIsEmailexists] = useState(true)
  const [user, setUser] = useState(initialState);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const handleContinue = () => {
    setIsEmailexists(false)
  }

const handleChange = (e) =>
    setUser({ ...user, [e.target.name]: e.target.value });
  
const handleSubmit = (e) => {
      e.preventDefault();
      console.log(user)
      dispatch(signup(user, navigate));
    };
  return (
    <div className="container">
      <div className="form-container">
        <div>
          <h3 className="brand-log"><SiCodeigniter /> Ignite</h3>
          {/* <img width="150" src={Ignite_logo} alt="BrangImage" /> */}

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
                    <input className="form-input"
                      type="text"
                      name="email"
                      onChange={handleChange} />
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