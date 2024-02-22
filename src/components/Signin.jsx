import { useState } from 'react';
import { PublicApi } from '../api';
import { motion } from 'framer-motion';
import DOMPurify from 'dompurify';
import { useAlertContext } from '../providers/AlertProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import { setUser } from '../redux/slice/userSlice';
import { useDispatch } from 'react-redux';

const Signin = () => {
  const { alert, showAlert } = useAlertContext();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
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
    const { email, password } = formData;
    if (!email || !password) {
      showAlert({ text: 'Please fill in all fields.', type: 'danger' });

      return;
    }
    setIsLoading(true);
    try {
      const { status, data } = await PublicApi.post('/auth/signin', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (status === 200) {
        const { msg, ...userData } = data;

        dispatch(setUser(userData));

        showAlert({ text: 'User authenticated', type: 'success' });

        const { from } = location.state || { from: '/dashboard' };
        navigate(from);
      }
    } catch (error) {
      const errorText = error.response.data.msg;
      showAlert({ text: errorText, type: 'danger' });
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <motion.form
      key={'emailform'}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onSubmit={handleSubmit}
      className="w-full max-w-sm "
    >
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

      <div className="text-center">
        <button
          type="submit"
          className="w-full mt-4 bg-primary hover:bg-lightGreen text-white p-2 rounded "
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
          Login
        </button>
      </div>
    </motion.form>
  );
};

export default Signin;
