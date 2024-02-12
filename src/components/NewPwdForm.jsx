import { useState } from 'react';
import { PublicApi } from '../api';
import { motion } from 'framer-motion';
import DOMPurify from 'dompurify';
import { useAlertContext } from '../providers/AlertProvider';
import { useNavigate } from 'react-router-dom';

import Alert from './Alert';

const NewPwdForm = () => {
  const { alert, showAlert } = useAlertContext();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    // email: '',
    password: '',
    passwordDup: '',
  });

  // const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = (e) => {
    e.preventDefault(); // Prevent form submission reload of page
    setShowPassword(!showPassword);
  };

  const handleChange = (e) => {
    const sanitizedInput = DOMPurify.sanitize(e.target.value);
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: sanitizedInput,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { password, passwordDup } = formData;
    if (!password) {
      showAlert({ text: 'Enter a valid password ', type: 'danger' });
      return;
    } else if (!passwordDup) {
      showAlert({ text: 'Enter the same password ', type: 'danger' });
      return;
    } else if (password === passwordDup) {
      showAlert({ text: 'Password change successful  ', type: 'success' });

      // Api call but for now skips to next page
      navigate('/auth');
    } else {
      return;
    }

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

  return (
    <motion.form
      key={'newpwdform'}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onSubmit={handleSubmit}
      className="block mb-2 text-sm text-gray-600 "
    >
      <div className="mb-4">
        <h1 className="mb-1 text-gray-700 text-xl font-bold tracking-wide p-8 text-center">
          Reset password
        </h1>
        <p className="pb-2">Enter your new password</p>
        <label className="block mb-2 text-sm text-gray-600">
          Password:
          <div className="w-full relative flex items-center mt-2 p-2 border border-gray-300 rounded focus:outline-none hover:border-blue-500">
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              value={formData.password}
              onChange={handleChange}
              autoComplete="current-password"
              className="w-full outline-none"
              required
            />
            <button
              onClick={handleTogglePassword}
              className=" text-sm text-gray-500 cursor-pointer"
            >
              {showPassword ? 'Hide' : 'Show'}
            </button>
          </div>
        </label>
      </div>

      <div className="mb-4">
        <label className="block mb-2 text-sm text-gray-600">
          Re-enter Password:
          <div className="w-full relative flex items-center mt-2 p-2 border border-gray-300 rounded focus:outline-none hover:border-blue-500">
            <input
              type={showPassword ? 'text' : 'password'}
              name="passwordDup"
              value={formData.passwordDup}
              onChange={handleChange}
              autoComplete="current-password"
              className="w-full outline-none"
              required
            />
            <button
              onClick={handleTogglePassword}
              className=" text-sm text-gray-500 cursor-pointer"
            >
              {showPassword ? 'Hide' : 'Show'}
            </button>
          </div>
        </label>
      </div>

      <div className="text-center">
        <button
          type="submit"
          onClick={() => {
            // setScreen(type === 0 ? 1 : 0)
          }}
          className="w-full mt-4 bg-primary hover:bg-lightGreen text-white p-2 rounded "
        >
          Continue
        </button>
      </div>
    </motion.form>
  );
};

export default NewPwdForm;
