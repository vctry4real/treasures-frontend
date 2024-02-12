import { useState } from 'react';
import { PublicApi } from '../api';
import { motion } from 'framer-motion';
import DOMPurify from 'dompurify';
import { useAlertContext } from '../providers/AlertProvider';
import { useNavigate } from 'react-router-dom';

import CardWrapper from '../components/CardWrapper';
import GoogleAuth from '../components/GoogleAuth';
import Signin from '../components/Signin';
import OtpForm from '../components/OtpForm';
// import ResetEmail from '../components/ResetEmail';
import TreasureLogo from '../assets/Treasure.svg';
import { Navigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Alert from '../components/Alert';
// import Reset from './ResetPage';
import EmailForm from '../components/EmailForm';
import NewPwdForm from '../components/NewPwdForm';

const ResetEmail = () => {
  //   const Reset = () => {
  const { alert } = useAlertContext();
  const [authType, setAuthType] = useState(1);
  const navigate = useNavigate();

  const ResetForm = ({ type }) => {
    return (
      <AnimatePresence>
        {type === 0 ? (
          <OtpForm key="otpform" {...{ setAuthType }} />
        ) : type === 1 ? (
          <EmailForm key="emailform" {...{ setAuthType }} />
        ) : (
          <NewPwdForm key="newpwdform" />
        )}
      </AnimatePresence>
    );
  };

  return (
    // <section className="bg-primary min-h-screen md:grid md:grid-cols-2 gap-4">

    <section className="bg-primary h-screen md:grid md:grid-cols-2 lg:flex-row items-center justify-center">
      <div className=" w-full items-center justify-center  ">
        {/* <div className="w-full md:w-/2 h-screen lg:w-1/3"> */}
        <img
          src={TreasureLogo}
          alt="Logo"
          className="w-[350px] h-[350px] md:w-full md:h-full align-center object-contain "
        />
      </div>
      <div>
        {/* <div className= "w/-full md:w-1/2 h-screen lg:w-2/3 flex flex-col items-center justify-center mt-8 md:mt-0 border bg-white rounded-lg "> */}
        <motion.div
          layout
          // Original vs new layouts
          className=" "
          // className=" w-full md:w-1/2 h-screen lg:w-2/3 flex flex-col items-center justify-center "
        >
          <CardWrapper className="p-6 w-[400px]">
            <ResetForm type={authType} />
          </CardWrapper>
        </motion.div>
        {alert.show && <Alert {...alert} />}
      </div>
    </section>
  );

  //   const { alert, showAlert } = useAlertContext();
  //   const navigate = useNavigate();
  //   const [formData, setFormData] = useState({
  //     email: '',
  //     password: '',
  //   });

  //   // const [showPassword, setShowPassword] = useState(false);

  //   const handleChange = (e) => {
  //     const sanitizedInput = DOMPurify.sanitize(e.target.value);
  //     setFormData((prev) => ({
  //       ...prev,
  //       [e.target.name]: sanitizedInput,
  //     }));
  //   };

  //   const handleSubmit = async (e) => {
  //     e.preventDefault();
  //     const { email } = formData;
  //     if (!email) {
  //       showAlert({ text: 'Please fill in registered email', type: 'danger' });
  //       return;
  //     }
  //     navigate('/auth')

  //     // Temp stopping the email verification
  //     return
  //     try {
  //       const { status, data } = await PublicApi.post('/auth/signin', formData, {
  //         headers: {
  //           'Content-Type': 'application/json',
  //         },
  //       });
  //       if (status === 200) {
  //         console.log(data);
  //         showAlert({ text: 'User authenticated', type: 'success' });
  //         navigate('/Reset');
  //       }
  //     } catch (error) {
  //       console.log(error.response.data.msg);
  //       showAlert({ text: error.response.data.msg, type: 'danger' });
  //     }
  //   };

  //   return (
  //     <motion.form
  //       key={'resetemail'}
  //       initial={{ opacity: 0 }}
  //       animate={{ opacity: 1 }}
  //       exit={{ opacity: 0 }}
  //       onSubmit={handleSubmit}
  //       className="w-full max-w-sm "
  //     >
  //       <h1 className="mb-1 text-gray-700 text-xl font-bold tracking-wide p-8 text-center">Forgot your password</h1>
  //       <p className="pb-2">
  //               Enter your registered email address
  //             </p>
  //       <div className="mb-4">
  //         <label
  //           className="block text-gray-700 text-sm font-bold mb-2"
  //           htmlFor="email"
  //         >
  //           Email:
  //         </label>
  //         <input
  //           className="w-full border rounded-md py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
  //           type="email"
  //           name="email"
  //           value={formData.email}
  //           onChange={handleChange}
  //           autoComplete="email"
  //           required
  //         />
  //       </div>

  //       <div className="text-center">
  //         <button
  //           type="submit"
  //           className="w-full mt-4 bg-primary hover:bg-lightGreen text-white p-2 rounded "
  //         >
  //           Login
  //         </button>
  //       </div>
  //     </motion.form>
  //   );
};

export default ResetEmail;
