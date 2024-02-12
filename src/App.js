
import { Route, Routes } from 'react-router-dom';
import Registration from './components/Registration';
import LandingPage from './pages/LandingPage';
import NavBar from './components/NavBar';
import Auth from './pages/Auth';
import ChildProfile from './components/ChildProfile';
import ChildProfileDisplay from './components/ChildProfileDisplay';
import Dashboard from './pages/Dashboard';
import DoctorCardDisplay from './components/(doctorCards)/DoctorCardDisplay';

function App() {
  return (
    <>
      {/* <NavBar/> */}
      {/* I include the routhes here for the child profile creation form and the display here so you can test */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth" element={<Auth />} />
        <Route path='/childprofile' element = {<ChildProfile/>}/>
        <Route path='/childdisplayprofile' element = {<ChildProfileDisplay/>}/>
        <Route path='/dashboard' element = {<Dashboard/>}/>
        <Route path='/doctor' element = {<DoctorCardDisplay/>}/>
        
      </Routes>
    </>
  );
}

export default App;
