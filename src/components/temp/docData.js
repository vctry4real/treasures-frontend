const ratingTags = [
  {
    competent: {
      title: 'Technically Competent',
      positive: true,
    },
  },
  {
    problemSolver: {
      title: 'Problem Solver',
      positive: true,
    },
  },
  {
    late: {
      title: 'Not Punctual',
      positive: false,
    },
  },
  {
    poorCommunicator: {
      title: 'Poor Communication',
      positive: false,
    },
  },
];

const userReviews = [
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
    position: 'Surgeon',
    Bio: "I'm Dr. Diane Oratokhai, your dedicated Senior Pediatrician at Helium Health. With a wealth of experience in pediatric care and a passion for ensuring every child thrives, I'm here to guide you on your parenting journey. Your child's well-being is my top priority!",
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
