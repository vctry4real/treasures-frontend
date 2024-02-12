import React from 'react';
import ChildProfileItems from './ChildProfileItems';

const ChildProfileDisplay = () => {
    //Passes the child profile data to the ChildProfileItems component. 
    const ChildProfileData = [
        {
            name : "John Doe",
            age: 10,
            dob: "3/6/2034",  // placeholder for actual date of birth value, to be replaced with useState hook or API
            weight: "67kg",
            height: "125cm",
            bloodgroup: "O+ (Positive)",
            genotype: "AA",
            allergies: "Coffein",
            disabilities: "None",
            profilepic: "https://unsplash.com/photos/boy-holding-white-paper-83tkHLPgg2Q",
            birthcertificate: "Born June in caleb hospital",
            medicaldocument: "Last visit to the hospital was june 2nd",
            guardianid: "Mother"
        }
    ];

    return (
        <>
            <p>Display profile</p>
            {ChildProfileData.map((item) => (
                <ChildProfileItems 
                    key={item.name}
                    age={item.age}
                    date={item.dob} 
                    weight={item.weight}
                    height={item.height}
                    bloodgroup={item.bloodgroup}
                    genotype={item.genotype}
                    allergies={item.allergies}
                    disabilities={item.disabilities}
                    profilepic={item.profilepic}
                    birthcertificate={item.birthcertificate}
                    medicaldocument={item.medicaldocument}
                    guardianid={item.guardianid}
                />
            ))}
        </>
    );
}

export default ChildProfileDisplay;
