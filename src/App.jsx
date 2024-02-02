import { Routes, BrowserRouter as Router, Route } from 'react-router-dom';
import Registration from './components/Registration';
import LandingPage from './pages/LandingPage';
import Auth from './pages/Auth';
import useAlert from './hooks/useAlert';
import Alert from './components/Alert';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/auth" element={<Auth />}></Route>
        <Route path="/" element={<LandingPage />} />
        <Route path="/registration" element={<Registration />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
