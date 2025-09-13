// Portfolio data extracted from the original HTML
export const personalInfo = {
  name: 'Nithin Sri',
  greeting: 'Hi There,',
  title: 'Associate Software Developer',
  subtitle: 'Freelance Penetration Tester',
  additionalRole: 'AI&ML Researcher',
  tagline: 'I write code, break things, and then fix them (sometimes)',
  email: 'nitinjuttuka63@gmail.com',
  protonEmail: 'Purpleclaw16@proton.me',
  socialLinks: {
    github: 'https://github.com/purple-claw/',
    linkedin: 'https://www.linkedin.com/in/juttuka-sri-nithin-772461246/',
    credly: 'https://www.credly.com/users/sri-nithin-juttuka.7df42c6f',
  },
};

export const projects = [
  {
    id: 1,
    name: 'BTrack - AI Article Summarizer',
    description: 'An AI-powered article summarization tool built with React and RapidAPI integration.',
    technologies: ['React', 'RapidAPI', 'TailwindCSS'],
    liveUrl: 'https://btrack-two.vercel.app/',
    githubUrl: '',
    image: '/images/projects/btrack.png',
  },
  {
    id: 2,
    name: 'Astropedia',
    description: 'A comprehensive space exploration website with modern design and interactive features.',
    technologies: ['Website Design', 'Space', 'TailwindCSS'],
    liveUrl: 'https://astropedia.vercel.app',
    githubUrl: '',
    image: '/images/projects/astro.jpeg',
  },
  {
    id: 3,
    name: 'Mpacts.in',
    description: 'A business website developed as a freelance project with modern web technologies.',
    technologies: ['Business', 'Project', 'Freelance'],
    liveUrl: 'https://mpacts.in/',
    githubUrl: '',
    image: '/images/projects/mpacts.png',
  },
  {
    id: 4,
    name: 'VTCS Professional Website',
    description: 'A professional website with blog functionality for VTCS organization.',
    technologies: ['Website Design', 'Freelance', 'Blogs'],
    liveUrl: 'https://vtcsrao.in',
    githubUrl: '',
    image: '/images/projects/vtcs.png',
  },
  {
    id: 5,
    name: 'Fashion Recommendation System',
    description: 'Machine learning powered fashion recommendation system using CNN.',
    technologies: ['Convolutional Neural Network', 'Machine Learning', 'Python'],
    liveUrl: '',
    githubUrl: 'https://github.com/manvitha2004/Fashion-Recommendation-System-',
    image: '/images/projects/fashion.jpeg',
  },
];

export const education = [
  {
    id: 1,
    institution: 'Pragati Engineering College',
    degree: 'B.Tech in ECE',
    description: 'I Completed my Graduation in ECE from PEC. During my academic career I worked on different technologies related to core and software, System design and IOT. Completed Minors in Computer Science and Engineering with cgpa of 9',
    cgpa: '9.0',
  },
  {
    id: 2,
    institution: 'Andhra Polytechnic',
    degree: 'Diploma in ECE',
    description: 'I Completed My Technical Diploma from Andhra Polytechnic, with a strong focus on Core Skills, IOT, Networks and circuit Design Fundamentals. I Graduated with 96.75%',
    percentage: '96.75%',
  },
];

export const skills = {
  programmingLanguages: ['Python', 'Javascript', 'SQL', 'HTML&CSS', 'TailwindCSS', 'Go', 'C', 'C#', 'C++', 'PHP', 'Swift', 'Java'],
  frameworks: ['Node.JS', 'React.JS', 'Django', 'Flask', 'Vue.js'],
  libraries: ['PyTorch', 'Tensorflow', 'Keras', 'Scikit-Learn', 'Matplotlib'],
  securityTesting: ['Burp Suite', 'Metasploit', 'OWASP', 'JWT Authentication', 'Linux Hardening', 'Wireshark', 'Nessus', 'Netcat', 'Ghidra', 'SIEM Tools'],
  cloudDevOps: ['AWS', 'AWS EC2', 'AWS Cloudwatch', 'AWS Lambda', 'AWS VPC', 'AWS IAM', 'AWS RDS', 'Azure', 'Docker', 'Kubernetes', 'CI/CD (Jenkins, CircleCI, GitHub Actions)'],
  development: ['MongoDB', 'RESTFul', 'RHEL', 'Bash', 'Git', 'Microservices', 'Embedded Linux', 'Kafka', 'Servers', 'Networking'],
};

