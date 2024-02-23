import React, { createContext, useContext, useState } from 'react';
import { PrivateApi, PublicApi } from '../api';
import { useAlertContext } from './AlertProvider';
import { useLocation, useNavigate } from 'react-router-dom';
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
  const [loading, setLoading] = useState(false);
  const { alert, showAlert } = useAlertContext();

  const clientId = process.env.REACT_APP_CLIENT_ID;

  const handleLoginSuccess = async (credentialResponse, registrationData) => {
    // Send the credential to the backend
    setLoading(true);
    await sendCredentialToBackend(
      credentialResponse.credential,
      registrationData
    );
    setLoading(false);
  };

  const sendCredentialToBackend = async (credential, registrationData) => {
    if (credential) {
      try {
        const { status, data } = await PublicApi.post(
          '/auth/google',
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

        if (data) {
          const { msg, ...userData } = data;

          dispatch(setUser(userData));
          console.log(userData);
          showAlert({ text: 'User Authenticated', type: 'success' });
          const { from } = location.state || { from: '/dashboard' };
          navigate(from);
        }
      } catch (error) {
        console.log(error);
        console.error('Error sending credential to backend:', error);
      }
    }
  };

  const sharedData = {
    clientId,
    handleLoginSuccess,
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
