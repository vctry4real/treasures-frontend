import React from 'react';
import doctor from '../assets/Doctor1.jpg';

const DoctorPage = (docEmail) => {
  // const [ docInfo, setDocInfo ] =
  // const [ comment, setComment ] =
  return (
    <div>
      <aside className="bg-secondary w-1/4">
        <div className="flex flex-col">
          <img className="h-20 w-20 round-full" src={doctor}></img>
        </div>
      </aside>
      <div></div>
    </div>
  );
};
