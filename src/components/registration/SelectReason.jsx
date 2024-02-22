import React from 'react';
import { useRegisterContext } from '../../providers/RegisterProvider';
import { GiBullseye } from 'react-icons/gi';
import { FaClipboardCheck } from 'react-icons/fa6';
import { HiOutlineLightBulb } from 'react-icons/hi';
import { FaUserDoctor } from 'react-icons/fa6';
import { PiBooksLight } from 'react-icons/pi';
import { GiChemicalDrop } from 'react-icons/gi';

const reasonData = [
  {
    title: 'General health information',
    icon: <HiOutlineLightBulb className="text-2xl" />,
  },
  {
    title: 'Access to medical assistance',
    icon: <FaUserDoctor className="text-2xl" />,
  },
  {
    title: 'Timely health checkups',
    icon: <FaClipboardCheck className="text-2xl" />,
  },
  {
    title: 'Early illness detection',
    icon: <GiBullseye className="text-2xl" />,
  },
  {
    title: 'Education on child health',
    icon: <PiBooksLight className="text-2xl" />,
  },
  {
    title: 'Labs & Diagnostic Centers',
    icon: <GiChemicalDrop className="text-2xl" />,
  },
];

const SelectReasonList = () => {
  const { registrationData, handleChange } = useRegisterContext();
  return (
    <>
      {reasonData.map((reason, index) => {
        return (
          <SelectReasonItem
            key={index}
            {...{ registrationData, reason, handleChange }}
          />
        );
      })}
    </>
  );
};

export default SelectReasonList;

const SelectReasonItem = ({ registrationData, reason, handleChange }) => {
  return (
    <div
      className={`w-full ${registrationData.reason === reason.title ? 'bg-greenBtnActiveBg border-greenBtnActiveBorder' : ' bg-greenBtnInActiveBg border-greenBtnInActiveBorder'} justify-center cursor-pointer active:bg-gray-200
      flex flex-col border-2 border-gray-400 p-4 gap-4 mb-4 shadow-3xl rounded-md bg-grey-800`}
    >
      <div className=" w-full flex flex-row justify-between items-center align-center ">
        <div className="flex items-center justify-center h-8 w-8 p-4 rounded-md bg-gray-200 mx-2">
          <div className="">{reason.icon}</div>
        </div>

        <div className="text-left w-full pl-3">{reason.title} </div>
        <div>
          <input
            type="radio"
            name="reason"
            value={reason.title}
            checked={registrationData.reason === reason.title}
            onChange={handleChange}
            className="checked:bg-black before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-gray-900 text-gray-900 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
          />
        </div>
      </div>
    </div>
  );
};
