
import React, { useState } from "react"; 
import validator from 'validator'
  
const Validate = (value) => { 
  
    const [errorMessage, setErrorMessage] = useState('') 
  
    const validate = (value) => { 
  
        if (validator.isStrongPassword(value, { 
            minLength: 8, minLowercase: 1, 
            minUppercase: 1, minNumbers: 1, minSymbols: 1 
        })) { 
            setErrorMessage('Is Strong Password') 
        } else { 
            setErrorMessage('Is Not Strong Password') 
        } 
    } 
  
    return ( 
        <div className="ml= 2"> 
            <pre> 
                <span>Enter Password: </span><input type="text"
                    onChange={(e) => validate(e.target.value)}></input> <br /> 
                {errorMessage === '' ? null : 
                    <span style={{ 
                        fontWeight: 'bold', 
                        color: 'red', 
                    }}>{errorMessage}</span>} 
            </pre> 
        </div> 
    ); 
} 
  
export default Validate