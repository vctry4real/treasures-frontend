import progress from '../../assets/progress.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import LateefatOdubanjo from '../../assets/LateefatOdubanjo.jpg';
import DevonLane from '../../assets/DevonLane.jpg';
import KathrynMurphy from '../../assets/KathrynMurphy.jpg';
import CameronWilliams from '../../assets/CameronWilliams.jpg';

import { FaLongArrowAltRight } from 'react-icons/fa';
import { FaGreaterThan } from 'react-icons/fa';
import { PiHandWavingFill } from 'react-icons/pi';
import { IoBookSharp } from 'react-icons/io5';
import { IoFolderSharp } from 'react-icons/io5';
import { FaPhoneAlt } from 'react-icons/fa';

import { FaPlus } from 'react-icons/fa6';

import DoctorCardDisplay from '../(doctorCards)/DoctorCardDisplay';
import HealthCardDisplay from '../(healthPractioners)/HealthCardDisplay';
import useProfile from '../../hooks/useProfile';
import { useCallback, useEffect, useState } from 'react';
import { useAlertContext } from '../../providers/AlertProvider';
import useUser from '../../hooks/useUser';
import ModalWrapper from '../common/ModalWrapper';
import { useDashboardContext } from '../../providers/DashboardProvider';

const DashboardDisplay = () => {
  const { loading, currentProfile } = useDashboardContext();
  const { showAlert } = useAlertContext();
  const [openModal, setOpenModal] = useState(false);

  if (loading || !currentProfile) {
    return <div className="pt-20">Loading...</div>;
  }
  return (
    <>
      <div className="p-4 ">
        <div className="p-4   rounded-lg  ">
          <div className="flex flex-col items-center gap-2 text-left p-2 h-auto mb-9 rounded-xl bg-primary">
            <p className="w-full text-md text-white text-left">
              Get Started with Treasure Consultant
            </p>
            <h3 className="w-full flex items-center text-white text-left text-md font-bold">
              Browse Health Professional{' '}
              <span className="pl-2 mr-2">
                <FaLongArrowAltRight />
              </span>
            </h3>
          </div>
          <div className=" w-full flex flex-row  mb-6">
            <div className="flex flex-col items-center justify-center rounded bg-transparent">
              <div className="text-left w-full">
                {' '}
                {/* Add text-left class here */}
                <h3 className="text-xl text-gray-800 flex flex-grow items-center font-semibold">
                  Welcome{' '}
                  <span className="ml-2">
                    <PiHandWavingFill className="text-yellow-500" />
                  </span>
                </h3>
                <p className="text-md text-gray-900">
                  You have an upcoming session
                </p>
              </div>
            </div>
            <div className="w-full ml-[20px] md:flex justify-end  ">
              <button className="p-2 rounded-2xl border w-[120px] bg-slate-100">
                See upcoming
              </button>
            </div>
          </div>

          {/* Children's profiles */}
          <div className="flex flex-row gap-2 mb-4">
            <div className="flex flex-col items-center justify-center rounded bg-transparent">
              <div className="text-left">
                {' '}
                {/* Add text-left class here */}
                <h3 className="text-lg text-gray-800">
                  Your children's profiles
                </h3>
                <p className="text-[13px] text-gray-900 ">
                  You have no child profile, please tap the add button to add
                  your child(ren)
                </p>
              </div>
            </div>
            <div className="">
              <FaGreaterThan />
            </div>
          </div>

          {/* Add child profile Icon */}

          <div className="flex flex-col items-center rounded h-28">
            <div className="flex flex-col items-start justify-start w-full ">
              <button
                onClick={() => setOpenModal(true)}
                className="w-[40px] h-[40px] flex items-center justify-center bg-gray-200 rounded-full p-2 border-2 border-gray-900 shadow-sm "
              >
                <FaPlus fontSize={'20px'} />
              </button>

              <p className="text-md text-left text-gray-900">Add child</p>
            </div>
          </div>

          <DoctorCardDisplay />

          <HealthCardDisplay />

          {/* Consultatants section */}

          <div className="flex flex-col gap-5 items-center w-full justify-center h-auto mb-4 rounded">
            <div className="flex w-full items-center">
              <h1 className="text-xl text-left font-bold">
                Recent Consultations
              </h1>
              <p className="text-md font-light ml-auto">View all</p>
            </div>
            <div className="flex w-full flex-col gap-7">
              {/* Consultants N0 1 */}
              <div className=" w-full flex flex-row items-center">
                <div className=" flex items-center justify-start text-lef m">
                  <div className="w-[40px] h-[40px] mr-2 rounded-full border overflow:hidden">
                    <img
                      src={LateefatOdubanjo}
                      alt="/"
                      className="w-[40px] h-[40px] rounded-full"
                    />
                  </div>
                  <div>
                    <p className="text-lg font-semibold">Latifat Odubanjo</p>
                    <p className="text-md font-medium">
                      Senior Physiotherapist
                    </p>
                  </div>
                </div>
                <button className="w-1/4 px-2 py-1 border border-gray-300 rounded-xl ml-auto ">
                  Message
                </button>
              </div>

              {/* Consultants N0 2 */}
              <div className=" w-full flex flex-row items-center">
                <div className=" flex items-center justify-start text-lef m">
                  <div className="w-[40px] h-[40px] mr-2 rounded-full border overflow:hidden">
                    <img
                      src={DevonLane}
                      alt="/"
                      className="w-[40px] h-[40px]"
                    />
                  </div>
                  <div>
                    <p className="text-lg font-semibold">Devon Lane</p>
                    <p className="text-md font-medium">Senior Dental Officer</p>
                  </div>
                </div>
                <button className="w-1/4 px-2 py-1 border border-gray-300 rounded-xl ml-auto ">
                  Message
                </button>
              </div>

              {/* Consultants N0 3 */}
              <div className=" w-full flex flex-row items-center">
                <div className=" flex items-center justify-start text-lef m">
                  <div className="w-[40px] h-[40px] mr-2 rounded-full border overflow:hidden">
                    <img
                      src={CameronWilliams}
                      alt="/"
                      className="w-[40px] h-[40px]"
                    />
                  </div>
                  <div>
                    <p className="text-lg font-semibold">Cameron Williamson</p>
                    <p className="text-md font-medium">Paediatrics Dentist</p>
                  </div>
                </div>
                <button className="w-1/4 px-2 py-1 border border-gray-300 rounded-xl ml-auto ">
                  Message
                </button>
              </div>

              {/* Consultants N0 4 */}
              <div className=" w-full flex flex-row items-center">
                <div className=" flex items-center justify-start text-lef m">
                  <div className="w-[40px] h-[40px] mr-2 rounded-full border overflow:hidden">
                    <img
                      src={KathrynMurphy}
                      alt="/"
                      className="w-[40px] rounded-full h-[40px]"
                    />
                  </div>
                  <div>
                    <p className="text-lg font-semibold">Kathryn Murphy</p>
                    <p className="text-md font-medium">Paediatrics Surgeon</p>
                  </div>
                </div>
                <button className="w-1/4 px-1 py-1 border border-gray-300 rounded-xl ml-auto ">
                  Message
                </button>
              </div>
            </div>

            {/* Sucess Tips */}
            <div className="flex flex-col items-center justify-center rounded p-3 my-7 bg-blue-200 h-auto">
              <div className="w-full mb-3">
                <div className="w-full flex items-center">
                  <h3 className=" font-bold">#1 Tips for Success</h3>
                  <div className="ml-auto">
                    <FaGreaterThan />
                  </div>
                </div>
                <h2 className="text-lg font-bold my-3">
                  How to prepare for your first meeting?
                </h2>
              </div>
              <div className="w-full flex items-center gap-4">
                <div>
                  <p className="text-md text-gray-700">
                    Plan an agenda! Plan out the questions and topics you’d like
                    to discuss. If you’d like to work together on long-terms
                    goals, set some time to discuss expectation for each other.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ModalWrapper {...{ openModal, setOpenModal }}>Add child</ModalWrapper>
    </>
  );
};

export default DashboardDisplay;
