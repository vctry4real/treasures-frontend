import {
  Outlet,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from 'react-router-dom';
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
import useUser from './hooks/useUser';

const ProtectedRoute = () => {
  const currentUser = useUser();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const normalizedPathname = location.pathname.replace(/\/$/, ''); // Remove trailing slash if present

    // Automatically navigate to the authentication page if no current user
    if (!currentUser || currentUser === null) {
      if (
        normalizedPathname !== '/register' &&
        normalizedPathname !== '/auth'
      ) {
        return navigate('/auth', { replace: true });
      }
    }
    // Check if we are in /register or /auth route
    if (normalizedPathname === '/register' || normalizedPathname === '/auth') {
      // Check if currentUser is not null
      if (currentUser !== null) {
        // Redirect to home page if currentUser is not null and we are in /register or /auth route
        navigate('/dashboard', { replace: true });
      }
    }
  }, [currentUser, location.pathname, navigate]);

  return <Outlet />;
};

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/" element={<ProtectedRoute />}>
          <Route path="/auth" element={<Auth />} />
          <Route path="/register" element={<RegisterUser />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="/dashboard" element={<DashboardDisplay />} />
            <Route path="/dashboard/booking" element={<Booking />} />
            <Route path="/dashboard/profile" element={<Profile />} />
            <Route path="/dashboard/premium" element={<Premium />} />
            <Route path="/dashboard/help" element={<Help />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
