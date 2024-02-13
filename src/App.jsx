import { Outlet, Route, Routes, useNavigate } from 'react-router-dom';
import { React, useEffect } from 'react';
import LandingPage from './pages/LandingPage';
import Auth from './pages/temp/Auth';
import { useSelector } from 'react-redux';

import RegisterUser from './pages/RegisterUser';
import Dashboard from './components/dashboard/Dashboard';
import Booking from './pages/Booking';
import Profile from './pages/Profile';
import Premium from './pages/Premium';
import Help from './pages/Help';
import DashboardProvider from './providers/DashboardProvider';

const ProtectedRoute = () => {
  const currentUser = useSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    // Automatically navigate to the authentication page if no current user
    if (!currentUser || currentUser === null) {
      return navigate('/auth', { replace: true });
    }
  }, [currentUser, navigate]);

  return <Outlet />;
};

function App() {
  const currentUser = useSelector((state) => state.user);
  useEffect(() => {
    console.log('currentUser ', currentUser);
  }, []);
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/" element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="/dashboard/booking" element={<Booking />} />
            <Route path="/dashboard/profile" element={<Profile />} />
            <Route path="/dashboard/premium" element={<Premium />} />
            <Route path="/dashboard/help" element={<Help />} />
          </Route>
        </Route>

        <Route path="/register" element={<RegisterUser />} />
      </Routes>
    </>
  );
}

export default App;

// <ResetProvider>
//   <Routes>
//     <Route path="/" element={<LandingPage />} />
//     <Route path="/auth" element={<Auth />} />
//     <Route path="/childprofile" element={<ChildProfile />} />
//     <Route
//       path="/childdisplayprofile"
//       element={<ChildProfileDisplay />}
//     />
//     <Route path="/resetemail" element={<Reset />} />
//     {/* remove after testing */}
//     <Route path="/reasons" element={<UserReasons />} />
//     <Route path="/joinas" element={<JoinAs />} />
//     {/* <Route path="/newpwdform" element={< />} /> */}
//   </Routes>
// </ResetProvider>
