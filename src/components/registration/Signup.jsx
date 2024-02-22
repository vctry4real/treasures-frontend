import { useState } from 'react';
import { motion } from 'framer-motion';
import DOMPurify from 'dompurify';
import { useAlertContext } from '../../providers/AlertProvider';
import { useRegisterContext } from '../../providers/RegisterProvider';

const Signup = () => {
  const { handleSubmit, registrationData, setRegistrationData } =
    useRegisterContext();
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const sanitizedInput = DOMPurify.sanitize(e.target.value);
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: sanitizedInput,
    }));
  };

  const handleSubmitFormData = async (e) => {
    e.preventDefault();
    setRegistrationData((prev) => ({ ...prev, ...formData }));
    handleSubmit(e, { ...registrationData, ...formData });
  };

  const handleTogglePassword = (e) => {
    e.preventDefault(); // Prevent form submission reload of page
    setShowPassword(!showPassword);
  };

  return (
    <motion.form
      key={''}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onSubmit={handleSubmitFormData}
      className="w-full max-w-sm "
    >
      <label className="block mb-2 text-sm text-gray-600">
        Full Name:
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
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
        {' '}
        {isLoading ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 animate-spin mr-2 inline-block align-middle"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
            />
          </svg>
        ) : null}
        Signup
      </button>
    </motion.form>
  );
};

export default Signup;
