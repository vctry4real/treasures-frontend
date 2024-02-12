import React from 'react'
import DoctorItems from './DoctorItems'
import Carousel from '../Carousel';
import Doctor1 from '../../assets/Doctor1.jpg';
import Doctor2 from '../../assets/Doctor2.jpg';

const DoctorCardDisplay = () => {

    //the date is to be gotten from schedule
    const DoctorInfoData = [
        {
            image: Doctor1 ,
            name: "Joseph Micah",
            description: "Senior Therapist at Helpmum",
            history: "30 sessions (20) reviews",
            date: "07 February 24"
        },
        {
            image: Doctor2 ,
            name: "Ngozi John",
            description: "Senior Therapist at Helpmum",
            history: "30 sessions (20) reviews",
            date: "02 February 24"
        }
    ]
    return (
        <div className="mb-8">
            
            <Carousel>
                {DoctorInfoData.map((item, index) => (
                    <DoctorItems
                        key={index}
                        image={item.image}
                        name={item.name}
                        description={item.description}
                        history={item.history}
                        date={item.date}
                    />
                ))}
            </Carousel>
        </div>
    );

}

export default DoctorCardDisplay