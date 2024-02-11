import { createContext, useContext, useState } from "react";

const ResetContext = createContext({});

const ResetProvider = ({ children }) => {
  const [email, setEmail] = useState("");

  const [newPassword, setNewPassword] = useState("");

  const [userType, setUserType] = useState("");

  const [userReason, setUserReason] = useState("");

  const dataToSend = {
    email,
    newPassword,
    userType,
    userReason,
    setEmail,
    setNewPassword,
    setUserType,
    setUserReason,
  };

  return (
    <ResetContext.Provider value={dataToSend}>{children}</ResetContext.Provider>
  );
};

export default ResetProvider;

export const useResetContext = () => {
  const context = useContext(ResetContext);
  if (context === undefined) {
    throw new Error("useAlertContext must be used within an AlertProvider");
  }
  return context;
};
