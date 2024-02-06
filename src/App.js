import { Route, Routes } from 'react-router-dom';
import Registration from './components/Registration';
import LandingPage from './pages/LandingPage';
import NavBar from './components/NavBar';
function App() {
  return (
    <>
      {/* <NavBar/> */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
    </>
  );
}

export default App;
