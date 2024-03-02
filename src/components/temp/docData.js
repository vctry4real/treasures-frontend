const docTypes = [
  'Physician',
  'Gynecologist',
  'Dentist',
  'Dermatologist',
  'Gastroenterologist',
  'Hematologist',
  'Ophthalmologist',
  'Cardiologist',
  'Doctor of osteopathy',
  'Endocrinologist',
  'Internist',
  'Neurologist',
  'Physician Assistant',
  'Pulmonologists',
  'Radiologist',
  'Emergency Medicine',
  'Nephrologist',
  'Otolaryngologist',
  'Podiatrist',
  'Surgeon',
  'Neurosurgeon',
  'Allergist',
  'Anaesthesiologist',
];

const bios = [
  `As a Physician, I am dedicated to providing comprehensive medical care to patients, focusing on diagnosis, treatment, and prevention of various illnesses and conditions.`,
  `Specializing as a Gynecologist, I offer personalized care for women's health, addressing reproductive health concerns, pregnancy, and gynecological disorders with compassion and expertise.`,
  `As a Dentist, my mission is to promote oral health and wellness, offering preventive care, restorative treatments, and cosmetic dentistry services to patients of all ages.`,
  `With expertise as a Dermatologist, I provide specialized care for skin, hair, and nail conditions, offering advanced treatments and cosmetic procedures to enhance skin health and appearance.`,
  `As a Gastroenterologist, I specialize in diagnosing and treating disorders of the digestive system, offering comprehensive care for conditions such as gastrointestinal diseases and liver disorders.`,
  `As a Hematologist, I am dedicated to the diagnosis and treatment of blood disorders, providing personalized care for conditions such as anemia, leukemia, and blood clotting disorders.`,
  `Specializing as an Ophthalmologist, I offer expert eye care services, including routine eye exams, vision correction, and treatment for eye diseases and conditions to help patients maintain optimal eye health.`,
  `As a Cardiologist, I specialize in diagnosing and treating heart conditions, offering comprehensive cardiac care, including preventive services, diagnostic tests, and treatment options for cardiovascular diseases.`,
  `As a Doctor of Osteopathy, I focus on holistic healthcare, emphasizing the interconnection of the body's systems and the importance of preventive care, manual therapy, and lifestyle modifications for overall wellness.`,
  `Specializing as an Endocrinologist, I offer expertise in managing hormonal imbalances and endocrine disorders, providing personalized care for conditions such as diabetes, thyroid disorders, and hormonal fluctuations.`,
  `As an Internist, I provide primary care services for adults, offering comprehensive evaluations, preventive screenings, and management of chronic conditions to promote overall health and wellness.`,
  `As a Neurologist, I specialize in diagnosing and treating disorders of the nervous system, offering expert care for conditions such as epilepsy, multiple sclerosis, and stroke with a focus on improving quality of life.`,
  `As a Physician Assistant, I work collaboratively with healthcare teams to provide patient care, offering diagnostic assessments, treatment plans, and preventive services to promote health and well-being.`,
  `Specializing as a Pulmonologist, I offer expertise in diagnosing and treating respiratory conditions, including asthma, COPD, and lung diseases, with a focus on optimizing lung function and improving respiratory health.`,
  `As a Radiologist, I specialize in medical imaging and interpretation, providing diagnostic evaluations and imaging-guided procedures to assist in the diagnosis and treatment of various medical conditions.`,
  `As an Emergency Medicine specialist, I am dedicated to providing urgent medical care in emergency situations, offering rapid assessment, stabilization, and treatment for patients with acute illnesses and injuries.`,
  `As a Nephrologist, I specialize in kidney care, offering expertise in diagnosing and managing kidney disorders, including chronic kidney disease, kidney stones, and kidney failure, with a focus on preserving kidney function and improving outcomes.`,
  `Specializing as an Otolaryngologist, I offer expert care for ear, nose, and throat conditions, providing diagnosis and treatment for issues such as sinusitis, hearing loss, and throat disorders with a focus on improving quality of life.`,
  `As a Podiatrist, I specialize in foot and ankle care, offering comprehensive services for conditions such as foot pain, sports injuries, and diabetic foot care, with a focus on promoting mobility and preventing complications.`,
  `As a Surgeon, I specialize in surgical interventions, offering expertise in a wide range of procedures to treat injuries, diseases, and conditions, with a commitment to delivering safe and effective surgical care.`,
  `Specializing as a Neurosurgeon, I offer specialized surgical care for conditions affecting the brain, spine, and nervous system, providing expert treatment for tumors, spinal disorders, and neurological injuries with a focus on improving patient outcomes.`,
  `As an Allergist, I specialize in diagnosing and treating allergies and immune system disorders, offering personalized care for conditions such as asthma, hay fever, and allergic reactions with a focus on symptom management and allergy prevention.`,
  `As an Anesthesiologist, I specialize in anesthesia and pain management, providing expert care during surgical procedures and managing pain before, during, and after surgery to ensure patient comfort and safety.`,
];

