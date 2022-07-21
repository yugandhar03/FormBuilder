import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UpdateUser } from '../../redux/actions/UserAction.js';
import { forgotpassword } from "../../redux/actions/ForgotPass.js";
import { useDispatch, useSelector } from 'react-redux';
import * as api from '../../redux/api/index';

import "./PagesStyle.css";
import NavTabs from "../NavigationBar/NavTabs.js";
import Header from "../NavigationBar/Header";

const AccountSettings = () => {
    const[message, setMessage] = useState(" ")
    const login_user = window.localStorage.getItem("profile");
    const user_data = JSON.parse(login_user);
    const dispatch = useDispatch();
    const navigate = useNavigate();     
    const [user, setUser] = useState({
        fullname: user_data.result.fullname,
        email: user_data.result.email,
        _id: user_data.result._id,
    })
    const updateduserData = useSelector((state) => state.UserReducer.errors);

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }
    const handleSave = () => {
        dispatch(UpdateUser(user));
    }
    const handlesendpassword = e => {
        e.preventDefault();
        setMessage("Email sent to your registered Email Address")
        dispatch(forgotpassword(user));
    };

    const handleDelete = async() => {
        try{
            await api.deleteAccount(user);
            localStorage.clear()
            navigate("/")
        }
        catch(error){

        }      
    }

    const google = () => {
        window.open("http://localhost:5000/auth/google", "_self");
    };

    const linkdin = () => {
        window.open("http://localhost:5000/auth/linkedin", "_self");
    };

    const facebook = () => {
        window.open("http://localhost:5000/auth/facebook", "_self");
    };
    return (
        < div style={{ backgroundColor: 'rgb(239, 242, 249)',paddingBottom:'50px'}}>
            <Header />
            <NavTabs />
            <div className="container">
                <h5 className='profile-heading'><b>Account Information</b></h5>
                <div className="profile-box">
                    <label>Full Name</label><br />
                    <input className="form-input"
                        type="text"
                        value={user.fullname}
                        name="fullname"
                        onChange={handleChange} />
                    <br />
                    <label>Email Address</label><br />
                    <input className="form-input"
                        type="email"
                        value={user.email}
                        name="email"
                        onChange={handleChange} />
                    <br />
                    {updateduserData && updateduserData.error_message}<br />
                    <button className="save-button" type="submit" onClick={handleSave}>Save</button>
                </div>
                <div>
                    <h5 className='profile-heading'><b>Social Media Link</b></h5>
                    <div className='profile-box'>
                        <div className='row '>
                            <div className='col-5'>
                                <p >{user.email ? user.email : "SignIn with Google"}</p>
                                <p>{null ? null : "SignIn with FaceBook"}</p>
                                <p>{null ? null : "SignIn with Linkdin"} </p>
                            </div>

                            <div className='col-7'>
                                <button className="get-connected-btn" onClick={google}>{user.email ? "Disconnect" : "Connected"}</button>
                                <button className="get-connected-btn" onClick={facebook}>{null ? "Disconnect" : "Connected"}</button>
                                <button className="get-connected-btn" onClick={linkdin}>{null ? "Disconnect" : "Connected"}</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div >
                    <h5 className='profile-heading'><b>Set Up Password</b></h5>
                    <div className="profile-box">
                        {message && <p>{message}</p>}
                        <button className="get-connected-btn" onClick={handlesendpassword}>Send Password Link</button>
                    </div>

                </div>
                <div className="profile-box mt-3">
                    <button type="button" className="get-connected-btn" data-toggle="modal" data-target="#exampleModalCenter">
                        Delete Account
                    </button>
                    <div className="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLongTitle">Are you sure you want to delete your account?</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    Once you click delete,
                                    your account and associated data will be permanently deleted and cannot be restored
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                                    <button type="button" onClick={handleDelete} data-dismiss="modal"className="get-connected-btn">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default AccountSettings