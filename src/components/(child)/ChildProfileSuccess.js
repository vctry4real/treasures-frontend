import React, { useState } from 'react';
// import setState from 'react';
import ChildInput from './ChildInput';
import Linda from '../../assets/Linda.jpg';
// import { IconBase } from 'react-icons';
import { GoPencil } from 'react-icons/go';
import { FaArrowLeftLong } from 'react-icons/fa6';
import Calendar from 'react-calendar';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useChildRegisterContext } from '../../providers/RegisterChildProvider';

const userProps = {
  Name: 'Linda Selena',
  Age: 11,
  Height: 20,
  Weight: 132,
  'Blood Group': 'AB+',
  Genotype: 'AS',
  Allergies: 'Nuts and dust particles, pollen, quinine',
  Disabilities: 'Partial blindess',
  Pictures: 'Img2032.jpg',
  'Birth certificate': 'Img2033.jpg',
  'Medical documents': ['LindaMedreport.doc', 'Tests.pdf'],
};

const detailKeys = [
  'Name',
  'Age',
  'Height',
  'Weight',
  'Blood Group',
  'Genotype',
  'Allergies',
  'Disabilities',
  // 'Pictures','Birth certificate','Medical documents'
];

const documentKeys = ['Picture', 'Birth Certificate', 'Medical Documents'];

const ChildListItem = (key) => {
  const { childRegistrationData } = useChildRegisterContext();
  return (
    // <p>{userProps[item]}</p>
    <div className="flex flex-row even:bg-[#fafafa] odd:bg-[#f5f5f5]">
      <div className="w-1/3">
        <p className="text-left">{key}</p>
      </div>
      <div className="w-2/3">
        <p className="text-left ">{childRegistrationData[key]}</p>
      </div>
    </div>
  );
};

// Why must i put list inside {} for map use
const ChildPersonalList = ({ keys }) => {
  // console.log(keys);
  return (
    <div>
      {keys.map((key, index) => {
        // {keys.map((key, i) => {
        // console.log(key);
        return ChildListItem(key);
        // return <ChildListItem index={i} item={key} />;
      })}
    </div>
  );
};

// const ChildPersonalList = () => {
// const { childRegistrationData } = useChildRegisterContext();

//   // console.log(keys);
//   return (
//     <div>
//       {detailKeys.map((key, index) => {
//         // return <ChildListItem />;
//         return { ChildListItem };
//       })}
//     </div>
//   );
// };

const PersonalDocList = ({ docs }) => {
  // console.log(keys);
  return (
    <div>
      {typeof docs === 'object'
        ? docs.name
        : docs.map((doc, index) => {
            return <DocumentListItem />;
          })}
    </div>
  );
};

const DocumentListItem = (doc) => {
  console.log(doc['name']);
  return (
    <div className="flex flex-row rounded-xl overflow-x-auto">
      <div className="w-1/3">
        <p className="">{doc['name']}</p>
      </div>
      <div className="w-2/3">
        <button
          className="text-right "
          onClick={() => {
            'function to delete item within list of items';
          }}
        >
          x
        </button>
      </div>
    </div>
  );
};

const EditButton = () => {
  const [edtiCancel, setEditCancel] = useState(false);
  return (
    <div className="">
      <button
        onClick={() => {
          setEditCancel(!edtiCancel);
        }}
        className="border rounded-lg p-2 text-[#616161] text-center flex items-center"
      >
        <GoPencil className="text-[#616161]" />
        <p>&nbsp;{edtiCancel ? 'Cancel' : 'Edit Profile'}</p>
      </button>
      <button
        className={`${edtiCancel ? '' : 'hidden'} text-white bg-primary hover:bg-lightGreen text-white p-4 rounded-3xl`}
        onClick={() => {
          // setValue or submit fields
        }}
      >
        Save
      </button>
    </div>
  );
};

function editHeader(heading) {
  return (
    <div className="flex justify-between">
      <h3 className="text-[#212121] p-2 text-2xl font-weight-black font-outfit">
        {heading}
      </h3>
      {EditButton()}
    </div>
  );
}

const ChildProfileSuccess = (props) => {
  const { childRegistrationData, progress, handlePreviousStep } =
    useChildRegisterContext();

  console.log(childRegistrationData);
  const navigate = useNavigate();
  // const renderedChildList = ChildPersonalList((keys = { detailKeys }));
  const [imageNameToggle, setImageNameState] = useState(false);
  const [personalDetailsToggle, setPersonalDetailsToggle] = useState(false);
  const [docDetailsToggle, setDocDetailsToggle] = useState(false);
  const [value, setValue] = useState();

  const EditButton = (placeholder, props) => {
    // const [editCancel, setEditCancel] = useState(false);
  };

  return (
    <motion.section
      key={'childcreated'}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      // onSubmit={handleSubmit}
      // className="w-full max-w-sm "
    >
      <section className="p-10 flex flex-col">
        <h1 className="text-center text-[#212121] text-2xl font-weight-black font-outfit">
          Profile Creation Successful!
        </h1>
        <div>
          <div className="flex flex-row justify-between my-4">
            <img className="rounded-full w-20 h-20" src={Linda} />
            {/* {editButton(setImageNameState)} */}
            {EditButton()}
          </div>
          <div>
            <div>
              {editHeader('Personal Details')}
              {/* {editButton(setPersonalDetailsToggle)} */}
            </div>
            <ChildPersonalList keys={detailKeys} />
          </div>

          <div className="my-8">
            <div>
              {editHeader('Personal documents')}
              {/* {editButton(setDocDetailsToggle)} */}
            </div>
            <ChildPersonalList keys={documentKeys} />
          </div>
        </div>

        <button
          type="submit"
          onClick={() => {
            navigate('/dashboard');
          }}
          className="w-full mt-4 bg-primary hover:bg-lightGreen text-white p-4 rounded-3xl"
        >
          <div className="flex flex-row items-center">
            <FaArrowLeftLong className="text-white" />
            <span className="text-center flex-1">Go back to Dashboard</span>
          </div>
        </button>
      </section>
    </motion.section>
  );
};

export default ChildProfileSuccess;
