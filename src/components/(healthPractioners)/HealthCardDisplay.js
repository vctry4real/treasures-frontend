import React from 'react'
import HealthItemsCard from './HealthItemsCard'
import HealthCardCarousel from './HealthCardCarousel';
import AliceEkpo from '../../assets/AliceEkpo.jpg';
import Practioners from '../../assets/Practioners.jpg';

const HealthCardDisplay = () => {

    //the date is to be gotten from schedule
    const HealthCardInfoData = [
        {
            image: AliceEkpo,
            name: "Joseph Micah",
            description: "Senior Therapist at Helpmum",
            history: "30 sessions (20) reviews",
            date: "07 February 24"
        },
        {
            image: Practioners,
            name: "Ngozi John",
            description: "Senior Therapist at Helpmum",
            history: "30 sessions (20) reviews",
            date: "02 February 24"
        }
    ]
    return (
        <div className="mb-8">

            <HealthCardCarousel>
                <div className="w-[240] h-[288px]">
                    <div >

                        <div className="mb-3">
                            <img src={Practioners} alt='Practioners' className='w-full' />
                        </div>

                        <div className="mb-2">
                            <p className='font-bold text-2xl tracking-wider '>Discover Practioners</p>
                        </div>
                        <div className="flex flex-col mb-3 ">
                            <p className='flex items-center'>Explore from over 3k health practioners</p>
                        </div>

                        <div className='w-full text-white'>
                            <button className='text-xl font-medium p-4 bg-blue-500 rounded-xl w-full'>Discover Practioners</button>
                        </div>
                    </div>
                </div>
                {HealthCardInfoData.map((item, index) => (
                    <HealthItemsCard
                        key={index}
                        image={item.image}
                        name={item.name}
                        description={item.description}
                        history={item.history}
                        date={item.date}
                    />
                ))}
            </HealthCardCarousel>
        </div>
    );

}

export default HealthCardDisplay