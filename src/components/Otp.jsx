import TreasureLogo from "../assets/Treasure.svg";
import { useState, useEffect, useRef, React } from "react";
import { useNavigate } from 'react-router-dom';

const OtpInput = ({length=4, onOtpSubmit = () =>{} }) => {

    const [otp, setOtp] = useState(new Array(length).fill(""))
    const inputRefs = useRef([]);
   const [isOtp, setIsOtp] = useState(false) 
    const navigate = useNavigate();

    useEffect(()=>{
        if(inputRefs.current[0]) {
            inputRefs.current[0].focus();
        }
    },[])

   const checkPwd= ()=> {
        if(otp){
            console.log("Otp is initialized")
            if((!otp.includes('')) && (otp.reduce((a,b)=> a+b) === '1111')) {
                console.log(otp.reduce((a,b)=> a+b))
                setTimeout(() => {
                    navigate('/NewPwd')}, 2000
                )
                return
            }
        
        }
        return
    } 

    const handleChange = (index, e) =>{
        const value = e.target.value;
        // || value.lenght ==1
        if (isNaN(value) ) return;
        
        const newOtp = [...otp];
        // allow only one input
        newOtp[index] = value.substring(value.length - 1);
        setOtp(newOtp)
        console.log(newOtp, otp);

        //submit trigger
        const combinedOtp =newOtp.join(""); 
        if(combinedOtp.length === length) {
            onOtpSubmit(combinedOtp);
        }

        //Move to the next input field if th current field is filled
        if (value && index < length - 1 && inputRefs.current[index + 1]) {
            inputRefs.current[index + 1].focus(); 
        };
    }
    const handleClick = (index) => {
        inputRefs.current[index].setSelectionRange(1,1)

        //optional validation or input feature : it selects the empty input box yet to be filled
        if(index > 0 && !otp[index - 1]){
            inputRefs.current[otp.indexOf("")].focus();
        }

        if(index > 0 &&  !otp[index + 1]){
            inputRefs.current[otp.indexOf("")].focus();
        }
    };

    //Moving focus to the previous input field, making the backspace key work AKA delete previous inputs
    const handleKeyDown = (index, e) =>{
        if (e.key==="Backspace" && !otp[index]&& index> 0 && inputRefs.current[index - 1]){
            inputRefs.current[index-1].focus();
        }
    }

    return (
        <div>
        <div className="bg-primary w-full h-screen flex items-center justify-center">
            {/* <p className="ml-auto block text-sm text-gray-500"> <a href="/" className="text-black underline decoration-black">Forgot password</a> </p> */}

            <div className="w-full flex flex-col md:flex-row items-center justify-center">
                <div className="w-full md:w-1/2 lg:w-1/3">
                    <img src={TreasureLogo} alt="Logo" className="w-full h-auto md:h-[1024px] lg:h-[768px]" />
                </div>
                <div className="w-full md:w-1/2 lg:w-2/3 flex flex-col items-center justify-center mt-8 md:mt-0 border bg-white rounded-lg p-8">
                        <h2 className="font-serif mb-1 text-gray-950 text-3xl font-bold tracking-wide"></h2>
                
                {isOtp   ?
                    <div className="w-full md:w-1/2 lg:w-2/3 flex flex-col items-center justify-center mt-8 md:mt-0 border bg-white rounded-lg p-8">
                        <h2 className="font-serif mb-1 text-white text-3xl font-bold tracking-wide">You have entered the correct OTP</h2>
                    </div> 
                : <div>
                    <h2 className="mb-5 font-serif text-gray-500">
                        Enter the OTP sent to your email</h2>
                </div>
                    
                }

                <div className='text-gray-900 w-[450px] justify-around'>
            {
                otp.map((value, index) => {
                   return (
                        <input
                            key={index}
                            type='text'
                            ref={(input) =>(inputRefs.current[index] = input)}
                            value={value}
                            onChange={(e) => handleChange(index, e)}
                            onClick={(e) => handleClick(index, e)}
                            onKeyDown={(e) => handleKeyDown(index, e)}
                            className='w-[40px] h-[40px] m-[5px] border text-center text-xl m-2 border h-10 w-10 text-center form-control rounded'
                        />
                   )
                })
            }
        </div>

                <div>
                    <p>Didn't receive any code? <span className="text-red-700">Resend</span></p>
                </div>
            </div>
            

        </div>
        <button 
                onClick={checkPwd()}
                className="w-full md:w-[450px] h-[48px] bg-primary text-white py-2 px-4 rounded-md hover:bg-lightGreen focus:outline-none focus:ring focus:ring-blue-200"
                                
            >
                Continue
            </button>
        </div>
        
        </div>
    )
}

export default OtpInput;