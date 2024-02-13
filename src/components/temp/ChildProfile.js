import React from 'react'
import { useState, useRef, useContext } from 'react'

const ChildProfile = () => {

    //declaring useRefs
    const nameInputRef =useRef();
    const dateOfBirthInputRef=useRef();
    const weightInputRef =useRef();
    const heightInputRef =useRef();
    const bloodGroupInputRef =useRef();
    const genotypeInputRef =useRef();
    const allergiesInputRef = useRef();
    const disabilitiesInputRef = useRef();
    const profilepicInputRef = useRef();
    const birthcertificateInputRef = useRef();
    const medicalDocumentInputRef = useRef();
    const guardianIDInputRef = useRef();

    //submit handler
    const submitHandler = (event) =>{
        const enteredName = nameInputRef.current.value;
        const enteredDateOfBirth = dateOfBirthInputRef.current.value;
        const enteredWeight = weightInputRef.current.value;
        const enteredHeight = heightInputRef.current.value;
        const enteredBloodGroup = bloodGroupInputRef.current.value;
        const enteredGenotype = genotypeInputRef.current.value;
        const enteredAllergy = allergiesInputRef.current.value;
        const enteredDisabilities = disabilitiesInputRef.current.value;
        const enteredBirthCertificate = birthcertificateInputRef.current.value;
        const enteredProfilePic = profilepicInputRef.current.value;
        const enteredMedicalDocument = medicalDocumentInputRef.current.value;
        const enterdGurdianInputRef = guardianIDInputRef.current.value;

        const ChildProfileData = {
            name : enteredName,
            dob: enteredDateOfBirth,
            weight: enteredWeight,
            height: enteredHeight,
            bloodgroup: enteredBloodGroup,
            genotype: enteredGenotype,
            allergies: enteredAllergy,
            disabilities: enteredDisabilities,
            profilepic: enteredProfilePic,
            birthcertificate: enteredBirthCertificate,
            medicaldocument: enteredMedicalDocument,
            guardianid: enterdGurdianInputRef

        };
        event.preventDefault();

        
            // Replace the with the right backend endpoint
            fetch('/your-backend-endpoint', {
                method: 'POST',
                body: ChildProfileData // Set form data as the request body
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json(); // Assuming backend returns JSON data
            })
            .then(data => {
                // Handle response from the backend
                console.log('Response from backend:', data);
            })
            .catch(error => {
                // Handle errors
                console.error('Error sending form data:', error);
            });
        }
        
     
    return (
    <section class="md:w-full ">
        <div class=" w-[412px] bg-slate-500 h-auto p-8  overflow-hidden md:w-1/2 flex flex-col justify-center">
            <div class=" ">Logo</div>
            <p class=" text-center text-2xl font-bold mb-5">Child Profile Creation</p>

            {/* Form for the child profile */}

            <form action=" "onSubmit={submitHandler} method='post' className="space-y-8">
                {/* Name of the child */}
                <div  class=" flex flex-col gap-3">
                    <label for="email" class=" ">Name</label> 
                    <input type="email" id="text" class=" bg-slate-200 p-3" placeholder="Enter full Name" required  ref={nameInputRef}/>
                </div>
                <div className='flex flex-col space-x-1'>
                    <label for="subject" class=" ">Date of birth</label>
                    <input type="date" id="dob" class="border w-1/3 " placeholder="Let us know how we can help you" required ref={dateOfBirthInputRef}/>
                </div>

                {/* BMI Info */}
                <div className='flex flex-row gap-4'>
                    <div>
                        <label for="weight" class=" ">Weight</label>
                        <input type="text" id="weight" class="w-full border rounded-lg bg-slate-200 p-3 " placeholder="Let us know how we can help you" required ref={weightInputRef}/>
                    </div>
                    <div>
                        <label for="height" class=" ">Height</label>
                        <input type="text" id="height" class="w-full border rounded-lg bg-slate-200 p-3 " placeholder="Let us know how we can help you" required ref={heightInputRef}/>
                    </div>
                </div>

                {/* Bio data of the child */}
                <div className='flex flex-row gap-4'>
                    <div>
                        <label for="bloodgroup" class=" ">Blood Group</label>
                        <input type="text" id="bloodgroup" class="w-full border rounded-lg bg-slate-200 p-3 " placeholder="Let us know how we can help you" required ref={bloodGroupInputRef}/>
                    </div>
                    <div>
                        <label for="genotype" class=" ">Genotype</label>
                        <input type="text" id="genotype" class=" w-full border rounded-lg bg-slate-200 p-3  " placeholder="Let us know how we can help you" required ref={genotypeInputRef}/>
                    </div>
                </div>

                {/* Allergies of the child */}
                <div class="sm:col-span-2">
                    <label for="allergies" class=" ">Allergies (Optional)</label>
                    <textarea id="allergies" rows="6" class="w-full bg-slate-300 border rounded-lg p-3" placeholder="Allergic to nuts..." ref={allergiesInputRef}></textarea>
                </div>

                {/* Disabilities of the child */}
                <div class="sm:col-span-2">
                    <label for="disabilities" class=" ">Disabilities (Optional)</label>
                    <textarea id="disabilities" rows="6" class="w-full bg-slate-300 border rounded-lg p-3 " placeholder="Allergic to nuts..." ref={disabilitiesInputRef}></textarea>
                </div>

                {/* upload documents */}
                <div className='flex flex-col gap-4'>
                    <div>
                        <label for="profilepic" class=" ">Upload picture (Optional)</label>
                        <input type="file" id="profilepic" class="w-full border rounded-lg bg-slate-200 p-3 " placeholder="Jpeg, png, jpg.." required ref={profilepicInputRef}/>
                    </div>
                    <div>
                        <label for="birthcertificate" class=" ">Upload Birth Certificate</label>
                        <input type="file" id="birthcertificate" class=" w-full border rounded-lg bg-slate-200 p-3  " placeholder="Jpeg, document, pdf..." required ref={birthcertificateInputRef}/>
                    </div>
                    <div>
                        <label for="guardianID" class=" ">Upload Parent/ Guardian ID </label>
                        <input type="file" id="guardianID" class=" w-full border rounded-lg bg-slate-200 p-3  " placeholder="int passport / National Id" required ref={guardianIDInputRef}/>
                    </div>
                    <div>
                        <label for="medicaldocument" class=" ">Upload Medical Document</label>
                        <input type="file" id="medicaldocument" class=" w-full border rounded-lg bg-slate-200 p-3  " placeholder="document" required ref={medicalDocumentInputRef}/>
                    </div>
                </div>

                {/* Submit form button */}
                <div className=''>
                    <button type="submit" class=" w-full bg-lightGreen p-3 rounded-xl md:w-1/2">Create</button>
                </div>
            </form>
        </div>
    </section>
  )
}

export default ChildProfile