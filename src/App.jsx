import { Outlet, Route, Routes, useNavigate } from 'react-router-dom';
import { React, useEffect } from 'react';
import LandingPage from './pages/LandingPage';
import Auth from './pages/Auth';
import { useSelector } from 'react-redux';
import Dashboard from './pages/Dashboard';
// import UserReasons from './pages/UserReasons';
import RegisterUser from './pages/RegisterUser';

const ProtectedRoute = () => {
  const currentUser = useSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    console.log('currentUser ', currentUser);

    // Automatically navigate to the authentication page if no current user
    if (!currentUser || currentUser === null) {
      return navigate('/auth', { replace: true });
    }
  }, [currentUser, navigate]);

  return <Outlet />;
};

function App() {
  return (
    <>
      {/* <NavBar/> */}

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/" element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
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