// create tag index variable
// let tagIndex = 0;

// Create doc name variable for review personalization
let docNameHolder = '';

//  Create an empty dictionary to store the mappings
const doc_dict = {};

// # Iterate over the elements of doc1 and doc2 simultaneously
docTypes.map((key, index) => {
  doc_dict[key] = bios[index];
});

// Content holder
let reviewsContent = [];

// Function to generate a random docs
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to generate a random date between two dates
function getRandomDate(start, end) {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
}

// Array of reviewer types
const userTypes = ['parent', 'steward'];

// Array of male and female names
const maleNames = [
  'John',
  'Michael',
  'Richard',
  'James',
  'David',
  'Richard',
  'Joseph',
  'Thomas',
  'Charles',
  'Daniel',
  'Peter',
  'Wilson',
  'Tunde',
];
const femaleNames = [
  'Mary',
  'Jennifer',
  'Patricia',
  'Linda',
  'Elizabeth',
  'Barbara',
  'Susan',
  'Jessica',
  'Sarah',
  'Karen',
  'Motunrayo',
  'Faria',
  'Cynthia',
];

const surnames = [
  'Okafor',
  'Ogunleye',
  'Okeke',
  'Adewale',
  'Adeleke',
  'Smith',
  'Johnson',
  'Williams',
  'Jones',
  'Brown',
  'Miller',
  'Wilson',
  'Moore',
  'Taylor',
  'Moore',
];

// Array of titles, types, positions, and hospitals
const titles = ['Dr', 'Dr', 'Dr', 'Dr', 'Dr', 'Dr', 'Dr', 'Dr', 'Dr', 'Dr'];
const types = [
  'Neurosurgeon',
  'Cardiologist',
  'Pediatrician',
  'Dermatologist',
  'Orthopedic Surgeon',
  'Oncologist',
  'Gynecologist',
  'Urologist',
  'Psychiatrist',
  'Endocrinologist',
];
const positions = [
  'Head Surgeon',
  'Lead Physician',
  'Consultant',
  'Senior Specialist',
  'Chief of Staff',
  'Attending Physician',
  'Resident Physician',
  'Fellow',
  'Clinical Instructor',
  'Medical Director',
];
const hospitals = [
  'Helium Health',
  'Oxygen Medical Center',
  'Pulse Hospital',
  'MediCare Clinic',
  'Nova Health Center',
  'LifeCare Hospital',
  'Wellness Clinic',
  'Evergreen Medical Group',
  'HealthPoint Hospital',
  'MediClinic',
];

const ratings = [1, 2, 3, 4, 5];
const contentTags = [
  { title: 'Good Communication', positive: true },
  { title: 'Problem Solver', positive: true },
  { title: 'Knowledgeable', positive: true },
  { title: 'Compassionate', positive: true },
  { title: 'Thorough', positive: true },
  { title: 'Good Communication', positive: false },
  { title: 'Problem Solver', positive: false },
  { title: 'Knowledgeable', positive: false },
  { title: 'Compassionate', positive: false },
  { title: 'Thorough', positive: false },
];

