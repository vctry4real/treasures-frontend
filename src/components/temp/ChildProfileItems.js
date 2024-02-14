import React from 'react'
import { MdOutlineEdit } from "react-icons/md";
import { FaLongArrowAltLeft } from "react-icons/fa";

const ChildProfileItems = (props) => {
  return (
    <section class="md:w-full ">
        <div class=" w-full bg-slate-500 h-auto p-8 overflow-hidden md:w-1/2 flex flex-col justify-center">
            <div class=" ">Logo</div>
            <p class=" text-center text-2xl font-bold mb-5">Child Profile Creation</p>

            {/* Child profile display data */}

            {/* It is dynamic it contains the display styling and look.....ChildProfileDisplay passes the props value */}

            <div className='flex flex-row gap-4'>
                <div className='flex flex-col '>
                    <img src={props.profilepic} alt='' className='w-[100px] h-[100px] bg-slate-300 rounded-lg shadow-sm' />
                    <h3 class="text-lg font-semibold text-white mt-4">{props.name}</h3>
                </div>
                <div className='flex flex-row items-center justify-center ml-auto p-2 border h-[30px]'>
                    <MdOutlineEdit />
                    <p>Edit Profile</p>
                </div>
            </div>
            <div className='mt-[20px]'>
                <div className='flex flex-row mb-2 items-center p-4 bg-gray-800 rounded-lg shadow-lg'>
                    <p className='text-white text-bold '>Age</p>
                    <p className='ml-auto text-white'>{props.age}</p>
                </div>
                <div className='flex flex-row mb-2 items-center p-4 bg-gray-800 rounded-lg shadow-lg'>
                    <p className='text-white text-bold '>Weight</p>
                    <p className='ml-auto text-white'>{props.weight}</p>
                </div>
                <div className='flex flex-row mb-2 items-center p-4 bg-gray-800 rounded-lg shadow-lg'>
                    <p className='text-white text-bold '>Height</p>
                    <p className='ml-auto text-white'>{props.height}</p>
                </div>
                <div className='flex flex-row mb-2 items-center p-4 bg-gray-800 rounded-lg shadow-lg'>
                    <p className='text-white text-bold '>Blood Group</p>
                    <p className='ml-auto text-white'>{props.bloodgroup}</p>
                </div>
                <div className='flex flex-row mb-2 items-center p-4 bg-gray-800 rounded-lg shadow-lg'>
                    <p className='text-white text-bold '>Genotype</p>
                    <p className='ml-auto text-white'>{props.genotype}</p>
                </div>
                <div className='flex flex-row mb-2 items-center p-4 bg-gray-800 rounded-lg shadow-lg'>
                    <p className='text-white text-bold '>Allergies</p>
                    <p className='ml-auto text-white'>{props.allergies}</p>
                </div>
                <div className='flex flex-row mb-2 items-center p-4 bg-gray-800 rounded-lg shadow-lg'>
                    <p className='text-white text-bold '>Disabilities</p>
                    <p className='ml-auto text-white'>{props.disabilities}</p>
                </div>

                {/* Go back to dashboard button */}
                <div className=' flex items-center justify-center '>
                    <button className="flex items-center justify-center text-white bg-black rounded-2xl w-[193px] h-[56px] m-10 py-2 px-4 md:w-1/2"><span className="pl-2 mr-2"><FaLongArrowAltLeft /></span>Go to dashboard</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ChildProfileItems;