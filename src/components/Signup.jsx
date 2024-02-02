import { useState } from 'react';
import { PublicApi } from '../api';
import { motion } from 'framer-motion';
import DOMPurify from 'dompurify';

import { useAlertContext } from '../providers/AlertProvider';

const Signup = () => {
  const { showAlert } = useAlertContext();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);

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

    try {
      const { status } = await PublicApi.post('/auth/signup', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (status === 201) {
        showAlert({ text: 'User created', type: 'success' });
        console.log('User created');
      }
    } catch (error) {
      console.log(error);
      showAlert({ text: 'Server Error', type: 'danger' });
    }
  };
  return (
    <motion.form
      key={'signup'}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onSubmit={handleSubmit}
      className="w-full max-w-sm "
    >
      <label className="block mb-2 text-sm text-gray-600">
        Full Name:
        <input
          type="text"
          name="fullName"
          value={formData.firstName}
          onChange={handleChange}
          className="w-full mt-2 p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
        />
      </label>
      <label className="block mb-2 text-sm text-gray-600">
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          autoComplete="email"
          className="w-full mt-2 p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
        />
      </label>

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
          />
          <button
            onClick={handleTogglePassword}
            className=" text-sm text-gray-500 cursor-pointer"
          >
            {showPassword ? 'Hide' : 'Show'}
          </button>
        </div>
      </label>
      <div className="flex flex-row items-center py-5">
        <input
          id="rememberMe"
          name="rememberMe"
          type="checkbox"
          className="cursor-pointer rounded border-gray-300 shadow-sm focus:border-gray-300 focus:ring focus:ring-gray-200"
        />
        <p className="ml-2 block text-sm text-gray-500">
          By continuing , you agree to our{' '}
          <a href="/" className="text-black underline decoration-black">
            Terms of Service
          </a>{' '}
          and{' '}
          <a href="/" className="text-black underline decoration-black">
            Privacy Policy
          </a>
          .
        </p>
      </div>
      <button
        type="submit"
        className="w-full mt-4 bg-primary hover:bg-lightGreen text-white p-2 rounded hover:bg-blue-600"
      >
        Signup
      </button>
    </motion.form>
  );
};

export default Signup;
