import { Route, Routes } from "react-router-dom";
import OtpInput from "./components/Otp.jsx";
import ResetPage from "./pages/ResetPage.jsx";
import NewPwd from "./components/NewPwd.jsx";
import UserReasons from "./components/UserReasons.jsx";
import JoinAsPage from "./components/JoinAs.jsx";
import { React, useState } from "react";
import ResetProvider from "./providers/resetProvider.jsx";

function App() {
  return (
    <>
      <ResetProvider>
        <Routes>
          {/* <ResetProvider> */}
          <Route path="/S" element={<UserReasons />} />
          <Route path="/" element={<OtpInput />}></Route>
          <Route path="/NewPwd" element={<NewPwd />}></Route>
          <Route path="/Reasons" element={<UserReasons />}></Route>
          <Route path="/JoinAs" element={<JoinAsPage />}></Route>
          <Route path="/ResetPage" element={<ResetPage />}></Route>
          {/* </ResetProvider> */}
        </Routes>
      </ResetProvider>
    </>
  );
}

export default App;
