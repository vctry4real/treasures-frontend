import { useState } from 'react';
import CardWrapper from '../../components/CardWrapper';
import GoogleAuth from '../../components/temp/GoogleAuth';
import Signin from '../../components/Signin';
import Signup from '../../components/registration/Signup';
import TreasureLogo from '../../assets/Treasure.svg';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Alert from '../../components/Alert';

import { useAlertContext } from '../../providers/AlertProvider';

const Auth = () => {
  const { alert } = useAlertContext();
  const [authType, setAuthType] = useState(1);
  const navigate = useNavigate();

  const AuthForm = ({ type }) => {
    return (
      <AnimatePresence>
        <Signin key="ss" />

        {/* forgot password */}
        <div key="s2ss">
          <button
            onClick={() => {
              navigate('/resetemail');
            }}
            className="text-xs text-blue-600"
          >
            Forgot your password?
          </button>
        </div>

        <span className="text-gray-600 text-sm">
          {type === 0 ? 'Already have an account? ' : "Don't have an account? "}

          <span
            className="text-blue-500 hover:underline cursor-pointer"
            onClick={() => setAuthType(type === 0 ? 1 : 0)}
          >
            {type === 0 ? 'Signin ' : 'Register'}
          </span>
        </span>
      </AnimatePresence>
    );
  };

  return (
    <section className="flex bg-primary min-h-screen  md:grid md:grid-cols-2 gap-4">
      <div className="hidden md:flex items-center justify-center ">
        <img
          src={TreasureLogo}
          alt="Logo"
          className="w-[350px] h-[350px] md:w-full md:h-full object-contain"
        />
      </div>
      <motion.div
        layout
        className="w-full bg-zinc-200 flex flex-col items-center justify-center "
      >
        <CardWrapper className="p-6 w-[400px]">
          <AuthForm type={authType} />
          <div className="flex items-center justify-center mt-4">
            {' '}
            -<p className="p-2">OR</p>-
          </div>
          <div className="w-full  flex justify-center gap-2">
            <GoogleAuth />
          </div>
        </CardWrapper>
      </motion.div>
      {alert.show && <Alert {...alert} />}
    </section>
  );
};

export default Auth;
