export interface PersonalData {
  name: string;
  shortName: string;
  logo: string;
  tagline: string;
  headlineIntro: string;
  location: string;
  country: string;
  status: string;
  roles: string[];
  bio: string;
  aboutStory: {
    lead: string;
    paragraphs: string[];
  };
  metrics: {
    label: string;
    value: string;
    description: string;
  }[];
  socials: {
    name: string;
    url: string;
    icon: string;
    handle: string;
  }[];
  cvUrl: string;
}

export const personalData: PersonalData = {
  name: 'Muhammad Zaki',
  shortName: 'Zaki',
  logo: 'ZAKI.',
  tagline: 'Turning Data Into Intelligence, Ideas Into Impact.',
  headlineIntro: "HELLO, I'M",
  location: 'Bandung',
  country: 'Indonesia',
  status: 'Open to Opportunities',
  roles: [
    'Data Analyst',
    'Data Scientist',
    'AI Engineer',
    'Machine Learning Enthusiast',
  ],
  bio: 'I am an Informatics Engineering graduate passionate about Data Analytics, Artificial Intelligence, Machine Learning, and building technology-driven solutions.',
  aboutStory: {
    lead: 'Beyond the Code, Into the Possibilities.',
    paragraphs: [
      'I am a fresh graduate in Informatics Engineering from Institut Teknologi Nasional Bandung with a strong interest in Data Science, Machine Learning, Artificial Intelligence, Data Analytics, and Web Development.',
      'Throughout my academic journey and organizational experiences, I have developed practical skills in building machine learning models, analyzing data, developing web-based applications, and implementing IoT solutions.',
      'I enjoy exploring new technologies, solving complex problems, and transforming ideas into meaningful digital solutions.',
    ],
  },
  metrics: [
    {
      label: 'GPA',
      value: '3.76',
      description: 'Bachelor of Informatics Engineering (ITENAS Bandung)',
    },
    {
      label: 'Core Pillars',
      value: '4+',
      description: 'Data Analytics, ML/AI, Web Engineering & IoT Solutions',
    },
    {
      label: 'Industry Certifications',
      value: '8',
      description: 'NVIDIA, HCIA-AI, Komdigi, Dibimbing, DSF & RevoU',
    },
    {
      label: 'Team Leadership',
      value: '20',
      description: 'Staff members coordinated across national event operations',
    },
  ],
  socials: [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/muhammadzakimahranmufid',
      icon: 'linkedin',
      handle: 'linkedin.com/in/muhammadzakimahranmufid',
    },
    {
      name: 'GitHub',
      url: 'https://github.com/muhammad-zaki',
      icon: 'github',
      handle: 'github.com/muhammad-zaki',
    },
    {
      name: 'Email',
      url: 'mailto:contact@muhammadzaki.dev',
      icon: 'mail',
      handle: 'contact@muhammadzaki.dev',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/zakimfd_/',
      icon: 'instagram',
      handle: '@zakimfd_',
    },
  ],
  cvUrl: '/cv/Muhammad-Zaki-CV.pdf',
};
