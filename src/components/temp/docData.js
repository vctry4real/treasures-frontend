export const ratingTags = [
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

// Array of male and female names
const maleNames = [
  'John',
  'Michael',
  'William',
  'James',
  'David',
  'Richard',
  'Joseph',
  'Thomas',
  'Charles',
  'Daniel',
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
];

const surname = [
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

// Generate list of doctors
const doctors = [];

for (let i = 1; i <= 20; i++) {
  const id = i;
  const gender = i % 2 === 0 ? 'Male' : 'Female';
  const surname = [getRandomInt(0, surname.length - 1)];
  const name =
    gender === 'Male'
      ? `${maleNames[getRandomInt(0, maleNames.length - 1)]} ${surname}`
      : `${femaleNames[getRandomInt(0, femaleNames.length - 1)]} ${surname}`;

  const userGender =
    Math.floor(Math.random() * (max - min + 1)) === 0 ? 'Male' : 'Female';
  const userSurname = [getRandomInt(0, surname.length - 1)];
  const userName =
    gender === 'Male'
      ? `${maleNames[getRandomInt(0, maleNames.length - 1)]} ${surname}`
      : `${femaleNames[getRandomInt(0, femaleNames.length - 1)]} ${surname}`;

  const title = titles[getRandomInt(0, 9)];
  const type = types[getRandomInt(0, 9)];
  const position = positions[getRandomInt(0, 9)];
  const hospital = hospitals[getRandomInt(0, 9)];
  const yearsExperience = getRandomInt(1, 30);
  const bio = `I'm Dr. ${name}, your dedicated ${type} at ${hospital}. With a wealth of experience in medical care and a passion for ensuring every patient thrives, I'm here to guide you on your healthcare journey. Your well-being is my top priority!`;
  const linkImg =
    gender === 'Male' ? '/images/boy-yellow.svg' : '/images/girl-pink.svg';
  const totalMinutes = getRandomInt(500, 1500);
  const sessionsCompleted = getRandomInt(50, 200);
  const averageAttendance = getRandomInt(80, 100).toFixed(1);
  const reviews = getRandomInt(5, 50);
  const rating = (Math.random() * (5 - 3) + 3).toFixed(1);
  const email = `${name.toLowerCase().replace(/\s+/g, '.')}.@${hospital.toLowerCase().replace(/\s+/g, '')}.com`;
  const userEmail = `${name.toLowerCase().replace(/\s+/g, '.')}.@${ggmail.toLowerCase().replace(/\s+/g, '')}.com`;

  const day = getRandomInt(22, 31); // Random day from 22nd Feb to end of March
  const hour = getRandomInt(8, 22); // Random hour between 8 and 22

  const takenSlot = [
    { dateTime: new Date(2024, 2, day, hour), status: 'unavailable' },
    {
      startTime: '10:00',
      endTime: '11:00',
      status: 'booked',
      bookedBy: { userEmail },
    },
  ];

  doctors.push({
    id,
    name,
    title,
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

console.log(doctors);

const userReviews = [
  {
    userId: 201,
    commentId: 22,
    docEmail: '',
    userEmai: '',
    review:
      'Exceptional session! Dr. Charles provided thorough insights, answered all my questions, and made us feel genuinely cared for. Truly grateful for the expertise and compassion. 😊🙂🤭',
    rating: 4,
    userName: 'Made Bukola',
    userType: 'Parent',
    contentTags: [
      {
        poorCommunicator: {
          title: 'Poor Communication',
          positive: false,
        },
      },
      {
        problemSolver: {
          title: 'Problem Solver',
          positive: true,
        },
      },
    ],
  },

  {
    id: 201,
    docId: 4,
    content:
      'Exceptional session! Dr. Charles provided thorough insights, answered all my questions, and made us feel genuinely cared for. Truly grateful for the expertise and compassion. 😊🙂🤭',
    rating: 4,
    userId: 120,
    userName: 'Made Bukola',
    userType: 'Parent',
    contentTags: [
      {
        title: 'Poor Communication',
        positive: false,
      },
      {
        title: 'Problem Solver',
        positive: true,
      },
    ],
  },

  {
    id: 201,
    docId: 4,
    content:
      'Exceptional session! Dr. Charles provided thorough insights, answered all my questions, and made us feel genuinely cared for. Truly grateful for the expertise and compassion. 😊🙂🤭',
    rating: 4,
    userId: 120,
    userName: 'Made Bukola',
    userType: 'Parent',
    contentTags: [
      {
        poorCommunicator: {
          title: 'Poor Communication',
          positive: false,
        },
      },
      {
        problemSolver: {
          title: 'Problem Solver',
          positive: true,
        },
      },
    ],
  },

  {
    id: 201,
    docId: 4,
    content:
      'Exceptional session! Dr. Charles provided thorough insights, answered all my questions, and made us feel genuinely cared for. Truly grateful for the expertise and compassion. 😊🙂🤭',
    rating: 4,
    userId: 120,
    userName: 'Made Bukola',
    userType: 'Parent',
    contentTags: [
      {
        poorCommunicator: {
          title: 'Poor Communication',
          positive: false,
        },
      },
      {
        problemSolver: {
          title: 'Problem Solver',
          positive: true,
        },
      },
    ],
  },

  {
    id: 201,
    docId: 4,
    content:
      'Exceptional session! Dr. Charles provided thorough insights, answered all my questions, and made us feel genuinely cared for. Truly grateful for the expertise and compassion. 😊🙂🤭',
    rating: 4,
    userId: 120,
    userName: 'Made Bukola',
    userType: 'Parent',
    contentTags: [
      {
        poorCommunicator: {
          title: 'Poor Communication',
          positive: false,
        },
      },
      {
        problemSolver: {
          title: 'Problem Solver',
          positive: true,
        },
      },
    ],
  },
];

export const DocData = [
  {
    id: 1,
    name: 'Dr Charles Asak Ejitome',
    title: 'Dr',
    position: 'Senior Paediatrician at Helium Health',
    Bio: "I'm Dr. Charles Asak Ejitome, your dedicated Senior Pediatrician at Helium Health. With a wealth of experience in pediatric care and a passion for ensuring every child thrives, I'm here to guide you on your parenting journey. Your child's well-being is my top priority!",
    linkImg: '/images/boy-yellow.svg',
    totalMinutes: 1200,
    sessionsCompleted: 140,
    averageAttendace: 99.3,
    reviewNo: 14,
    rating: 4,
    reviewDate: 'February 10, 2024',
    reviews: userReviews,
  },

  {
    id: 2,
    name: 'Diane Oratokhai',
    title: 'Dr',
    position: 'Head Surgeon',
    Bio: "I'm Dr. Diane Oratokhai, your dedicated Senior Pediatrician at Helium Health. With a wealth of experience in pediatric care and a passion for ensuring every child thrives, I'm here to guide you on your parenting journey. Your child's well-being is my top priority!",
    linkImg: '/images/boy-yellow.svg',
    totalMinutes: 1200,
    sessionsCompleted: 140,
    averageAttendace: 99.3,
    reviews: 14,
    rating: 4,
    bookedDays: [],
  },

  {
    id: 3,
    name: 'Alice Ekpo',
    title: 'Dr',
    position: 'Senior Therapist at Helium Health',
    Bio: "I'm Dr. Alice Ekpo, your dedicated Senior Pediatrician at Helium Health. With a wealth of experience in pediatric care and a passion for ensuring every child thrives, I'm here to guide you on your parenting journey. Your child's well-being is my top priority!",
    linkImg: '/images/boy-yellow.svg',
    totalMinutes: 1200,
    sessionsCompleted: 140,
    averageAttendace: 99.3,
    reviewNo: 14,
    rating: 4,
    reviewDate: 'February 10, 2024',
    reviews: [
      {
        id: 211,
        docId: 3,
        content:
          'Exceptional session! Dr. Charles provided thorough insights, answered all my questions, and made us feel genuinely cared for. Truly grateful for the expertise and compassion. 😊🙂🤭',
        rating: 4,
        userId: 120,
        userName: 'Made Bukola',
        userType: 'Parent',
        contentTags: [
          {
            poorCommunicator: {
              title: 'Poor Communication',
              positive: false,
            },
          },
          {
            problemSolver: {
              title: 'Problem Solver',
              positive: true,
            },
          },
        ],
      },
    ],
  },

  {
    id: 4,
    name: 'Bessie Cooper',
    title: 'Dr',
    position: 'Senior Dermatologist at Klean Skeen',
    Bio: "I'm Dr. Bessie Cooper, your dedicated SeniorDermatologist at Klean Skeen. With a wealth of experience in pediatric care and a passion for ensuring every child thrives, I'm here to guide you on your parenting journey. Your child's well-being is my top priority!",
    linkImg: '/images/boy-yellow.svg',
    totalMinutes: 1200,
    sessionsCompleted: 140,
    averageAttendace: 99.3,
    reviewNo: 14,
    rating: 4,
    reviewDate: 'February 10, 2024',
    reviews: userReviews,
  },
];