// Generate list of doctors
let doctors = [];
let users = [];
let reviews = [];

// select random tags
function selectTags(numTags) {
  let selectTags = [];
  let selectableTags = range(0, contentTags.length - 1);

  range(0, numTags).map((val, k) => {
    if (selectableTags.length > 1) {
      let index = getRandomInt(0, selectableTags.length - 1);
      selectTags.push(contentTags[selectableTags[index]]);
      selectableTags.splice(index, 1);
    } else if (selectableTags.length == 1) {
      selectTags.push(contentTags[0]);
      return;
    } else {
      return;
    }
  });
  return selectTags;
}

// minimum of 5 users
function generateUser(count) {
  for (let i = 1; i <= count; i++) {
    const id = i;
    const gender = i % 2 === 0 ? 'Male' : 'Female';
    const surname = surnames[getRandomInt(0, surnames.length - 1)];
    const firstName =
      gender === 'Male'
        ? `${maleNames[getRandomInt(0, maleNames.length - 1)]}`
        : `${femaleNames[getRandomInt(0, femaleNames.length - 1)]}`;
    const fullName = firstName + ' ' + surname;
    const linkImg =
      gender === 'Male' ? '/images/boy-yellow.svg' : '/images/girl-pink.svg';
    const email = `${fullName.toLowerCase().replace(/\s+/g, '.')}.@ggmail.toLowerCase().replace(/\s+/g, '')}.com`;

    users.push({
      id,
      fullName,
      email,
      type: 'Parent',
    });
  }
}

function generateDoc(count) {
  for (let i = 1; i <= count; i++) {
    const id = i;
    const gender = i % 2 === 0 ? 'Male' : 'Female';
    const surname = surnames[getRandomInt(0, surnames.length - 1)];
    const firstName =
      gender === 'Male'
        ? `${maleNames[getRandomInt(0, maleNames.length - 1)]}`
        : `${femaleNames[getRandomInt(0, femaleNames.length - 1)]}`;
    const fullName = firstName + ' ' + surname;
    const title = titles[getRandomInt(0, 9)];
    const type = types[getRandomInt(0, 9)];
    const position = positions[getRandomInt(0, 9)];
    const hospital = hospitals[getRandomInt(0, 9)];
    const yearsExperience = getRandomInt(2, 30);
    const bio = `I'm Dr. ${fullName}, your dedicated ${type} at ${hospital}. With a wealth of experience in medical care and a passion for ensuring every patient thrives, I'm here to guide you on your healthcare journey. Your well-being is my top priority!`;
    const linkImg =
      gender === 'Male' ? '/images/boy-yellow.svg' : '/images/girl-pink.svg';
    const totalMinutes = getRandomInt(500, 1500);
    const sessionsCompleted = getRandomInt(50, 200);
    const averageAttendance = getRandomInt(80, 100).toFixed(1);
    const reviews = getRandomInt(5, 50);
    const rating = (Math.random() * (5 - 3) + 3).toFixed(1);
    const email = `${fullName.toLowerCase().replace(/\s+/g, '.')}.@${hospital.toLowerCase().replace(/\s+/g, '')}.com`;

    const day = getRandomInt(22, 31); // Random day from 22nd Feb to end of March
    const hour = getRandomInt(8, 22); // Random hour between 8 and 22

    const takenSlot = [
      { dateTime: new Date(2024, 2, day, hour), status: 'unavailable' },
      {
        startTime: '10:00',
        endTime: '11:00',
        status: 'booked',
        // bookedBy: {},
      },
    ];

    doctors.push({
      id,
      fullName,
      title,
      gender,
      type,
      position,
      hospital,
      yearsExperience,
      bio,
      linkImg,
      totalMinutes,
      sessionsCompleted,
      averageAttendance,
      reviews,
      rating,
      email,
      takenSlot,
    });
  }
}

// function range(start, end) {
//   // yield start;
//   // if (start === stop) return;
//   // yield range(start++, end)

//   // function range(start, end) {
//   if (start> end) {
//     return [];
//   } (start === end) {
//     return [start];
//   }
//   return [start, ...range(start + 1, end)];
//   // }
// }
// range(0, 4);

