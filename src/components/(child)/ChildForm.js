import React from 'react';
import { ChildInput, ChildDocInput } from './ChildInput';
import Calendar from 'react-calendar';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import { useState } from 'react';
import DatePicker from 'react-date-picker';
import { LiaCalendarAltSolid } from 'react-icons/lia';
import DOMPurify from 'dompurify';
import { useAlertContext } from '../../providers/AlertProvider';
import { motion } from 'framer-motion';
import { useChildRegisterContext } from '../../providers/RegisterChildProvider';

// import DateTimePicker from 'react-datetime-picker';
const genotypes = ['AA', 'AC', 'AS', 'CC', 'SC', 'SS'];
const bloodgroups = ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'];

// Define a context to store formData
export const FormDataContext = React.createContext(null);

const ChildForm = (props) => {
  const { alert, showAlert } = useAlertContext();
  // const navigate = useNavigate();

  const [date, setDate] = useState(new Date());
  const { childRegistrationData, setChildRegistrationData, handleNextStep } =
    useChildRegisterContext();

  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    const sanitizedInput = DOMPurify.sanitize(value);

    setFormData({
      ...formData,
      [name]: sanitizedInput,
    });
  };

  const handleDateChange = (date) => {
    setDate(date);
    const currentDate = new Date();

    const age = currentDate.getFullYear() - date.getFullYear();
    setFormData((prev) => ({
      ...prev,
      dob: date,
      Age: age,
    }));
  };

  const handleSubmit = async (e, formData) => {
    e.preventDefault();
    console.log('Form Submitted', formData);
    setChildRegistrationData(formData);
    handleNextStep();
    // navigate('/childprofilesuccess');
  };

  return (
    <motion.form
      key={'childform'}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onSubmit={(e) => handleSubmit(e, formData)}
    >
      <section className="p-10">
        <h1 className="text-center text-[#212121] text-2xl font-outfit font-bold">
          Child Profile Creation
        </h1>
        <div className="my-10">
          <p className="font-outfit font-bold my-2">Personal Details</p>
          <ChildInput
            labelText={'Name'}
            placeholderText={'Full name'}
            height={1}
            name={'Name'}
            onChange={handleChange}
          />

          <div>
            <p className="block mb-1 text-sm text-gray-600" for="dob">
              Date of Birth
            </p>
            <DatePicker
              name="Date of Birth"
              id="dob"
              maxDate={new Date()}
              onChange={handleDateChange}
              value={date}
              calendarAriaLabel="Date of Birth"
              className="flex w-[calc(50%_-_25px)] justify-between border-2 border-gray-400 mb-2 shadow-3xl rounded-md bg-grey-800 focus:border-[#003B3B] bg-[#FAFAFA]
              "
              calendarIcon={<LiaCalendarAltSolid className="text-xl" />}
            ></DatePicker>
          </div>
          <div className="flex flex-row gap-10">
            <div className={`flex-1 rounded-lg p-1 drop-shadow-lg`}>
              <ChildInput
                name="Weight"
                labelText={'Weight'}
                onChange={handleChange}
                placeholderText="kg"
                // placeholderText={heightInInchs ? 'In' : 'cm'}
                height={1}
              />
            </div>
            <div className={`flex-1 rounded-lg p-1 drop-shadow-lg`}>
              <ChildInput
                name="Height"
                labelText={'Height'}
                onChange={handleChange}
                placeholderText="cm"
                // placeholderText={heightInInchs ? 'In' : 'cm'}
                height={1}
              />
            </div>
          </div>
          <div className="flex flex-row gap-10">
            <div className="flex-1">
              <label
                className="block mb-1 text-sm text-gray-600"
                htmlFor="bloodgroups"
              >
                Blood Group
                <select
                  className="w-full border-2 border-gray-400 p-3 mb-2 shadow-3xl rounded-md bg-grey-800 focus:border-[#003B3B]"
                  name="Blood Group"
                  id="bloodgroups"
                  onChange={handleChange}
                >
                  <option value="">Select...</option>
                  {bloodgroups.map((group, index) => (
                    <option key={index} value={group}>
                      {group}
                    </option>
                  ))}
                </select>
              </label>
            </div>
            <div className="flex-1">
              <label
                className="block mb-1 text-sm text-gray-600"
                htmlFor="genotypes"
              >
                Blood Genotype
                <select
                  className="w-full border-2 border-gray-400 p-3 mb-2 shadow-3xl rounded-md bg-grey-800 focus:border-[#003B3B]"
                  name="Genotype"
                  id="genotypes"
                  onChange={handleChange}
                  // value={selectedOption}
                >
                  <option value="">Select...</option>
                  {genotypes.map((genotype, index) => (
                    <option key={index} value={genotype}>
                      {genotype}
                    </option>
                  ))}
                </select>
              </label>
            </div>
          </div>
          <ChildInput
            name="Allergies"
            labelText={'Allergies (opional)'}
            // placeholderText={heightInInchs ? 'In' : 'cm'}
            height={2}
            onChange={handleChange}
          />
          <ChildInput
            name="Disabilities"
            labelText={'Disabilities (optional)'}
            // placeholderText={heightInInchs ? 'In' : 'cm'}
            height={1}
            onChange={handleChange}
          />
        </div>
        <div className="mb-10">
          <h3 className="font-outfit font-bold my-2">
            Personal documents Details
          </h3>
          <ChildDocInput
            name="Iicture"
            labelText={'Upload picture (optional)'}
            height={1}
            onChange={handleChange}
          />
          <ChildDocInput
            name="Birth Certificate"
            labelText={'Upload Birth Certificate'}
            height={1}
            onChange={handleChange}
          />
          <ChildDocInput
            name="Medical Document"
            labelText={'Upload medical document'}
            height={1}
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          // onClick={handleNextStep}
          className="w-full mt-4 bg-primary hover:bg-lightGreen text-white p-4 rounded-3xl hover:bg-blue-600"
        >
          Submit
        </button>
      </section>
    </motion.form>
  );
};

export default ChildForm;

// const childSchema = Schema({
//   //uid
//   fullName: {
//     type: String,
//     required: true,
//   },
//   dob: {
//     type: Date,
//     validate: {
//       validator: function (date) {
//         // Add custom date validation logic if needed
//         return date <= new Date();
//       },
//       message: 'Date of birth cannot be in the future.',
//     },
//   },
//   createdAt: {
//     type: Date,
//     default: Date.now,
//     immutable: true, // Prevent updating createdAt
//   },
//   updatedAt: {
//     type: Date,
//     default: Date.now,
//   },
// });
