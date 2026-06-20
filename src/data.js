// ============================================
// ALL YOUR CONTENT LIVES HERE.
// ============================================
// Why keep data separate from components?
// Because when you finish a new project next month,
// you shouldn't have to touch any JSX/HTML at all —
// just copy one object in the `projects` array below
// and fill in your own details. The Projects component
// will automatically render a new card for it.

export const socials = [
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/akshaya-s-bipin/' },
  { name: 'GitHub', url: 'https://github.com/akshayasbipin' },
  // { name: 'Instagram', url: 'https://www.instagram.com/shy_milkshake_void/' },
  { name: 'LeetCode', url: 'https://leetcode.com/u/21wh1a0513/' },
  { name: 'Medium', url:'https://medium.com/@akshayasbipin' },
]

export const education = [
  {
    school: 'BVRIT Hyderabad College of Engineering for Women',
    location: 'Hyderabad, India',
    degree: 'B.Tech in Computer Science and Engineering',
    dates: 'June 2021 – June 2025',
  },
]

export const experience = [
  {
    role: 'Associate 2, AI Engineer',
    place: 'State Street Corporation',
    dates: '',
    description: '',
    skills: ['FastAPI', 'Pandas', 'GitHub', 'Postman', 'Docker', 'SQL Alchemy', 'PGAdmin', 'Large Language Models (LLMs)'],
  },
  {
    role: 'Vice President, Public Relations',
    place: 'BVRIT HYDERABAD Toastmasters Club',
    dates: '',
    description:
      'In charge of publicizing club meetings, times and themes through posters, and spreading awareness about club activities, member achievements, and special events.',
    skills: ['Social Media', 'Public Relations', 'Media Relations', 'Communication'],
  },
]

export const skillGroups = [
  {
    title: 'Programming Languages',
    items: ['Python', 'Java', 'SQL', 'C++', 'C'],
  },
  {
    title: 'Web Technologies',
    items: ['HTML', 'CSS', 'JavaScript', 'React'],
  },
  {
    title: 'Tools & Office',
    items: ['Microsoft Office', 'Power BI', 'Git', 'Docker', 'Postman'],
  },
  {
    title: 'Frameworks / Libraries',
    items: ['NumPy', 'Pandas', 'Scikit-learn', 'Matplotlib', 'Seaborn'],
  },
  {
    title: 'Database Management',
    items: ['MySQL', 'PostgreSQL'],
  },
]

// Each project is one object. To add a new one later,
// just copy a block below, change the text, and save —
// no other file needs to change.
export const projects = [
  {
    title: 'Budget Management App',
    blurb: 'A Java desktop app for tracking and analyzing personal spending, backed by a MySQL database.',
    link: 'https://github.com/Akshaya21513/Spending-Tracker',
    tags: ['Java', 'MySQL', 'Swing'],
    details: [
      'Environment: Java (NetBeans), MySQL',
      'Spending tracker to view all expenses',
      'Filter expenses by date or category',
      'Custom MySQL schema design',
      'UI built with Java Swing',
    ],
  },
  {
    title: 'AI-Enhanced Smart Plant Monitoring System',
    blurb: 'An IoT project that watches over a plant\u2019s living conditions and helps keep it healthy.',
    link: 'https://github.com/akshayasbipin/AI-Enhanced-Smart-Plant-Monitoring-System',
    tags: ['Arduino', 'Python', 'Supabase', 'Ollama'],
    details: [
      'Monitors soil moisture in real time using NodeMCU',
      'Chatbot for plant healthcare questions',
      'Predicts the right amount of soil moisture for a given plant',
      'Tech stack: Arduino IDE, Supabase, Python, Ollama',
    ],
  },
  {
    title: 'Credit Card Fraud Detection',
    blurb: 'A machine-learning model that flags potentially fraudulent transactions.',
    link: 'https://github.com/Akshaya21513/Credit_Card-Fraud-Detection',
    tags: ['Python', 'Jupyter', 'Scikit-learn'],
    details: [
      'Environment: Python, Jupyter Notebook',
      'Exploratory data analysis on transaction data',
      'Logistic regression model for classification',
      'Evaluated using standard performance metrics',
    ],
  },
  {
    title: 'Employee Login System (Laravel)',
    blurb: 'A web app for employee management with secure login and role-based access.',
    link: 'https://github.com/akshayasbipin/app-crud--draft',
    tags: ['Laravel', 'PHP', 'MySQL'],
    details: [
      'Secure login and registration',
      'Access to personal employee information',
      'Real-time notifications',
      'Role-based access control',
    ],
  },
]
