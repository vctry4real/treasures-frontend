import { createContext, useContext, useEffect, useState } from 'react';
import { useAlertContext } from './AlertProvider';
import { PrivateApi } from '../api';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/slice/userSlice';

const DashboardContext = createContext({});

const DashboardProvider = ({ children }) => {
  const { showAlert } = useAlertContext();
  const currentUser = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [currentUserProfile, setCurrentUserProfile] = useState();

  const getCurrentUserProfile = async (email) => {
    try {
      const { status, data } = await PrivateApi.get('/profile/' + email);
      if (status === 200) {
        return data;
      }
    } catch (error) {
      throw error;
    }
  };
  const handleLogout = () => {
    dispatch(logout());
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getCurrentUserProfile(currentUser.email);
        setCurrentUserProfile(result);
      } catch (error) {
        showAlert({
          text: 'Error fetching profile, please try again in a while',
          type: 'danger',
        });
      }
    };
    fetchData();
  }, [currentUser]);

  const dataToSend = { currentUserProfile, handleLogout };
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
