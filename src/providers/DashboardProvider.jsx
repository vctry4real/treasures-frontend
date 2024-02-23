import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { useAlertContext } from './AlertProvider';
import { PrivateApi } from '../api';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/slice/userSlice';
import { useNavigate } from 'react-router-dom';
import useUser from '../hooks/useUser';
import useProfile from '../hooks/useProfile';

const DashboardContext = createContext({});

const DashboardProvider = ({ children }) => {
  const currentUser = useUser();
  const { fetchProfile } = useProfile();
  const { showAlert } = useAlertContext();
  const [currentProfile, setCurrentProfile] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  const fetchData = useCallback(async (currentUser) => {
    try {
      const profile = await fetchProfile(currentUser);

      setCurrentProfile(profile);
    } catch (error) {
      showAlert({ text: 'Error user fetching profile', type: 'danger' });
    }
  }, []);

  useEffect(() => {
    setLoading(true);
    if (currentUser) {
      fetchData(currentUser);
      setLoading(false);
    }
  }, [currentUser]);

  useEffect(() => {
    console.log(currentProfile);
  }, [currentProfile]);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  const dataToSend = { loading, currentUser, currentProfile, handleLogout };
  return (
    <DashboardContext.Provider value={dataToSend}>
      {children}
    </DashboardContext.Provider>
  );
};
export default DashboardProvider;

export const useDashboardContext = () => {
  const context = useContext(DashboardContext);
  if (context === undefined) {
    throw new Error('useAlertContext must be used within an AlertProvider');
  }
  return context;
};
