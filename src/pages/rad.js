import React from "react"
import { useState } from "react";
import TreasureLogo from "../assets/Treasure.svg";
import OtpInput  from "../components/Otp";
// import { FaGoogle } from "react-icons/fa";


const ResetPage = () => {

    

    const [submitted, setSubmitted] = useState(false)
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    
    const handleTogglePassword = (e) => {
        e.preventDefault();  // Prevent form submission reload of page
        setShowPassword(!showPassword);
    };
    
    const handleSubmit = (e) => {
        e.preventDefault()
        setSubmitted(true)
    }
    return (
        <div className="bg-primary w-full h-screen flex items-center justify-center">
            <p className="ml-auto block text-sm text-gray-500"> <a href="/" className="text-black underline decoration-black">Forgot password</a> </p>

            <div className="w-full flex flex-col md:flex-row items-center justify-center">
                <div className="w-full md:w-1/2 lg:w-1/3">
                    <img src={TreasureLogo} alt="Logo" className="w-full h-auto md:h-[1024px] lg:h-[768px]" />
                </div>
                
                {!submitted ?
                    <div className="w-full md:w-1/2 lg:w-2/3 flex flex-col items-center justify-center mt-8 md:mt-0 border bg-white rounded-lg p-8">
                        <h2 className="font-serif mb-1 text-gray-950 text-3xl font-bold tracking-wide">Reset Account Password</h2>
                        <p className="mb-5 font-serif text-gray-500">Enter the email address associated with your account</p>
                                                
                        <form onSubmit={(e) => handleSubmit(e)}>

                            <div className="">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email <span style={{color: "red"}}>*</span> </label>
                                <input id="userEmail" name="userId" type="email" placeholder="Email"
                                className="bg-opacity-50 text-gray-950 mt-2 block border rounded-md border-gray-700 h-[48px] w-[450px] pl-[12px] pr-[12px] justify-between shadow-sm focus:border-gray-300 focus:ring focus:ring-gray-200"/>
                            </div>
                            
                            
                            <button
                                type="submit"
                                className="w-full md:w-[450px] h-[48px] bg-primary text-white py-2 px-4 rounded-md hover:bg-lightGreen focus:outline-none focus:ring focus:ring-blue-200"
                                >
                                <a href="../components/Otp" className="text-green-600"> Login.</a>
                            </button>
                        </form>
                    </div> 
                : <div></div>
                    
                }
            </div>

        </div>
    )
}
export default ResetPage;