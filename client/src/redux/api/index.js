import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });


export const signIn = (formData) => API.post("/user/signin", formData);
export const signUp = (formData) => API.post("/user/signup", formData);
export const profileUpdate = (formData) => API.post("/user/profileUpdate", formData);
export const emailvalidate = (formData) => API.post("/user/emailvalidate", formData);
export const forgotpassword = (formData) => API.post("/user/forgotpassword", formData);
export const verifylink = (formData) => API.post("/user/verifylink", formData);
export const updatepassword = (formData) => API.post("/user/updatepassword", formData);

export const googleApi   =  `http://localhost:5000/auth/google`;
export const facebookApi =  `http://localhost:5000/auth/facebook`;
export const linkedinApi =  `http://localhost:5000/auth/linkedin`;