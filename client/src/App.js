import React from "react"
import {BrowserRouter,Routes,Route} from 'react-router-dom';

import SignUp from "./Components/Auth/SignUp";
import Login from "./Components/Auth/Login";
import ForgotPassword from "./Components/Auth/ForgotPassword";

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path='/' element = {<Login/>}/>
      <Route path ='/signup' element={<SignUp/>}/>
      <Route path='/forgot' element = {<ForgotPassword/>}/>
    </Routes>
      {/* <SignUp /> */}
      {/* <Login/> */}
      {/* <ForgotPassword/> */}
    </BrowserRouter>
  );
}

export default App;
