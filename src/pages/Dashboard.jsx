import React from 'react';

import { Link, Outlet } from 'react-router-dom';
import { useRef, useState } from 'react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import Navbar from '../components/dashboard/Navbar';
import SideNav from '../components/dashboard/SideNav';
import DashboardProvider from '../providers/DashboardProvider';

const Dashboard = () => {
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
    </DashboardProvider>
  );
};

export default Dashboard;
