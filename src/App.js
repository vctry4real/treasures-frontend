
import { Route, Routes } from 'react-router-dom';
import Registration from './components/Registration';
import LandingPage from './pages/LandingPage';
import NavBar from './components/NavBar';
import Auth from './pages/Auth';
function App() {
  return (
    <>
      {/* <NavBar/> */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </>
  );
}

export default App;
