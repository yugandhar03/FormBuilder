import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });


export const signIn = (formData) => API.post("/user/signin", formData);
export const signUp = (formData) => API.post("/user/signup", formData);
export const forgotpassword = (formData) => API.post("/user/forgotpassword", formData);
export const verifylink = (formData) => API.post("/user/verifylink", formData);
export const  updatepassword = (formData) => API.post("/user/updatepassword", formData);
