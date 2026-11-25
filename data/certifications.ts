export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  issuerShort: string;
  category: 'AI & Data' | 'Deep Learning' | 'Software & DevOps' | 'Leadership';
  year: string;
  description: string;
  verificationBadge: string;
  certificateUrl?: string;
}

export const certificationsData: CertificationItem[] = [
  {
    id: 'hcia-ai',
    title: 'HCIA-AI',
    issuer: 'Fresh Graduate Academy, Digital Talent Scholarship 2025',
    issuerShort: 'FGA DTS 2025',
    category: 'AI & Data',
    year: '2025',
    description: 'Comprehensive certification in Huawei Certified ICT Associate - Artificial Intelligence concepts, algorithms, frameworks, and architecture.',
    verificationBadge: 'Verified Credential',
  },
  {
    id: 'nvidia-deep-learning',
    title: 'Fundamentals of Deep Learning',
    issuer: 'NVIDIA Deep Learning Institute (DLI)',
    issuerShort: 'NVIDIA',
    category: 'Deep Learning',
    year: '2024',
    description: 'Hands-on neural network design, computer vision architectures, GPU accelerated training, and transfer learning workflows.',
    verificationBadge: 'Verified Credential',
  },
  {
    id: 'data-engineer-dsf',
    title: 'Data Engineer',
    issuer: 'DSF 49.0',
    issuerShort: 'DSF',
    category: 'AI & Data',
    year: '2024',
    description: 'Data ingestion, ETL pipeline development, data warehouse fundamentals, and scalable analytical processing.',
    verificationBadge: 'Verified Credential',
  },
  {
    id: 'ai-engineer-komdigi',
    title: 'AI Engineer for Millennials',
    issuer: 'Kementerian Komunikasi dan Digital (Komdigi)',
    issuerShort: 'Komdigi',
    category: 'AI & Data',
    year: '2024',
    description: 'Applied artificial intelligence engineering, machine learning pipelines, and societal tech implementation programs.',
    verificationBadge: 'Government Verified',
  },
  {
    id: 'devops-dibimbing',
    title: 'DevOps & System Engineering',
    issuer: 'Dibimbing.id',
    issuerShort: 'Dibimbing',
    category: 'Software & DevOps',
    year: '2024',
    description: 'Continuous Integration & Deployment (CI/CD), containerization principles, server configuration, and infrastructure monitoring.',
    verificationBadge: 'Verified Credential',
  },
  {
    id: 'ds-ai-dibimbing',
    title: 'Data Science & AI Machine Learning',
    issuer: 'Dibimbing.id',
    issuerShort: 'Dibimbing',
    category: 'AI & Data',
    year: '2024',
    description: 'End-to-end data science lifecycle, feature engineering, predictive modeling, and model evaluation metrics.',
    verificationBadge: 'Verified Credential',
  },
  {
    id: 'intro-data-analytics-revou',
    title: 'Introduction to Data Analytics',
    issuer: 'RevoU',
    issuerShort: 'RevoU',
    category: 'AI & Data',
    year: '2023',
    description: 'Exploratory data analysis, business metric calculation, spreadsheet analytics, and data-driven presentation.',
    verificationBadge: 'Verified Credential',
  },
  {
    id: 'public-speaking-komdigi',
    title: 'Public Speaking for Young Leaders',
    issuer: 'Kementerian Komunikasi dan Digital (Komdigi)',
    issuerShort: 'Komdigi',
    category: 'Leadership',
    year: '2023',
    description: 'Executive communication, persuasive pitching, stakeholder engagement, and leadership articulation.',
    verificationBadge: 'Government Verified',
  },
];
