import { React, useState, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import TreasureLogo from "../assets/Treasure.svg";
import FamilyLogo from "../assets/family.svg";
import DoctorLogo from "../assets/doctor.svg";
import HospitalLogo from "../assets/hospital.svg";
import RadioBtn from "../assets/radioButton.svg";
import { useResetContext } from "../providers/resetProvider";

const userCategories = [
  {
    title: "Parent/Gaurdian",
    description: "I am seeking wellness plans for my child.",
    isSelected: false,
    icon: <svg class="bg-black rounded-md fill-gray-200" viewBox="-1 0 19 19">
<path d="M7.181 15.129a1.81 1.81 0 0 0 .223.872H1.85a1.27 1.27 0 0 1-1.267-1.267v-1.9A3.176 3.176 0 0 1 3.75 9.667h5.478a3.177 3.177 0 0 0 .557 1.067 3.135 3.135 0 0 0-2.604 3.086zM6.6 8.717a3.236 3.236 0 1 1 3.236-3.236A3.236 3.236 0 0 1 6.6 8.717zm9.817 6.412a.875.875 0 0 1-.872.872H9.003a.875.875 0 0 1-.872-.872V13.82a2.187 2.187 0 0 1 2.18-2.18h3.925a2.187 2.187 0 0 1 2.18 2.18zm-1.915-6.372a2.228 2.228 0 1 1-2.228-2.228 2.228 2.228 0 0 1 2.228 2.228z"/>
</svg>
  },
  {
    title: "Medical Practitioner",
    description: "I want to offer professional health services.",
    isSelected: true,
    icon: <svg class="  bg-black rounded-md fill-gray-200" viewBox="-1.5 0 24 24" ><path d="m6.53 8.098.14-.012c.053-.006.101-.025.141-.053l-.001.001c.134.462.298.948.503 1.457.263.666.522 1.213.812 1.741l-.04-.08c-.024.364-.053.738-.091 1.1-.018.223-.062.431-.129.627l.005-.018c-.012.005-.029 2.08-.029 2.08.001 1.353.938 2.486 2.198 2.787l.02.004c.057-.145.195-.246.357-.246h.574c.161.002.299.102.356.243l.001.003c1.283-.302 2.224-1.435 2.229-2.789v-.001s-.035-2.066-.053-2.08c-.055-.175-.099-.381-.122-.593l-.001-.015c-.035-.364-.058-.729-.091-1.1.247-.446.506-.992.734-1.555l.038-.106c.205-.509.364-.994.503-1.457.039.028.087.047.139.053h.001l.141.012c.17.018.32-.122.334-.339l.152-1.931c0-.001 0-.002 0-.002 0-.163-.122-.297-.279-.317h-.002-.017c.039-.281.061-.605.061-.934 0-.718-.106-1.412-.303-2.065l.013.051c-.577-1.266-1.721-2.185-3.099-2.442l-.026-.004c-.296-.061-.641-.102-.993-.112h-.009-.012c-.359.007-.704.047-1.038.118l.036-.006c-1.402.264-2.544 1.183-3.114 2.419l-.011.027c-.186.6-.293 1.29-.293 2.004 0 .333.023.661.068.981l-.004-.037c-.159.018-.282.151-.282.313v.007l.152 1.931c.014.222.166.356.33.338z"/><path d="m21.416 20.878c-.07-3.04-.374-3.728-.538-4.194-.065-.187-.118-1.451-2.206-2.271-1.28-.504-2.932-.514-4.33-1.105v1.644c-.003 1.768-1.269 3.239-2.944 3.56l-.023.004c-.031.182-.187.318-.374.32h-.018v1.24c0 1.212.982 2.194 2.194 2.194s2.194-.982 2.194-2.194v-.866c-.608-.091-1.069-.609-1.069-1.235 0-.689.559-1.248 1.248-1.248s1.248.559 1.248 1.248c0 .546-.351 1.01-.839 1.18l-.009.003v.918.047c0 1.532-1.242 2.774-2.774 2.774s-2.774-1.242-2.774-2.774c0-.017 0-.033 0-.05v.002-1.251c-.178-.012-.322-.146-.35-.318v-.002c-1.69-.329-2.95-1.795-2.954-3.556v-1.657c-1.404.603-3.066.615-4.353 1.12-2.094.819-2.142 2.08-2.206 2.27-.16.468-.468 1.153-.538 4.195-.012.4 0 1.013 1.206 1.549 2.626 1.03 6.009 1.35 9.344 1.58h.32c3.342-.228 6.72-.547 9.344-1.58 1.201-.533 1.212-1.142 1.201-1.546zm-14.681-1.24h-1.246v1.251h-.89v-1.247h-1.246v-.89h1.246v-1.246h.89v1.246h1.246z"/><path d="m16.225 17.965v-.001c0-.372-.301-.673-.673-.673s-.673.301-.673.673.301.673.673.673c.371 0 .672-.301.673-.672z"/></svg>
  },
  {
    title: "Organization",
    description: "I want to offer health insurance plans.",
    isSelected: false,
    icon: <svg class="bg-black rounded-md fill-gray-200" viewBox="0 1 612 612">
	<path d="M373.328,138.672V0H138.672v138.672H0V512h208V366.438h96V512h208V138.672H373.328z M131.469,414.188H91.406
		v-47.766h40.063V414.188z M131.469,308.188H91.406v-47.766h40.063V308.188z M276.031,308.188h-40.063v-47.766h40.063V308.188z
		 M318.656,150.813h-40.281v40.281h-44.75v-40.281h-40.281v-44.766h40.281V65.75h44.75v40.297h40.281V150.813z M380.453,260.422
		h37.563v47.766h-37.563V260.422z M420.594,414.188h-40.063v-47.766h40.063V414.188z"/>
</svg>
  },
];

const cardIcons= {
  "Parent/Gaurdian": FamilyLogo,
  "Medical Practitioner": DoctorLogo,
  "Organization": HospitalLogo
}

const cardTry =
  "bg-opacity-50 text-gray-950 mt-2 block border rounded-md border-gray-700 h-[48px] w-[450px] pl-[12px] pr-[12px] justify-between shadow-sm focus:border-gray-300 focus:ring focus:ring-gray-200 my-8";

const unSelectedCard =
  "flex flex-col justify-between items-s border border-gray-200 rounded-lg shadow w-2/3 h-1/5 md:flex-row md:max-w-xl hover:bg-yellow-400 hover:text-gray-700 space-y-4";
// dark:border-gray-700 dark:bg-gray-200 dark:hover:bg-gray-700

const cardBoxStyle =
  "object-cover bg-opacity-30 w-full object-cover w-full rounded-t-lg h-20 md:h-auto md:w-30 md:rounded-none md:rounded-s-lg";

const cardTitleStyle =
  "font-serif mb-1 text-xl font-bold tracking-wide p-8 justify-center item-center";

// Loop through the api provided usertypes
const CardList = () => {
  return (
    <div className="min-w-300 justify-center">
      {userCategories.map((item, index) => {
        return <CardListItem key={index} cardType={item} />;
      })}
    </div>
  );
};

// Create item cards from type object
const CardListItem = ({ cardType }) => {
  const {userType, setUserType}= useResetContext('')
  // joinTitle= 
  return (
    // <form>
    <div className="cursor-pointer hover:bg-gray-200 active:bg-gray-400 focus:bg-primary flex flex-col border-2 border-grey p-4 gap-4 mb-4 max-w-700 w-full shadow-3xl rounded-md bg-grey-800"
    // onClick={""}
    >
      <div className="flex justify-between item-center ">
        <div className="h-8 w-8 rounded-md bg-gray-200">
        {cardType.icon}
        </div>
        
        <input name="type" type="radio"
          value= {cardType.isSelected}
          // className="p-8"
          id={cardType.title}
          onClick= {()=> {
            setUserType(cardType.title)
          }}
        class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-gray-900 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
        />

      {/* <span
        class="absolute text-gray-900 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 16 16" fill="currentColor">
          <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
        </svg>
      </span> */}

      {/* <div class="inline-flex items-center">
    <label class="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="react">
      <input name="type" type="radio"
        class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-gray-900 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
        id="react" />
      <span
        class="absolute text-gray-900 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 16 16" fill="currentColor">
          <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
        </svg>
      </span>
    </label>
    <label class="mt-px font-light text-gray-700 cursor-pointer select-none" htmlFor="react">
      React
    </label>
  </div> */}

        {/* <input
          type="radio"
          name="class"
          value=  {cardType.isSelected}
          className="p-8"
          id={cardType.title}
          onClick= {()=> {
            setUserType(cardType.title)
            console.log(userType)
          }}
          >
          </input> */}
      </div>
      <div className="flex flex-col leading-normal">
        <h3 className="font-bold text-md">{cardType.title}</h3>
        <p>{cardType.description}</p>
      </div>
    </div>
   // </form>
  );
};

// Join as inital page
const JoinAsPage = () => {
  const navigate = useNavigate();
  const {userType} = useResetContext();
  const joinMessage = userType[0] ==="O" ? "Join as an " : "Join as a ";
  const radioRef = useRef();
  const [userCatState, setUserCatState] = useState(null);

  return (
    // Whole screen
    <div className=" bg-primary w-full h-screen flex items-center justify-center  ">
      {/* LHS image */}
      <div className="w-full flex flex-col md:flex-row items-center justify-center lg:h-screen">
        {/* Image full on mobile, 0.5 on tablet and 0.67 on PC */}
        <div className="w-full md:w-1/2 lg:w-1/3">
          <img
            src={TreasureLogo}
            alt="TreasureLogo"
            className="w-full h-auto md:h-[1024px] lg:h-[768px]"
          />
        </div>

        {/* Temporary Carousel indicator       Justify: y-axis  while items: x-axis*/}
        <div className="bg-white rounded-md h-screen flex flex-col items-center justify-center w-screen md:w-1/2 lg:w-2/3">
          <div id="carouselSlide" className="w-1/2 p-4 flex min-w-1/4 ">
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
          {/* {email} */}
          <a href="/auth" className="text-green-600">
          &nbsp;Login.
          </a>
        </p>
        <button
          className="w-1/3 mt-4 hover:bg-primary text-white p-2 rounded
          m-4 bg-black text-white  focus:bg-green focus:fill-white " 
          onClick={()=> {
            navigate("/reasons") }}> 
          {joinMessage}{userType}
        </button>
        </div>
      </div>

    </div>
  );
};

export default JoinAsPage;

