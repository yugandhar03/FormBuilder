import React, { useEffect, useState } from 'react';
import {UpdateUser} from '../../redux/actions/UserAction.js';
import {useDispatch, useSelector} from 'react-redux';
import "./PagesStyle.css";
import NavTabs from "../NavigationBar/NavTabs.js";
import Header from "../NavigationBar/Header";

const AccountSettings = () => {
    const login_user = window.localStorage.getItem("profile");
    const user_data = JSON.parse(login_user);
    const dispatch = useDispatch();
    const [user, setUser] = useState({
        fullname: user_data.result.fullname,
        email: user_data.result.email,
        _id : user_data.result._id,
    })
    const updateduserData = useSelector((state) => state.UserReducer.errors);
    console.log(updateduserData)

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }
    const handleSave = () => {
        dispatch(UpdateUser(user));
    }
    return (
        <>
            <Header />
            <NavTabs />
            <div className="container">
                <h2>Account Information</h2>
                <div>
                    <label>Full Name</label><br />
                    <input className="form-input"
                        type="text"
                        value={user.fullname}
                        name="fullname"
                        onChange = {handleChange} />
                    <br />
                    <label>Email Address</label><br />
                    <input className="form-input"
                        type="email"
                        value={user.email}
                        name="email"
                        onChange = {handleChange} />
                    <br />
                    {updateduserData && updateduserData.error_message}<br/>
                    <button className="save-button" type="submit" onClick={handleSave}>Save</button>
                </div>
                <div>
                    <h2>Social Media Link</h2>
                </div>
            </div>
        </>
    )
}

export default AccountSettings