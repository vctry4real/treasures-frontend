import { Route, Routes } from 'react-router-dom';
import OtpInput from './components/Otp';
import ResetPage from './pages/ResetPage';
import NewPwd from './components/NewPwd';
import UserReasons from './components/UserReasons';
import JoinAsPage from './components/JoinAs';
import { React, useState } from 'react';
import ResetProvider from './providers/resetProvider';
import Registration from './components/Registration';
import LandingPage from './pages/LandingPage';
import Auth from './pages/Auth.jsx';
import useAlert from './hooks/useAlert';
import Alert from './components/Alert';
import ResetEmail from './pages/ResetEmail';

function App() {
  return (
    <>
      {/* <ResetProvider> */}
      <Routes>
        {/* <ResetProvider> */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/Otp" element={<OtpInput />}></Route>
        <Route path="/NewPwd" element={<NewPwd />}></Route>
        <Route path="/Reasons" element={<UserReasons />}></Route>
        <Route path="/JoinAs" element={<JoinAsPage />}></Route>
        <Route path="/resetemail" element={<ResetEmail />}></Route>
        <Route path="/ResetPage" element={<ResetPage />}></Route>
        <Route path="/auth" element={<Auth />}></Route>
        <Route path="/registration" element={<Registration />}></Route>
        {/* </ResetProvider> */}
      </Routes>
      {/* </ResetProvider> */}
    </>
  );
}

export default App;

// import { Route, Routes } from 'react-router-dom';
// import Registration from './components/Registration';
// import LandingPage from './pages/LandingPage';
// import NavBar from './components/NavBar';
// import Auth from './pages/Auth';
// function App() {
//   return (
//     <>
//       {/* <NavBar/> */}
//       <Routes>
//         <Route path="/" element={<LandingPage />} />
//         <Route path="/auth" element={<Auth />} />
//       </Routes>
//     </>
//   );
// }

// export default App;
