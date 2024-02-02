import { useState } from 'react';
import CardWrapper from '../components/CardWrapper';
import GoogleAuth from '../components/GoogleAuth';
import Signin from '../components/Signin';
import Signup from '../components/Signup';
import TreasureLogo from '../assets/Treasure.svg';
// import { useGoogleAuth } from "./provider/GoogleAuthProvider";
import { motion, AnimatePresence } from 'framer-motion';
import Alert from '../components/Alert';

import { useAlertContext } from '../providers/AlertProvider';

const Auth = () => {
  const { alert } = useAlertContext();
  // const { logout } = useGoogleAuth();
  const [authType, setAuthType] = useState(1);

  const AuthForm = ({ type }) => {
    return (
      <AnimatePresence>
        {type === 0 ? (
          <Signup key="signup" />
        ) : type === 1 ? (
          <Signin key="signin" />
        ) : (
          <></>
        )}
        <span className="text-gray-600 text-sm">
          {type === 0 ? 'Already have an account? ' : "Don't have an account? "}

          <span
            className="text-blue-500 hover:underline cursor-pointer"
            onClick={() => setAuthType(type === 0 ? 1 : 0)}
          >
            Register
          </span>
        </span>
      </AnimatePresence>
    );
  };
  return (
    <section className="bg-primary min-h-screen  md:grid md:grid-cols-2 gap-4">
      <div className="flex items-center justify-center ">
        <img
          src={TreasureLogo}
          alt="Logo"
          className="w-[350px] h-[350px] md:w-full md:h-full object-contain"
        />
      </div>
      <motion.div
        layout
        className=" flex flex-col items-center justify-center "
      >
        <CardWrapper className="p-6">
          <AuthForm type={authType} />
        </CardWrapper>

        <div className="w-full pt-8 flex justify-center gap-2">
          <GoogleAuth />
        </div>
        {/* <button type="button" onClick={() => logout()}>
      Logout
    </button> */}
      </motion.div>
      {alert.show && <Alert {...alert} />}
    </section>
  );
};

export default Auth;
