import { React, useState, useRef } from "react";
import TreasureLogo from "../assets/Treasure.svg";
import FamilyLogo from "../assets/Family.svg";
import DoctorLogo from "../assets/doctor.svg";
import HospitalLogo from "../assets/hospital.svg";
import RadioBtn from "../assets/radioButton.svg";
import { useResetContext } from "../providers/resetProvider";

const userCategories = [
  {
    title: "Parent/Gaurdian",
    description: "I am seeking wellness plans for my child.",
    isSelected: false,
  },
  {
    title: "Medical Practitioner",
    description: "I want to offer professional health services.",
    isSelected: true,
  },
  {
    title: "Health Management Organizagtion",
    description: "I want to offer health insurance plans.",
    isSelected: false,
  },
];
const cardTry =
  "bg-opacity-50 text-gray-950 mt-2 block border rounded-md border-gray-700 h-[48px] w-[450px] pl-[12px] pr-[12px] justify-between shadow-sm focus:border-gray-300 focus:ring focus:ring-gray-200 my-8";

const unSelectedCard =
  "flex flex-col justify-between items-s border border-gray-200 rounded-lg shadow w-2/3 h-1/5 md:flex-row md:max-w-xl hover:bg-yellow-400 hover:text-gray-700 space-y-4";
// dark:border-gray-700 dark:bg-gray-200 dark:hover:bg-gray-700

const cardBoxStyle =
  "object-cover bg-opacity-30 w-full object-cover w-full rounded-t-lg h-20 md:h-auto md:w-30 md:rounded-none md:rounded-s-lg";

const cardTitleStyle =
  "font-serif mb-1 text-xl font-bold tracking-wide p-8 justify-center item-center";

const CardListItem = ({ cardType }) => {
  return (
    <div className="flex flex-col border-2 border-grey p-4 gap-4 mb-4 max-w-700 w-full shadow-3xl rounded-md bg-grey-800 hover:yellow-500">
      <div className="flex justify-between item-center">
        {/* <div className="w-8 h-8 rounded-md bg-gray-200 "></div> */}
        {/* <svg
          src={FamilyLogo}
          alt="Family logo"
          className="w-8 h-8"
          // w-8 h-8 rounded-md bg-gray-200
        /> */}
        <input
          type="radio"
          name="class"
          value={cardType.isSelected}
          id="parent"></input>
      </div>
      <div className="flex flex-col leading-normal">
        <h3 className="font-bold text-md">{cardType.title}</h3>
        <p>{cardType.description}</p>
      </div>
    </div>
  );
};

const RadioButton = ({ name, id, value, onChange, checked }) => {
  return (
    <div>
      <input
        className="visibilty:-bg"
        type="radio"
        id={id}
        name={name}
        onChange={onChange}
        checked={checked}
      />
      <span className=""></span>
    </div>
  );
};

const CardList = () => {
  return (
    <div className="min-w-300 justify-center">
      {userCategories.map((item, index) => {
        return <CardListItem key={index} cardType={item} />;
      })}
    </div>
  );
};
const JoinAsPage = () => {
  const { email, setEmail } = useResetContext();
  // const  headline, text, imageSrc, metaInfo, contentUrl } = content;
  const row1 = "";
  const col1 = "";
  const radioRef = useRef();
  const [userCatState, setUserCatState] = useState(null);

  return (
    // Whole screen
    <div className="bg-primary w-full h-screen flex items-center justify-center  ">
      {/* LHS image */}
      <div className="w-full flex flex-col md:flex-row items-center justify-center lg:h-screen">
        {/* Image full on mobile, 0.5 on tablet and 0.67 on PC */}
        <div className="w-full md:w-1/2 lg:w-1/3">
          <img
            src={TreasureLogo}
            alt="Logo"
            className="w-full h-auto md:h-[1024px] lg:h-[768px]"
          />
        </div>

        {/* Temporary Carousel indicator       Justify: y-axis  while items: x-axis*/}
        <div className="bg-white rounded-md h-screen flex flex-col items-center justify-center w-screen md:w-1/2 lg:w-2/3">
          <div id="carouselSlide" className="w-1/2 p-4 flex ">
            <hr className="h-2 w-1/4 my-8 mx-4 bg-gray-200 border-0 dark:bg-gray-700" />
            <hr className="h-2 w-1/4 my-8 mx-4 bg-gray-200 border-0 dark:bg-gray-300" />
            <hr className="h-2 w-1/4 my-8 mx-4 bg-gray-200 border-0 dark:bg-gray-300" />
          </div>

          <h2 className="text-center font-serif mb-1 text-gray-950 text-3xl font-bold tracking-wide p-8 justify-center item-center">
            Join as a &#8230;
          </h2>

          <CardList />
          <p className="mr-1">
          Already have an account?
          {email}
          <a href="/login" className="text-green-600">
            Login.
          </a>
        </p>
        </div>
        {/* <button
          className="bg-black  focus:bg-green focus:fill-white " onClick={""}> Join as a{/* {cardType.title} */}
        {/* </button> */}
      </div>
    </div>
  );
};

