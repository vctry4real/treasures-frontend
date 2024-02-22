import React from 'react';
import HealthCard from './HealthCard';
import { PiFirstAidKit } from 'react-icons/pi';
import { IoChatbubbleEllipsesOutline } from 'react-icons/io5';

const HealthItemsCard = (props) => {
  return (
    <section>
      <HealthCard>
        <div className="">
          <div className="">
            <div className="mb-3">
              <img src={props.image} alt={props.title} className="w-full" />
            </div>

            <div className="mb-2">
              <p className="font-bold text-lg">{props.name}</p>
            </div>

            <div className="flex flex-col gap-2 p-3">
              <p className="flex items-center">
                <span className="mr-2">
                  <PiFirstAidKit />
                </span>
                {props.description}
              </p>
              <h3 className="flex items-center">
                <span className="mr-2">
                  <IoChatbubbleEllipsesOutline />
                </span>
                {props.history}
              </h3>
            </div>

            <div className=" flex items-center bg-slate-100 p-3 ">
              <div className="flex flex-col">
                <p className="text-sm text-gray-400">Available on</p>
                <p className="text-sm font-medium">{props.date}</p>
              </div>
              <button className="ml-auto bg-primary py-1 px-3 text-center text-white rounded-lg">
                Book
              </button>
            </div>
          </div>
        </div>
      </HealthCard>
    </section>
  );
};

export default HealthItemsCard;
