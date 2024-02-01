import React from "react"
import { useState } from "react";
import TreasureLogo from "../assets/Treasure.svg";
import { FaGoogle } from "react-icons/fa";


const Registration = () => {

    

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
            <div className="w-full flex flex-col md:flex-row items-center justify-center">
                <div className="w-full md:w-1/2 lg:w-1/3">
                    <img src={TreasureLogo} alt="Logo" className="w-full h-auto md:h-[1024px] lg:h-[768px]" />
                </div>
                
                {!submitted ?
                    <div className="w-full md:w-1/2 lg:w-2/3 flex flex-col items-center justify-center mt-8 md:mt-0 border bg-white rounded-lg p-8">
                        <h2 className="font-serif mb-1 text-gray-950 text-3xl font-bold tracking-wide">Sign Up</h2>
                        <p className="mb-5 font-serif text-gray-500">Enter the field below to get started</p>
                        
                        <form onSubmit={(e) => handleSubmit(e)}>
                            <div className="mt-3 ">
                                <label htmlFor="fullname" className="block text-sm font-medium text-gray-700">Full Name <span className=' text-red '>*</span> </label>
                                <input id="fullname" name="fullname" type="text" placeholder="Enter Full Name"
                                className="bg-opacity-50 text-gray-950 mt-2 block border rounded-md border-gray-700 h-[48px] w-[450px] pl-[12px] pr-[12px] justify-between shadow-sm focus:border-gray-300 focus:ring focus:ring-gray-200"/>
                            </div>

                            <div className="mt-3 ">
                                <label htmlFor="fullname" className="block text-sm font-medium text-gray-700">Email <span className=' text-red '>*</span> </label>
                                <input id="fullname" name="fullname" type="email" placeholder="Enter Email"
                                className="bg-opacity-50 text-gray-950 mt-2 block border rounded-md border-gray-700 h-[48px] w-[450px] pl-[12px] pr-[12px] justify-between shadow-sm focus:border-gray-300 focus:ring focus:ring-gray-200"/>
                            </div>
                            
                            <div className="mt-3 mb-1">
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password <span className=' text-red '>*</span> </label>
                                <div className="w-fit relative">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        name="password"
                                        id="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="bg-opacity-50 text-gray-950 mt-2 block border rounded-md border-gray-700 h-[48px] w-[450px] pl-[12px] pr-[35px] justify-between shadow-sm focus:border-gray-300 focus:ring focus:ring-gray-200"
                                    />
                                    <button 
                                        onClick={handleTogglePassword} 
                                        className="absolute top-0 right-0 mt-2 mr-2 text-sm text-gray-500 cursor-pointer">
                                            {showPassword ? "Hide" : "Show"}
                                    </button>
                                </div>
                                <p className="text-xs text-gray-500 mt-1">Password must be at least 8 characters</p>
                            </div>

                        
                            <div className="flex flex-row items-center py-5">
                                <input id="rememberMe" name="rememberMe" type="checkbox" className="rounded border-gray-300 shadow-sm focus:border-gray-300 focus:ring focus:ring-gray-200"/>
                                <p className="ml-2 block text-sm text-gray-500">By continuing , you agree to our <a href="/" className="text-black underline decoration-black">Terms of Service</a> and <a href="/" className="text-black underline decoration-black">Privacy Policy</a>.</p>
                            </div>
                            <button
                                type="submit"
                                className="w-full md:w-[450px] h-[48px] bg-primary text-white py-2 px-4 rounded-md hover:bg-lightGreen focus:outline-none focus:ring focus:ring-blue-200"
                                >
                                Sign Up
                            </button>
                        </form>

                        <div className="flex flex-row items-center justify-center py-4">
                            <div className="w-[205px] h-[2px] bg-black pr-2"></div>
                                <p className="p-2">OR</p>
                            <div className="w-[205px] h-[2px] bg-black pl-2"></div>
                        </div>
                        
                        <div className="pb-2">
                            <button className="flex items-center justify-center w-full md:w-[450px] h-[48px] bg-primary text-white py-2 px-4 rounded-md hover:bg-lightGreen focus:outline-none focus:ring focus:ring-blue-200">
                                <FaGoogle className="mr-2" />
                                Continue with Google
                            </button>
                        </div>
                        <p className="mr-1">Already have an account?<a href="/login" className="text-green-600"> Login.</a></p>
                    </div> 
                :
                    <div className="w-full md:w-1/2 lg:w-2/3 flex flex-col items-center justify-center mt-8 md:mt-0 border bg-white rounded-lg p-8">
                        <h2 className="font-serif mb-1 text-gray-950 text-3xl font-bold tracking-wide">Login Account</h2>
                        <p className="mb-5 font-serif text-gray-500">To get started on your health and happiness journey</p>
                    
                    <form onSubmit={(e) => handleSubmit(e)}>
                        
                        <div className="mt-3 ">
                            <label htmlFor="fullname" className="block text-sm font-medium text-gray-700">Email <span className=' text-red '>*</span> </label>
                            <input id="fullname" name="fullname" type="email" placeholder="Enter Email"
                            className="bg-opacity-50 text-gray-950 mt-2 block border rounded-md border-gray-700 h-[48px] w-[450px] pl-[12px] pr-[12px] justify-between shadow-sm focus:border-gray-300 focus:ring focus:ring-gray-200"/>
                        </div>
                        
                        <div className="mt-3 mb-1">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password <span className=' text-red '>*</span> </label>
                            <div className="w-fit relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="bg-opacity-50 text-gray-950 mt-2 block border rounded-md border-gray-700 h-[48px] w-[450px] pl-[12px] pr-[35px] justify-between shadow-sm focus:border-gray-300 focus:ring focus:ring-gray-200"
                                />
                                <button 
                                    onClick={handleTogglePassword} 
                                    className="absolute top-0 right-0 mt-2 mr-2 text-sm text-gray-500 cursor-pointer">
                                        {showPassword ? "Hide" : "Show"}
                                </button>
                            </div>
                            <p className="text-xs text-gray-500 mt-1">Password must be at least 8 characters</p>
                        </div>

                    
                        <div className="flex flex-row items-center h-[48px] w-[450px] py-5">
                            <div>
                                <input id="rememberMe" name="rememberMe" type="checkbox" className="rounded border-gray-300 shadow-sm focus:border-gray-300 focus:ring focus:ring-gray-200"/>
                                <span>Remember me</span>
                            </div>
                            <p className="ml-auto block text-sm text-gray-500"> <a href="/" className="text-black underline decoration-black">Forgot password ?</a> </p>
                        </div>
                        <button
                            type="submit"
                            className="w-full md:w-[450px] h-[48px] bg-primary text-white py-2 px-4 rounded-md hover:bg-lightGreen focus:outline-none focus:ring focus:ring-blue-200"
                            >
                            Login
                        </button>
                    </form>

                    <div className="flex flex-row items-center justify-center py-4">
                        <div className="w-[205px] h-[2px] bg-black pr-2"></div>
                            <p className="p-2">OR</p>
                        <div className="w-[205px] h-[2px] bg-black pl-2"></div>
                    </div>
                    
                    <div className="pb-2">
                        <button className="flex items-center justify-center w-full md:w-[450px] h-[48px] bg-primary text-white py-2 px-4 rounded-md hover:bg-lightGreen focus:outline-none focus:ring focus:ring-blue-200">
                            <FaGoogle className="mr-2" />
                            Continue with Google
                        </button>
                    </div>
                    <p className="mr-1">Don't have an account?<a href="/" className="text-green-600"> Sign Up</a></p>
                </div>
                }
            </div>

        </div>
    )
}
export default Registration;