export const certifications = [
  {
    id: 1,
    name: 'Oracle APEX Cloud Developer Professional',
    issuer: 'Oracle',
    technologies: ['Oracle APEX', 'PL/SQL', 'Oracle DBMS'],
    credentialUrl: 'https://brm-certification.oracle.com/apex/f?p=1111:6:110120075677133:::::',
    image: '/images/certs/apex.png',
  },
  {
    id: 2,
    name: 'Microsoft Certified Azure AI Engineer Associate',
    issuer: 'Microsoft',
    technologies: ['Azure AI', 'Cloud', 'Generative AI'],
    credentialUrl: 'https://learn.microsoft.com/en-us/users/nithinjuttuka-2320/credentials/60e6912de6609e0e?ref=https%3A%2F%2Fwww.linkedin.com%2F',
    image: '/images/certs/azure.png',
  },
  {
    id: 3,
    name: 'AWS Academy Data Engineering',
    issuer: 'AWS',
    technologies: ['Hadoop', 'Apache Spark'],
    credentialUrl: 'https://www.credly.com/badges/dc065fed-7fc3-42b3-b2bf-f1158c53d7a0/public_url',
    image: '/images/certs/dataaws.jpg',
  },
  {
    id: 4,
    name: 'AWS Cloud Architect',
    issuer: 'AWS',
    technologies: ['AWS EC2, RDS', 'DynamoDB'],
    credentialUrl: 'https://www.credly.com/badges/cf96b606-6e96-435d-9c6c-56c57369db1d/public_url',
    image: '/images/certs/cloud_arch.jpg',
  },
  {
    id: 5,
    name: 'IBM Cloud Computing Fundamentals',
    issuer: 'IBM',
    technologies: ['IBM Cloud', 'Virtualization'],
    credentialUrl: 'https://www.credly.com/badges/b46d948b-986e-4a51-ba99-1bf5e1c8f1d5/public_url',
    image: '/images/certs/ibm.jpg',
  },
  {
    id: 6,
    name: 'Cisco Cyber Threat Management',
    issuer: 'Cisco',
    technologies: ['Incident Response', 'Wireshark'],
    credentialUrl: 'https://www.credly.com/badges/c4927eb0-180a-4eef-b5d7-646d4125dc02/public_url',
    image: '/images/certs/cyber_threat.jpg',
  },
];

export const services = [
  {
    id: 1,
    title: 'AI&ML Research',
    description: 'I actively research Artificial Intelligence and Machine Learning, focusing on integrating advanced ML models into real-world software applications. My work emphasizes not just model development but also optimizing data collection and preprocessing to ensure meaningful and actionable insights. I am committed to building AI-driven solutions that are efficient, scalable, and impactful.',
  },
  {
    id: 2,
    title: 'Web Development',
    description: 'I architect, develop, and deliver fully responsive, high-performance, and custom websites from design to deployment. I specialize in building scalable frontends using frameworks like React, Next.js, and Vue.js while seamlessly integrating robust backends with Node.js, Express, Django, and Flask. I ensure efficient database management with MongoDB, PostgreSQL, and MySQL, handling everything from development to production with a strong focus on performance, security, and scalability.',
  },
  {
    id: 3,
    title: 'Penetration Testing',
    description: 'I conduct in-depth penetration testing with a sharp focus on identifying, exploiting, and securing vulnerabilities. I take full ownership of the process—from reconnaissance to exploitation and remediation—ensuring systems, applications, and networks are fortified against real-world threats. Security isn\'t just a task for me; it\'s a commitment to excellence and resilience.',
  },
];
