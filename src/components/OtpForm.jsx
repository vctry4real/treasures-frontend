import { PublicApi } from '../api';
import { motion } from 'framer-motion';
import DOMPurify from 'dompurify';
import { useAlertContext } from '../providers/AlertProvider';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect, useRef, React } from "react";
// import StartTimer from './timer';


const OtpForm = ({ setAuthType}) => {
  const length= 4;
  const { alert, showAlert } = useAlertContext();
  const [otp, setOtp] = useState(new Array(length).fill(""))
  const inputRefs = useRef([]);
  const [otpState, setOtpState] =useState('')
  const [isOtp, setIsOtp] = useState(false) ;
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

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
                // setAuthType(3);
                // navigate('/newpwdform');
                // setTimeout(() => {
                //     navigate('/newpwdform')}, 2000
                // )
                setAuthType(3);
                
                // No network display Alert reonnect or go to dashboard
                // Display timer and loding action if network and data api call started
                // Once api call finished dispaly green formating and successful message without time and loading
                // If failed display red formatting and try again

            }
        
        }
        return
    }

  // const startTimer=() => {
  // const timeLimitInMinutes = 3;
  // var timeLimitInSeconds = timeLimitInMinutes * 60;
  // var timerElement = document.getElementById('timer');

  // timeLimitInSeconds--;
  // var minutes = Math.floor(timeLimitInSeconds / 60);
  // var seconds = timeLimitInSeconds % 60;
  
  // if (timeLimitInSeconds < 0) {
  //   timerElement.textContent = '00:00';
  //   clearInterval(timerInterval);
  //   return;
  // }

  // if (minutes < 10) {
  //   minutes = '0' + minutes;
  // }
  // if (seconds < 10) {
  //   seconds = '0' + seconds;
  // }

  // timerElement.textContent = minutes + ':' + seconds;

  // return <div>
  //   <p>Time left = <span id="timer">{timeLimitInMinutes}:00</span></p>
  // </div>
// }

// var timerInterval = setInterval(startTimer, 1000);

      const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formData;
    if (!email || !password) {
      showAlert({ text: 'Please fill in all fields.', type: 'danger' });

      return;
    }
    try {
      const { status, data } = await PublicApi.post('/auth/signin', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (status === 200) {
        console.log(data);
        showAlert({ text: 'User authenticated', type: 'success' });
        navigate('/dashboard');
      }
    } catch (error) {
      console.log(error.response.data.msg);
      showAlert({ text: error.response.data.msg, type: 'danger' });
    }
  };

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
          // Originally should b onOtpSbmit with api entry to OtpForm on line 10
            checkPwd();
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
    <motion.form
      key={'otpform'}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onSubmit={handleSubmit}
      className="w-full max-w-sm "
    >
        <div className='items-center'>
          {/* <StartTimer></StartTimer> */}
            {/* <p className="ml-auto block text-sm text-gray-500"> <a href="/" className="text-black underline decoration-black">Forgot password</a> </p> */}

            <div className="">
                <div className="">
                        <h2 className="font-serif mb-1 text-gray-950 text-3xl font-bold tracking-wide"></h2>
                
                {isOtp   ?
                    <div className="">
                        <h2 className="font-serif mb-1 text-white text-3xl font-bold tracking-wide">You have entered the correct OTP</h2>
                    </div> 
                : <div>
                    <h2 className="mb-5 font-serif text-gray-500">
                        Enter the 4 digit code we sent to your email to verify your email address.</h2>
                </div>
                    
                }

                <div className='text-gray-900 w-[450px] justify-around align-center'>
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
                  
                    <p>Didn't receive any code? <span className="text-red-700">
                      <button
                        onClick={"API call and reset timer"}
                        >Resend</button>
                      </span></p>
                </div>
                {/* setInterval(startTimer, 1000); */}
            </div>
            

        </div>
        <button 
                onClick={checkPwd()}
                className="w-full mt-4 bg-primary hover:bg-lightGreen text-white p-2 rounded "
                                
            >
                Continue
            </button>
        </div>
        
      


      {/* <h1 className="mb-1 text-gray-700 text-xl font-bold tracking-wide p-8 text-center">Forgot your password</h1>
      <p className="pb-2">
              Enter your registered email address
            </p>
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
          className="w-full mt-4 bg-primary hover:bg-lightGreen text-white p-2 rounded "
        >
          Login
        </button>
      </div> */}
    </motion.form>
  );

// const [showPassword, setShowPassword] = useState(false);

  // const handleChange = (e) => {
  //   const sanitizedInput = DOMPurify.sanitize(e.target.value);
  //   setFormData((prev) => ({
  //     ...prev,
  //     [e.target.name]: sanitizedInput,
  //   }));
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const { email } = formData;
  //   if (!email) {
  //     showAlert({ text: 'Please fill in registered email', type: 'danger' });
  //     return;
  //   }

  //   // Temp stopping the email verification 
  //   return
  //   try {
  //     const { status, data } = await PublicApi.post('/auth/signin', formData, {
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //     });
  //     if (status === 200) {
  //       console.log(data);
  //       showAlert({ text: 'User authenticated', type: 'success' });
  //       navigate('/Reset');
  //     }
  //   } catch (error) {
  //     console.log(error.response.data.msg);
  //     showAlert({ text: error.response.data.msg, type: 'danger' });
  //   }
  // };

  

};

export default OtpForm;
