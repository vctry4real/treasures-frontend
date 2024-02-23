import React, { useCallback } from 'react';

import { Link, Outlet } from 'react-router-dom';
import { useRef, useState } from 'react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import Navbar from '../components/dashboard/Navbar';
import SideNav from '../components/dashboard/SideNav';
import DashboardProvider, {
  useDashboardContext,
} from '../providers/DashboardProvider';
import ModalWrapper from '../components/common/ModalWrapper';
import useUser from '../hooks/useUser';
import useProfile from '../hooks/useProfile';

const Dashboard = () => {
  const { currentUser, currentProfile, handleLogout } = useDashboardContext();
  const [openModal, setOpenModal] = useState(false);

  return (
    <DashboardProvider>
      <div className="h-screen overflow-hidden">
        <Navbar />
        <div className="flex h-[90%]">
          <SideNav />
          <div className="h-screen w-full overflow-y-scroll">
            <Outlet />
          </div>
        </div>
      </div>
      <ModalWrapper {...{ openModal, setOpenModal }}>Hello</ModalWrapper>
    </DashboardProvider>
  );
};

export default Dashboard;
