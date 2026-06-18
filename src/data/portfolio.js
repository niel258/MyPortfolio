export const profile = {
  name: 'Niel Evand S. Lenogon',
  initials: 'NL',
  title: 'BS Information Technology Student',
  subtitle: 'Passionate about UI/UX Design, Computer Hardware & Technology',
  email: 'Lenogonniel17@gmail.com',
  phone: '0928 789 5220',
  phoneLink: '+639287895220',
  location: 'Carmen, Davao del Norte',
  address: 'Prk 3 New Camiling, Carmen, Davao del Norte',
  photo: '/assets/profile.png',
}

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'certificates', label: 'Certificates' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]

export const aboutParagraphs = [
  'I am a dedicated Bachelor of Science in Information Technology student at Davao del Norte State College, with a strong foundation in ICT from Panabo City Senior High School. I am passionate about creating intuitive digital experiences and have hands-on knowledge in computer hardware.',
  'My interests lie at the intersection of technology and design — building solutions that are both functional and visually compelling. I continuously seek opportunities to grow my skills in UI/UX design and software development.',
]

export const skills = [
  {
    title: 'ICT & Computer Hardware',
    description: 'Assembly, troubleshooting, and maintenance of computer systems and peripherals.',
    tags: ['Hardware', 'Networking', 'Troubleshooting'],
    icon: 'monitor',
  },
  {
    title: 'UI/UX Design',
    description: 'Designing clean, user-centered interfaces with modern design tools.',
    tags: ['Figma', 'Canva', 'Wireframing'],
    icon: 'layers',
  },
  {
    title: 'Communication',
    description: 'Effective verbal and written communication for team collaboration and presentations.',
    tags: ['Teamwork', 'Presentation', 'Collaboration'],
    icon: 'message',
  },
]

export const projects = [
  {
    title: 'Hospital Payroll and Attendance System',
    subtitle: 'For Effective Hospital Operations',
    description:
      'A web-based management system for Polymedic Hospital that digitizes employee attendance tracking and payroll processing — replacing manual logbooks and punch cards to ensure accurate salaries, regulatory compliance, and improved operational efficiency.',
    fullDescription:
      'A hospital cannot function optimally without smooth operating systems. The correct attendance information is necessary for an accurate payroll calculation. This way, employees receive their salary on time and accurately. It also helps ensure that hospital employees are all on the same page, aligned with institutional and regulatory policies. However, many hospitals continue to rely on manual systems for tracking attendance, including punch cards, logbooks, and automated reminders. Practices like these can create honor fraud and waste. Ultimately, these factors compromise the hospital\'s efficiency and the quality of care it delivers. Health care services provided, this results in incorrect payroll calculations, delayed salary processing, and lower employee satisfaction.',
    tags: ['Web Application', 'Payroll', 'Attendance', 'Admin Dashboard'],
    images: [
      { src: '/assets/projects/hospital-login.png', caption: 'Admin & HR Login Portal' },
      { src: '/assets/projects/hospital-dashboard.png', caption: 'Admin Dashboard with Analytics' },
    ],
    featured: true,
  },
  {
    title: 'Portfolio Website',
    description: 'A responsive personal portfolio built with Vue.js showcasing my skills, projects, and professional background.',
    tags: ['Vue.js', 'CSS', 'JavaScript'],
    image: null,
    featured: false,
  },
]

export const certificates = [
  {
    title: 'Advanced Seminar Series — Day 2',
    topic: 'The Power of Color in Graphic Design: Theory, Psychology, and Practice',
    type: 'Certificate of Completion',
    institution: 'Davao del Norte State College',
    date: 'November 5, 2025',
    venue: 'DN State College Gymnasium',
    image: '/assets/certs/seminar-day2.png',
  },
  {
    title: 'Advanced Seminar Series — Day 1',
    topic: 'Journey from Science Practitioner to Information Technology Specialist',
    type: 'Certificate of Completion',
    institution: 'Davao del Norte State College',
    date: 'October 8, 2025',
    venue: 'Virtual Session via Microsoft Teams',
    image: '/assets/certs/seminar-day1.png',
  },
  {
    title: 'Test Interpretation & Internship Etiquette',
    topic: '3K Session "Kwentuhan, Kumustahan at Kahalagahan" and Talk on Internship Etiquette for OJT Students',
    type: 'Certificate of Participation',
    institution: 'Davao del Norte State College',
    date: 'September 15, 2025',
    venue: 'Microsoft Teams',
    image: '/assets/certs/participation-ojt.png',
  },
]

export const experience = [
  {
    date: '2025 – Present',
    title: 'Front End Developer',
    organization: 'Nehemiah Solutions Corporation',
    description:
      'Develop and maintain responsive user interfaces for web applications, collaborating with the team to deliver clean, accessible, and user-centered front-end experiences.',
  },
]

export const education = [
  { year: '2022 – Present', degree: 'Bachelor of Science in Information Technology', school: 'Davao del Norte State College' },
  { year: '2019 – 2021', degree: 'Information and Communication Technology', school: 'Panabo City Senior High School' },
  { year: '2015 – 2019', degree: 'Junior High School', school: 'Maryknoll College of Panabo Inc.' },
  { year: '2013 – 2015', degree: 'Elementary School', school: 'New Camiling Elementary School' },
  { year: '2012 – 2013', degree: 'Elementary School', school: 'Cogon Elementary School, Babak Island Garden City of Samal' },
  { year: '2009 – 2012', degree: 'Elementary School', school: 'Maryknoll College of Panabo Inc.' },
]
