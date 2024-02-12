import { useState } from 'react';
import { PublicApi } from '../api';
import { motion } from 'framer-motion';
import DOMPurify from 'dompurify';
import { useAlertContext } from '../providers/AlertProvider';
import { useNavigate } from 'react-router-dom';
import CardWrapper from '../components/CardWrapper';

const EmailForm = ({ setAuthType }) => {
  const { alert, showAlert } = useAlertContext();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  // const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const sanitizedInput = DOMPurify.sanitize(e.target.value);
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: sanitizedInput,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email } = formData;
    if (!email) {
      showAlert({ text: 'Please fill in registered email', type: 'danger' });
      return;
    }
    setAuthType(0);
    console.log('authTyep is zero!');

    // Temp stopping the email verification
    return;
    try {
      const { status, data } = await PublicApi.post('/auth/signin', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (status === 200) {
        console.log(data);
        showAlert({ text: 'User authenticated', type: 'success' });
        navigate('/Reset');
      }
    } catch (error) {
      console.log(error.response.data.msg);
      showAlert({ text: error.response.data.msg, type: 'danger' });
    }
  };

  // const AuthForm = ({ type }) => {
  //   return (
  //     <AnimatePresence>

  //       {type === 0 ? (
  //         <Email key="signup" {...{ setAuthType }} />
  //       ) : type === 1 ? (
  //         <ResetEmail key="reset" />
  //       ) : (
  //         <ResetEmail key="reset" />
  //       )}
  //       <div>
  //       <button onClick={() => {
  //         navigate('/resetemail')
  //         // setAuthType(type === 2)
  //         // setVisibility('hidden');
  //       }
  //       }
  //         className='text-xs text-blue-600' >
  //           Forgot your password?
  //       </button>
  //       </div>
  //       <span className="text-gray-600 text-sm">
  //         {type === 0 ? 'Already have an account? ' : "Don't have an account? "}

  //         <span
  //           className="text-blue-500 hover:underline cursor-pointer"
  //           onClick={() => {setAuthType(type === 0 ? 1 : 0)
  //         setVisibility('')}
  //       }
  //         >
  //           {type === 0 ? 'Sign-in ' : 'Register'}
  //         </span>
  //       </span>
  //     </AnimatePresence>
  //   );
  // };

  return (
    <motion.form
      key={'emailform'}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onSubmit={handleSubmit}
      className="block mb-2 text-sm text-gray-600"
    >
      <h1 className="mb-1 text-gray-700 text-xl font-bold tracking-wide p-8 text-center">
        Forgot your password
      </h1>
      <p className="pb-2">Enter your registered email address</p>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="email"
        >
          Email:
        </label>
        <input
          className="w-full border rounded-md py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          autoComplete="email"
          required
        />
      </div>

      <div className="text-center">
        <button
          type="submit"
          onClick={() => {
            'setScreen(type === 0 ? 1 : 0)';
          }}
          className="w-full mt-4 bg-primary hover:bg-lightGreen text-white p-2 rounded "
        >
          Recover password
        </button>
      </div>
    </motion.form>
  );
};

export default EmailForm;
