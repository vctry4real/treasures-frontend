import React from 'react'
import { useState } from 'react'
import { FiSearch } from "react-icons/fi";
import { VscSettings } from "react-icons/vsc";
import { DoctorFilter } from './SearchData';

const SearchBar = () => {


    

    const [searchInput, setSearchInput] = useState('')
    

    return (
        <div className='w-full h-[50px] bg-primary text-gray-900 rounded-2xl flex items-center px-3 py-3 my-5 '>
            <span className='mr-3 text-white'><FiSearch /></span>
            <input
                className="border-0 w-full focus:outline-0 px-4 py-1 text-xl"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                placeholder='search by specialization or state'
            />
            <span className='ml-3 text-white'><VscSettings /></span>
            <div>
                <ul>
                    {DoctorFilter.map((item, index)=>{
                        return <li key={index}>{item}</li>
                    })}
                </ul>
                
            </div>
        </div>
    )
}

export default SearchBar