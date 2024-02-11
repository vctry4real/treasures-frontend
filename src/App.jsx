import { Route, Routes } from 'react-router-dom';
import OtpInput from './components/Otp.jsx';
import ResetEmail from './pages/ResetEmail.jsx';
import NewPwd from './components/NewPwd.jsx';
import UserReasons from './pages/UserReasons.jsx';
import JoinAsPage from "./components/JoinAsPage.jsx";
import { React, useState } from 'react';
import ResetProvider from './providers/resetProvider.jsx';
import Registration from './components/Registration.js';
import LandingPage from './pages/LandingPage.js';
import Auth from './pages/Auth.jsx';


function App() {
  return (
    <>
      {/* <ResetProvider> */}
      <Routes> 
        {/* <ResetProvider> */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/otp" element={<OtpInput />}></Route>
        <Route path="/newpwd" element={<NewPwd />}></Route>
        <Route path="/reasons" element={<UserReasons />}></Route>
        <Route path="/joinas" element={<JoinAsPage />}></Route>
        <Route path="/resetemail" element={<ResetEmail />}></Route>
        <Route path="/auth" element={<Auth />}></Route>
        <Route path="/" element={<LandingPage />} />
        <Route path="/registration" element={<Registration />}></Route>
        {/* </ResetProvider> */}
      </Routes>
      {/* </ResetProvider> */}
    </>
  );
}

export default App;