function range(start, end) {
  if (start > end - 1) {
    return [];
  }
  return [start, ...range(start + 1, end)];
}

// Function to generate a random review object
function reviewsDocList(numReviewedDocs, numReviewsPerDoc) {
  range(0, numReviewedDocs).map((v, k) => {
    range(0, numReviewsPerDoc).map((i, idx) => {
      generateRandomReview(v);
    });
    // for (const i of range(0, reviewsPerDoc)) {
    //   console.log(i, v);
    //   generateRandomReview(i);
    // }
  });
}

function generateRandomReview(doctorId) {
  const selectUser = users[getRandomInt(0, users.length - 1)];
  const uid = Math.floor(Math.random() * 1000000); // Generate a random unique ID for the review
  const docId = doctorId; // Assign the doctor's ID to the review
  docNameHolder = doctors[doctorId].fullName.split(' ')[0];

  // reviews sample
  reviewsContent = [
    `Exceptional session! Dr. ${docNameHolder} provided thorough insights, answered all my questions, and made us feel genuinely cared for. Truly grateful for the expertise and compassion. 😊🙂🤭`,
    `Great experience with Dr. ${docNameHolder} ! Provided clear explanations and helpful recommendations. Highly recommend! 👍👏`,
    `Dr. ${docNameHolder} was very knowledgeable and attentive. Took the time to understand my concerns and provided excellent guidance. Thank you!`,
    `Disappointing experience. Dr. ${docNameHolder} seemed disinterested and rushed through the appointment. Would not recommend.`,
    `Average session. Dr. ${docNameHolder} provided basic information but lacked depth in addressing my concerns.`,
    `Dr. ${docNameHolder} is an excellent physician. He listened carefully to my concerns and provided clear explanations for my condition.`,
    `I highly recommend Dr. ${docNameHolder}. He was very knowledgeable and compassionate during my visit.`,
    `I had a great experience with Dr. ${docNameHolder}. She was thorough in her examination and took the time to address all of my questions.`,
    `Dr. ${docNameHolder} is an outstanding dermatologist. Her treatment plan significantly improved my skin condition.`,
    `I am grateful to Dr. ${docNameHolder} for his expertise in gastroenterology. He helped me manage my digestive issues effectively.`,
    `Dr. ${docNameHolder} is a skilled surgeon. I felt confident in her abilities and had a successful surgical outcome.`,
    `I had a positive experience with Dr. ${docNameHolder}, my ophthalmologist. He was attentive and provided me with personalized care.}`,
  ];

  const contentIndex = Math.floor(Math.random() * reviewsContent.length); // Select a random content from the array
  const rating = getRandomInt(1, 5); // Select a random rating from the array
  const docEmail = doctors[doctorId].email;
  const userName = selectUser.fullName;
  const content = reviewsContent[contentIndex];
  // console.log(doctors[doctorId].fullName.split(' ')[0]);
  // console.log(content);
  const userEmail = selectUser.email;
  const userId = selectUser.id;
  const reviewTags = selectTags(2);
  const createdAt = new Date(
    new Date().setDate(new Date().getDate() + getRandomInt(0, 7))
  );

  reviews.push({
    uid,
    docId,
    docEmail,
    userEmail,
    content,
    rating,
    userId, // Example user ID
    userName,
    userType: 'Parent',
    reviewTags,
    createdAt,
  });
  // return reviews;
}
// return;

