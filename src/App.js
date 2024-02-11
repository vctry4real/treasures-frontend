import { Route, Routes } from 'react-router-dom';
import OtpInput from './components/Otp';
import ResetPage from './pages/ResetPage';
import { React, useState } from 'react';
import ResetProvider from './providers/resetProvider';
import Registration from './components/Registration';
import LandingPage from './pages/LandingPage';
import NavBar from './components/NavBar';
import Auth from './pages/Auth';
import ChildProfile from './components/ChildProfile';
import ChildProfileDisplay from './components/ChildProfileDisplay';
import Reset from './pages/ResetEmail';
import JoinAs from './pages/JoinAs';
import UserReasons from './pages/UserReasons';

function App() {
  return (
    <>
      {/* <NavBar/> */}
      {/* I include the routhes here for the child profile creation form and the display here so you can test */}
      <ResetProvider>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/childprofile" element={<ChildProfile />} />
          <Route
            path="/childdisplayprofile"
            element={<ChildProfileDisplay />}
          />
          <Route path="/resetemail" element={<Reset />} />
          {/* remove after testing */}
          <Route path="/reasons" element={<UserReasons />} />
          <Route path="/joinas" element={<JoinAs />} />
          {/* <Route path="/newpwdform" element={< />} /> */}
        </Routes>
      </ResetProvider>
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