{/* <p className="mr-1">
  Already have an account?
  <a onClick href="/login" className="text-green-600">
    {}
    Login.
  </a>
</p>; */}

export default JoinAsPage;

// // export default function App() {
// //   return (
// //     <div className="App">
// //       <CardList />
// //     </div>
// //   );
// // }

//     // const classCards = () => {

//         // return  (
//         //     <div className= {unSelectedCard}>
//         //         {
//         //             {classDetails.map((i) => {
//         //             return <p>{i.title}</p>
//         //         })
//                 //      classDetails.map((userClass)=>{
//                 //         return (
//                 //             <div>
//                 //                 <div className="flex justify-between ">
//                 //      <img src={TreasureLogo} alt="Logo" className="object-cover w-full object-cover w-full rounded-t-lg h-20 md:h-auto md:w-30 md:rounded-none md:rounded-s-lg" />
//                 //      <input type="radio" name="class" value={userClass.profession.title} id="parent"></input>
//                 //  </div>
//                 //  <div
//                 //     className="flex flex-col p-4 leading-normal"
//                 // >
//                 //     <h3>{userClass.title}</h3>
//                 // <   p>{userClass.description}</p>
//                 // </div>
//                 //             </div>
//                 //         )
//                 //     })
//                 // }

//         //     </div>
//         // )}
//         // // <div className= {unSelectedCard} >
//         // //  classDetails.map((type) => {
//         //     return(
//         //     <div>

//         //         <div className="flex justify-between ">
//         //             <img src={TreasureLogo} alt="Logo" className="object-cover w-full object-cover w-full rounded-t-lg h-20 md:h-auto md:w-30 md:rounded-none md:rounded-s-lg" />
//         //             <input type="radio" name="class" value={type.profession.title} id="parent"></input>
//         //         </div>
//         //         <div
//         //             className="flex flex-col p-4 leading-normal"
//         //         >
//         //             <h3>{type.title}</h3>
//         //         <   p>{type.description}</p>
//         //         </div>
//         //     </div>);}
//         //  )
//             // </div>

//     // const classDetails = [
//     //     {"personal": {
//     //         "title": "Parent/Gaurdian",
//     //         "description": "I am seeking wellness plans for my child.",
//     //         "isSelected": false
//     //     }},
//     //     {"profession": {
//     //         "title": "Medical Practitioner",
//     //         "description": "I want to offer professional health services.",
//     //         "isSelected": false
//     //     }},
//     //     {"organization": {
//     //         "title": "Health Management Organizagtion",
//     //         "description": "I want to offer health insurance plans.",
//     //         "isSelected": false
//     //     }},
//     // ]

// 	// return (
//     //     <div className=" w-full h-screen lg:h-[768px] ">
//     //         <div>
//     //             <div className="w-full md:w-1/2 lg:w-1/3">
//     //                 <img src={TreasureLogo} alt="Logo" className="object-cover w-full object-cover w-full rounded-t-lg h-auto md:h-30 md:w-auto md:rounded-none md:rounded-s-lg" />
//     //                 {/* <p>Treasures</p> */}
//     //             </div>
//     //             <h2 className="font-serif mb-1 text-gray-950 text-3xl font-bold tracking-wide p-8 justify-center item-center">Join as a</h2>
//     //             {classCards()}

//     //         </div>
//     //     </div>
// 	// )
// }