//Generate data
function GenerateData({
  numDocs,
  numUsers,
  numReviewedDocs,
  numReviewsPerDoc,
}) {
  doctors = [];
  users = [];
  reviews = [];

  // generateDoc(numDocs);
  // generateUser(numUsers);
  // reviewsDocList(numReviewedDocs, numReviewsPerDoc);

  new Promise((res) => {
    generateDoc(numDocs);
  })
    .then(generateUser(numUsers))
    .then(reviewsDocList(numReviewedDocs, numReviewsPerDoc));

  //get email random email
  const selectedDocEmail = doctors[getRandomInt(0, numReviewedDocs)].email;
  // const currentReviewer = users[]
  console.log(selectedDocEmail);

  // search and retieve review  by email
  const docReviews = reviews.filter(
    (review, key) => review.docEmail === selectedDocEmail
  );

  // console.log('Are they thesmae', docReviews, pickedDocEmail);

  const pickedDoc = doctors.find((doc, key) => doc.email === selectedDocEmail);

  // return [pickedDoc, pickedReview, doctors, users, reviews];
  return {
    docReviews: docReviews,
    selectedDoc: pickedDoc,
    doctors: doctors,
    users: users,
    reviews: reviews,
  };
}

export default GenerateData;

// rating button tags
const ratingTags = [
  {
    title: 'Technically Competent',
    positive: true,
  },
  {
    title: 'Problem Solver',
    positive: true,
  },
  {
    title: 'Not Punctual',
    positive: false,
  },
  {
    title: 'Poor Communication',
    positive: false,
  },
];

// Generate random reviews
// for (let i = 0; i < users.length; i++) {
//   const radDoc = doctors.getRandomInt(0, doctors.length - 1)['email'];
//   const userName = doctors.getRandomInt(0, doctors.length - 1)['name'];
//   const radDocEmail = 'Made Bukola';
//   const userType = 'Parent';
//   const review = generateRandomReview(doctor.id, userName, userType);
//   doctor.reviews = [review];
// }

// const userReviews = [
//   {
//     userId: 201,
//     name: userName,
//     commentId: 22,
//     docEmail: '',
//     userEmai: '',
//     review:
//       'Exceptional session! Dr. Charles provided thorough insights, answered all my questions, and made us feel genuinely cared for. Truly grateful for the expertise and compassion. 😊🙂🤭',
//     rating: 4,
//     userName: 'Made Bukola',
//     userType: 'Parent',
//     contentTags: [
//       {
//         poorCommunicator: {
//           title: 'Poor Communication',
//           positive: false,
//         },
//       },
//       {
//         problemSolver: {
//           title: 'Problem Solver',
//           positive: true,
//         },
//       },
//     ],
//   },

//   {
//     id: 201,
//     docId: 4,
//     content:
//       'Exceptional session! Dr. Charles provided thorough insights, answered all my questions, and made us feel genuinely cared for. Truly grateful for the expertise and compassion. 😊🙂🤭',
//     rating: 4,
//     userId: 120,
//     userName: 'Made Bukola',
//     userType: 'Parent',
//     contentTags: [
//       {
//         title: 'Poor Communication',
//         positive: false,
//       },
//       {
//         title: 'Problem Solver',
//         positive: true,
//       },
//     ],
//   },

//   {
//     id: 201,
//     docId: 4,
//     content:
//       'Exceptional session! Dr. Charles provided thorough insights, answered all my questions, and made us feel genuinely cared for. Truly grateful for the expertise and compassion. 😊🙂🤭',
//     rating: 4,
//     userId: 120,
//     userName: 'Made Bukola',
//     userType: 'Parent',
//     contentTags: [
//       {
//         poorCommunicator: {
//           title: 'Poor Communication',
//           positive: false,
//         },
//       },
//       {
//         problemSolver: {
//           title: 'Problem Solver',
//           positive: true,
//         },
//       },
//     ],
//   },

//   {
//     id: 201,
//     docId: 4,
//     content:
//       'Exceptional session! Dr. Charles provided thorough insights, answered all my questions, and made us feel genuinely cared for. Truly grateful for the expertise and compassion. 😊🙂🤭',
//     rating: 4,
//     userId: 120,
//     userName: 'Made Bukola',
//     userType: 'Parent',
//     contentTags: [
//       {
//         poorCommunicator: {
//           title: 'Poor Communication',
//           positive: false,
//         },
//       },
//       {
//         problemSolver: {
//           title: 'Problem Solver',
//           positive: true,
//         },
//       },
//     ],
//   },

