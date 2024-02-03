import React, { createContext, useContext } from 'react';
import { googleLogout } from '@react-oauth/google';
import { PublicApi } from '../api';
import { useAlertContext } from './AlertProvider';
import { useNavigate } from 'react-router-dom';

const GoogleAuthContext = createContext({
  clientId: '',
  handleLoginSuccess: (_credentialResponse) => {},
  logout: () => {},
});

const GoogleAuthProvider = ({ children }) => {
  const { alert, showAlert } = useAlertContext();
  const navigate = useNavigate();
  const clientId = process.env.REACT_APP_CLIENT_ID;

  const handleLoginSuccess = async (credentialResponse) => {
    // Send the credential to the backend
    await sendCredentialToBackend(credentialResponse.credential);
  };

  const sendCredentialToBackend = async (credential) => {
    if (credential) {
      try {
        const { status, data } = await PublicApi.post(
          'http://localhost:5000/auth/google',
          {
            credential: credential,
          },
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );

        if (status === 200) {
          localStorage.setItem('accessToken', data.accessToken);
          localStorage.setItem('refreshToken', data.refreshToken);
          showAlert({ text: 'User authenticated', type: 'success' });
          navigate('/dashboard');
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
