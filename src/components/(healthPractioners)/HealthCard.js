import React from 'react'


const DoctorCard = (props) => {
  return (
    <div className='rounded-lg p-1 drop-shadow-lg'>
        {props.children}
    </div>
  )
}


export default DoctorCard