//   {
//     id: 201,
//     docId: 4,
//     content:
//       'Exceptional session! Dr. Charles provided thorough insights, answered all my questions, and made us feel genuinely cared for. Truly grateful for the expertise and compassion. 😊🙂🤭',
//     rating: 4,
//     userId: 120,
//     userName: 'Made Bukola',
//     userType: 'Parent',
//     contentTags: [
//       {
//         poorCommunicator: {
//           title: 'Poor Communication',
//           positive: false,
//         },
//       },
//       {
//         problemSolver: {
//           title: 'Problem Solver',
//           positive: true,
//         },
//       },
//     ],
//   },
// ];

// const DocData = [
//   {
//     id: 1,
//     name: 'Dr Charles Asak Ejitome',
//     title: 'Dr',
//     position: 'Senior Paediatrician at Helium Health',
//     Bio: "I'm Dr. Charles Asak Ejitome, your dedicated Senior Pediatrician at Helium Health. With a wealth of experience in pediatric care and a passion for ensuring every child thrives, I'm here to guide you on your parenting journey. Your child's well-being is my top priority!",
//     linkImg: '/images/boy-yellow.svg',
//     totalMinutes: 1200,
//     sessionsCompleted: 140,
//     averageAttendace: 99.3,
//     reviewNo: 14,
//     rating: 4,
//     reviewDate: 'February 10, 2024',
//     reviews: userReviews,
//   },

//   {
//     id: 2,
//     name: 'Diane Oratokhai',
//     title: 'Dr',
//     position: 'Head Surgeon',
//     Bio: "I'm Dr. Diane Oratokhai, your dedicated Senior Pediatrician at Helium Health. With a wealth of experience in pediatric care and a passion for ensuring every child thrives, I'm here to guide you on your parenting journey. Your child's well-being is my top priority!",
//     linkImg: '/images/boy-yellow.svg',
//     totalMinutes: 1200,
//     sessionsCompleted: 140,
//     averageAttendace: 99.3,
//     reviews: 14,
//     rating: 4,
//     bookedDays: [],
//   },

//   {
//     id: 3,
//     name: 'Alice Ekpo',
//     title: 'Dr',
//     position: 'Senior Therapist at Helium Health',
//     Bio: "I'm Dr. Alice Ekpo, your dedicated Senior Pediatrician at Helium Health. With a wealth of experience in pediatric care and a passion for ensuring every child thrives, I'm here to guide you on your parenting journey. Your child's well-being is my top priority!",
//     linkImg: '/images/boy-yellow.svg',
//     totalMinutes: 1200,
//     sessionsCompleted: 140,
//     averageAttendace: 99.3,
//     reviewNo: 14,
//     rating: 4,
//     reviewDate: 'February 10, 2024',
//     reviews: [
//       {
//         id: 211,
//         docId: 3,
//         content:
//           'Exceptional session! Dr. Charles provided thorough insights, answered all my questions, and made us feel genuinely cared for. Truly grateful for the expertise and compassion. 😊🙂🤭',
//         rating: 4,
//         userId: 120,
//         userName: 'Made Bukola',
//         userType: 'Parent',
//         contentTags: [
//           {
//             poorCommunicator: {
//               title: 'Poor Communication',
//               positive: false,
//             },
//           },
//           {
//             problemSolver: {
//               title: 'Problem Solver',
//               positive: true,
//             },
//           },
//         ],
//       },
//     ],
//   },

//   {
//     id: 4,
//     name: 'Bessie Cooper',
//     title: 'Dr',
//     position: 'Senior Dermatologist at Klean Skeen',
//     Bio: "I'm Dr. Bessie Cooper, your dedicated SeniorDermatologist at Klean Skeen. With a wealth of experience in pediatric care and a passion for ensuring every child thrives, I'm here to guide you on your parenting journey. Your child's well-being is my top priority!",
//     linkImg: '/images/boy-yellow.svg',
//     totalMinutes: 1200,
//     sessionsCompleted: 140,
//     averageAttendace: 99.3,
//     reviewNo: 14,
//     rating: 4,
//     reviewDate: 'February 10, 2024',
//     reviews: userReviews,
//   },
// ];
