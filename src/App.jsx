import { Routes, Route } from 'react-router-dom';
import Registration from './components/Registration';
import LandingPage from './pages/LandingPage';
import Auth from './pages/Auth';
import useAlert from './hooks/useAlert';
import Alert from './components/Alert';

function App() {
  return (
    <Routes>
      <Route path="/auth" element={<Auth />}></Route>
      <Route path="/" element={<LandingPage />} />
      <Route path="/registration" element={<Registration />}></Route>
    </Routes>
  );
}

export default App;
