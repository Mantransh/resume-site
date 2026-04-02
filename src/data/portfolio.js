export const personal = {
  name: 'Mantransh Laata',
  title: 'Full-Stack Software Engineer',
  tagline: 'Building scalable products at the intersection of great UX and robust engineering.',
  email: 'mantranshlaata01@email.com',
  phone: '7339974629',
  location: 'Churu, Rajasthan, India',
  github: 'https://github.com/Mantransh',
  linkedin: 'https://www.linkedin.com/in/mantransh-laata/',
  resumeUrl: '/resume.pdf',
  // Initials shown as avatar placeholder
  initials: 'ML',
  avatarGradient: 'from-accent/30 to-purple-500/30',
}

export const about = {
  bio: [
    `Frontend Developer and CS graduate with hands-on experience building responsive, high-performance web applications using React.js,
    Tailwind CSS, and modern JavaScript. Full-stack capable with Node.js & Express.js. Passionate about delivering clean, user-centric UI
    experiences.`,
  ],
  highlights: [
    { value: 'Fresher', label: 'Experience' },
    { value: '3+', label: 'Projects Deployed' },
    { value: '7.13', label: 'CGPA' },
    
  ],
}

export const skills = [
  {
    category: 'Frontend',
    icon: '⚡',
    items: [
      { name: 'React.js', level: 80 },
      
      { name: 'Tailwind CSS', level: 65 },
      
    ],
  },
  {
    category: 'Backend',
    icon: '🔧',
    items: [
      { name: 'Node.js / Express', level: 50 },
      { name: 'FastAPI', level: 60 },
      
      { name: 'MongoDB', level: 55 },
    ],
  },
  
  {
    category: 'Tools & Practices',
    icon: '🛠',
    items: [
      { name: 'Git / GitHub', level: 66 },
      { name: 'Agile / Scrum', level: 60 },
      { name: 'System Design', level: 30 },
      { name: 'Technical Writing', level: 78 },
    ],
  },
]

export const techBadges = [
  'JavaScript', 'React', 'Tailwind', 'Node.js',
  'Express', 'MongoDB', 'CSS', 
   'C++',
]

export const experience = [
  {
    role: 'Software Development Engineer Intern',
    company: 'Bluestock',
    companyUrl: 'https://bluestock.in',
    duration: 'Aug 2025 — Sept 2025',
    location: 'Pune (Remote)',
    type: 'Full-time',
    description: 'Leading frontend infrastructure for the deployment platform serving 1M+ developers.',
    achievements: [
      `Developed and delivered 10+ reusable UI/UX-focused frontend components using React.js and Tailwind CSS, contributing
        to the company’s core product within an Agile team environment. Participated in Scrum ceremonies including sprint planning and daily standups, translating UI/UX design requirements into
        responsive, pixel-accurate interfaces. Collaborated with senior developers through code reviews and pull requests following Git-based version control workflows
        and industry-standard branching strategies. Applied component-based architecture principles to write clean, reusable, and maintainable code aligned with production
        standards.`,
    ],
  },
]

export const projects = [
  {
    title: 'Video Splitter',
    description: ' Built a full-stack web app enabling users to upload videos and auto-split them into 45–60 sec short-form clips, with a responsive React.js + Tailwind CSS frontend and intuitive multi-step upload flow.',
    techStack: ['React', 'Node.Js', 'Express', 'Tailwind', 'FFmpeg', 'Multer'],
    github: 'https://github.com/Mantransh/video-splitter',
    live: 'https://video-splitter-zeta.vercel.app/',
    featured: true,
    stars: '3.2k',
    color: 'from-accent/20 to-teal-500/10',
  },
  
  {
    title: 'Cuisine Quest',
    description: ' Built a fully responsive recipe discovery app with real-time search and filtering powered by the Spoonacular API, enabling users to explore recipes by cuisine type.',
    techStack: ['React', 'React Router', 'Spoonacular API', 'Styled Components'],
    github: 'https://github.com/Mantransh/cuisine-quest',
    live: 'https://cuisine-quest-dun.vercel.app/',
    featured: true,
    stars: '892',
    color: 'from-orange-500/20 to-yellow-500/10',
  },
  {
    title: 'Tic tak Toe',
    description: 'CLI tool for scaffolding full-stack projects with opinionated defaults — ESLint, Prettier, CI/CD pipelines, Docker, and more — in under 30 seconds.',
    techStack: ['JavaScript', 'HTML', 'CSS'],
    github: 'https://github.com/Mantransh/tic-tac-toe',
    live: null,
    featured: false,
    stars: '654',
    color: 'from-blue-500/20 to-cyan-500/10',
  },
  
]

export const education = [
  {
    degree: 'B.S. Computer Science',
    school: 'Chandigarh University, Mohali',
    duration: '2021 — 2025',
    gpa: '7.13 / 10',
    description: ' Four-year undergraduate engineering program focused on computer systems, software, and emerging technologies, preparing students for careers in IT, software development, and related fields.',
    coursework: ['DS', 'Operating Systems', 'Distributed Systems', 'Algorithms', 'ML Fundamentals'],
  },
]

export const certifications = [
  { name: 'ReactJS Course', issuer: 'Geeks for Geeks', year: '2026' },
  { name: 'Principles of UX/UI Design', issuer: 'Coursera', year: '2024' },
]
