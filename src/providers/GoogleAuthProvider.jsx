import React, { createContext, useContext } from 'react';
import { googleLogout } from '@react-oauth/google';
import { PublicApi } from '../api';
import { useAlertContext } from './AlertProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import { useRegisterContext } from './RegisterProvider';
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/slice/userSlice';

const GoogleAuthContext = createContext({
  clientId: '',
  handleLoginSuccess: (_credentialResponse) => {},
  logout: () => {},
});

const GoogleAuthProvider = ({ children }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const { alert, showAlert } = useAlertContext();

  const clientId = process.env.REACT_APP_CLIENT_ID;

  const handleLoginSuccess = async (credentialResponse, registrationData) => {
    // Send the credential to the backend
    await sendCredentialToBackend(
      credentialResponse.credential,
      registrationData
    );
  };

  const sendCredentialToBackend = async (credential, registrationData) => {
    if (credential) {
      try {
        const { status, data } = await PublicApi.post(
          'http://localhost:5000/auth/google',
          {
            credential: credential,
            ...registrationData,
          },
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );

        if (status === 200) {
          const { msg, ...userData } = data;
          dispatch(setUser(userData));
          showAlert({ text: 'User Authenticated', type: 'success' });
          const { from } = location.state || { from: '/dashboard' };
          navigate(from);
        }
      } catch (error) {
        console.error('Error sending credential to backend:', error);
      }
    }
  };

  const logout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    googleLogout();
  };

  const sharedData = {
    clientId,
    handleLoginSuccess,
    logout,
  };
  return (
    <GoogleAuthContext.Provider value={sharedData}>
      {children}
    </GoogleAuthContext.Provider>
  );
};

export default GoogleAuthProvider;

export const useGoogleAuth = () => {
  return useContext(GoogleAuthContext);
};
