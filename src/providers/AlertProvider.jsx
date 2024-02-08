import { createContext, useContext, useEffect } from 'react';
import useAlert from '../hooks/useAlert';

const AlertContext = createContext({});

const AlertProvider = ({ children }) => {
  const { alert, showAlert, hideAlert } = useAlert();
  useEffect(() => {
    if (alert.show) {
      setTimeout(() => {
        hideAlert();
      }, 3000);
    }
  }, [alert]);
  const dataToSend = { alert, showAlert, hideAlert };
  return (
    <AlertContext.Provider value={dataToSend}>{children}</AlertContext.Provider>
  );
};
export default AlertProvider;

export const useAlertContext = () => {
  return useContext(AlertContext);
};
