import React, { useState } from 'react';
import { MdUpload } from 'react-icons/md';

const validImageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.bmp'];
const validDocExtensions = [
  '.jpg',
  '.jpeg',
  '.png',
  '.gif',
  '.bmp',
  'pdf',
  'doc',
  'docx',
];

export const ChildInput = ({
  name,
  props,
  height,
  val,
  labelText,
  placeholderText,
  type = 'text',
  min = 0,
  max = 300,
  onChange,
}) => {
  return (
    <div className={`rounded-lg drop-shadow-lg grid grid-rows-${height}`}>
      <div>
        <label className="block mb-1 text-sm text-gray-600">
          {labelText}
          <input
            onChange={onChange}
            min={min}
            max={max}
            name={name}
            type={
              labelText === 'Height (cm)' || labelText === 'Weight (kg)'
                ? 'number'
                : ''
            }
            value={val}
            placeholder={placeholderText}
            {...(labelText !== 'Allergies' || labelText !== 'Disabilites'
              ? 'required'
              : '')}
            className="flex w-full border-2 border-gray-400 p-3 mb-2 shadow-3xl rounded-md bg-grey-800 focus:border-[#003B3B] bg-[#FAFAFA]"
          ></input>
        </label>
      </div>
    </div>
  );
};

// export default ChildInput;

export const ChildDocInput = ({
  name,
  docs = ['picture', 'birth certificate', 'medical documents'],
  data,
  path,
  fileName = 'Choose file...',
  labelText,
  placeholderText,
  multi = false,
  height = 2,
  type = 'text',
}) => {
  const [file, setFile] = useState();

  const [imagePath, setImagePath] = useState('');
  const [error, setError] = useState('');
  // const [placeholder, setPlaceholder] = useState('');
  const [isSelected, setIsSelected] = useState(0);

  const handleFileChange = async (e) => {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));

    if (file) {
      // Check if the file type is valid
      const extension = getFileExtension(file.name);
      if (validImageExtensions.includes(extension.toLowerCase())) {
        // Valid image file extension
        const path = URL.createObjectURL(file);
        setImagePath(path);
        setError('');
        setIsSelected(1);
      } else {
        // Invalid file extension
        setImagePath('');
        setError('Invalid file type. Please select an image.');
        setIsSelected(0);
        // setPlaceholder('Invalid file type. Please select an image.');
      }
    }
  };

  const getFileExtension = (fileName) => {
    if (fileName) {
      const ext = fileName.slice(((fileName.lastIndexOf('.') - 1) >>> 0) + 2);
      console.log(ext);

      return ext;
    }
    return '';
  };

  return (
    <div className={`rounded-lg drop-shadow-lg grid grid-rows-${height}`}>
      <label className="block mb-1 text-sm text-gray-600">
        {labelText}
        <div
          className="flex w-full justify-between border-2 border-gray-400 p-3 mb-2 shadow-3xl rounded-md bg-grey-800 focus:border-[#003B3B] bg-[#FAFAFA]
"
        >
          <div className="flex flex-1">
            {imagePath && isSelected === 1 ? (
              <p>{imagePath}</p>
            ) : (
              <input
                type="file"
                placeholder="Upload a file..."
                className="flex-1"
                onChange={handleFileChange}
              ></input>
            )}
          </div>
          <div className="flex-0">
            <button onClick={() => {}}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 8L6 19C6 20.1046 6.89543 21 8 21H16C17.1046 21 18 20.1046 18 19V8"
                  stroke="#003B3B"
                  strokeWidth="2"
                  strokeLinecap="square"
                  strokeLinejoin="round"
                />
                <path
                  d="M6 6H8M8 6V5C8 3.89543 8.89543 3 10 3H14C15.1046 3 16 3.89543 16 5V6M8 6H4M8 6H16M16 6H20"
                  stroke="#39D8B0"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </label>
    </div>
  );
};

// export ChildDocInput;
