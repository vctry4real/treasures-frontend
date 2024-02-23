import { createContext, useContext, useEffect, useState } from 'react';
import { useAlertContext } from './AlertProvider';
import { PrivateApi } from '../api';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/slice/userSlice';
import { useNavigate } from 'react-router-dom';

const DashboardContext = createContext({});

const DashboardProvider = ({ children }) => {
  const { showAlert } = useAlertContext();
  const navigate = useNavigate();

  const currentUserRedux = useSelector((state) => state.user);
  const currentUserLocalStorage = JSON.parse(localStorage.getItem('user'));
  const currentUser = currentUserRedux || currentUserLocalStorage;

  const dispatch = useDispatch();

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
    navigate('/');
  };

  const dataToSend = { currentUser, handleLogout };
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
