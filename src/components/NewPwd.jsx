import React from "react";
import { useState, useContext } from "react";
import TreasureLogo from "../assets/Treasure.svg";
import { ResetContext } from "../providers/resetProvider";

// import { FaGoogle } from "react-icons/fa";

const NewPwd = () => {
  // console.log("Prog starts");

  const [submitted, setSubmitted] = useState(false);
  const [password, setPassword] = useState("");
  const [dupPassword, setDupPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [pwdMatch, setPwdMatch] = useState(true);
  // const [pwdState, setPwdState] = useState(true);

  const pwdMatchToggle = () => {
    if (password && dupPassword && password !== dupPassword) {
      // if (password){
      setPwdMatch(false);
    } else if (password && dupPassword && password === dupPassword) {
      setPwdMatch(true);
    }
  };

  const handleTogglePassword = (e) => {
    e.preventDefault(); // Prevent form submission reload of page
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };
  return (
    <div className="bg-primary w-full h-screen flex items-center justify-center ">
      {/* <h1>Forgot Password</h1> */}
      <div className="w-full flex flex-col md:flex-row items-center justify-center lg:h-screen">
        <div className="w-full md:w-1/2 lg:w-1/3">
          <img
            src={TreasureLogo}
            alt="Logo"
            className="w-full h-auto md:h-[1024px] lg:h-[768px]"
          />
        </div>

        {!submitted ? (
          <div className="w-full md:w-1/2 h-screen lg:w-2/3 flex flex-col items-center justify-center mt-8 md:mt-0 border bg-white rounded-lg p-8 ">
            <h2 className="font-serif mb-1 text-gray-950 text-3xl font-bold tracking-wide">
              Create new password
            </h2>
            <form onSubmit={(e) => handleSubmit(e)}>
              <div className="mt-3 mb-1">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700">
                  Password <span className=" text-red ">*</span>{" "}
                </label>
                <div className="w-fit relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    id="pwd"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="bg-opacity-50 text-gray-950 mt-2 block border rounded-md border-gray-700 h-[48px] w-[450px] pl-[12px] pr-[35px] justify-between shadow-sm focus:border-gray-300 focus:ring focus:ring-gray-200"
                  />
                  {/* <button 
                                        onClick={handleTogglePassword} 
                                        className="absolute top-0 right-0 mt-2 mr-2 text-sm text-gray-500 cursor-pointer">
                                            {showPassword ? "Hide" : "Show"}
                                    </button> */}
                </div>

                <label
                  htmlFor="dupPassword"
                  className="block text-sm font-medium text-gray-700">
                  Re-enter password <span className=" text-red ">*</span>{" "}
                </label>
                <div className="w-fit relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="dupPassword"
                    id="dupPwd"
                    value={dupPassword}
                    // onChange={()=>{}}
                    onKeyDownCapture={(e) => {
                      // pwdMatchToggle();
                    }}
                    onChange={(e) => {
                      pwdMatchToggle();
                      setDupPassword(e.target.value);
                      console.log(password, dupPassword);
                    }}
                    className="bg-opacity-50 text-gray-950 mt-2 block border rounded-md border-gray-700 h-[48px] w-[450px] pl-[12px] pr-[35px] justify-between shadow-sm focus:border-gray-300 focus:ring focus:ring-gray-200"
                  />
                </div>
                <p>{!pwdMatch ? "Passwords do not match" : null} </p>
                <p className="text-xs text-gray-500 mt-1">
                  Password must be at least 8 characters
                </p>
              </div>

              <button
                type="submit"
                onClick={
                  "" // const {password, setPassword} = useContext(ResetContext)
                }
                className="w-full md:w-[450px] h-[48px] bg-primary text-white py-2 px-4 rounded-md hover:bg-lightGreen focus:outline-none focus:ring focus:ring-blue-200">
                Confirm
              </button>
            </form>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};
export default NewPwd;
