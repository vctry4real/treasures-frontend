import { Outlet, Route, Routes, useNavigate } from 'react-router-dom';
import { React, useEffect } from 'react';
import LandingPage from './pages/LandingPage';
import Auth from './pages/Auth';
import { useSelector } from 'react-redux';

import RegisterUser from './pages/RegisterUser';
import Booking from './pages/Booking';
import Profile from './pages/Profile';
import Premium from './pages/Premium';
import Help from './pages/Help';
import Dashboard from './pages/Dashboard';
import DashboardDisplay from './components/dashboard/DashboardDisplay';

const ProtectedRoute = () => {
  const currentUserRedux = useSelector((state) => state.user);
  const currentUserLocalStorage = JSON.parse(localStorage.getItem('user'));

  const navigate = useNavigate();

  useEffect(() => {
    const currentUser = currentUserRedux || currentUserLocalStorage;

    console.log('currentUser ', currentUser);

    // Automatically navigate to the authentication page if no current user
    if (!currentUser || currentUser === null) {
      return navigate('/auth', { replace: true });
    }
  }, [currentUserRedux, currentUserLocalStorage, navigate]);

  return <Outlet />;
};

function App() {
  const currentUser = useSelector((state) => state.user);
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/" element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="/dashboard/display" element={<DashboardDisplay />} />
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
