export interface ExperienceItem {
  id: string;
  number: string;
  company: string;
  role: string;
  period: string;
  location: string;
  type: string;
  descriptionPoints: string[];
  technologies?: string[];
}

export const experiencesData: ExperienceItem[] = [
  {
    id: 'diskominfo-bandung',
    number: '01',
    company: 'Diskominfo Kota Bandung',
    role: 'Web Developer Intern',
    period: 'Internship Experience',
    location: 'Bandung, Indonesia',
    type: 'Government Tech Internship',
    descriptionPoints: [
      'Developed a web-based government asset management application using React.js, Node.js, Express.js, and PostgreSQL.',
      'Implemented JWT authentication and role-based access control to enforce secure multi-department authorization.',
      'Developed QR code integration, geotagging, asset lending, and digital validation workflows for physical property records.',
      'Contributed to building a structured, auditable, and efficient asset management system for public sector administration.',
    ],
    technologies: ['React.js', 'Node.js', 'Express.js', 'PostgreSQL', 'JWT', 'QR Code', 'Geotagging'],
  },
  {
    id: 'hima-sponsorship',
    number: '02',
    company: 'Himpunan Mahasiswa Informatika – ITENAS',
    role: 'Manager of Sponsorship',
    period: 'Organizational Leadership',
    location: 'Bandung, Indonesia',
    type: 'Student Organization Leadership',
    descriptionPoints: [
      'Coordinated and managed 20 staff members across all sponsorship and external partnership operations.',
      'Led sponsorship acquisition and partnership development strategies with corporate partners and public agencies.',
      'Managed sponsorship contributions involving fresh money, in-kind sponsorship, and high-reach media partnerships.',
      'Supported the execution of IDTC (Itenas Digital Transformation Competition), a national-level technology competition.',
      'Managed sponsorship initiatives and fundraising pipelines for various high-impact organizational programs.',
    ],
    technologies: ['Leadership', 'Partnership Development', 'Budget Planning', 'Stakeholder Management', 'Public Relations'],
  },
  {
    id: 'hima-psdm',
    number: '03',
    company: 'Himpunan Mahasiswa Informatika – ITENAS',
    role: 'Staff of Human Resource Development (PSDM)',
    period: 'Organizational Development',
    location: 'Bandung, Indonesia',
    type: 'Student Organization Member',
    descriptionPoints: [
      'Supported member development through structured organizational training, capacity building, and performance evaluation.',
      'Helped foster a collaborative, supportive, and growth-oriented organizational culture across student cohorts.',
      'Facilitated team orientation sessions and internal knowledge sharing for incoming department members.',
    ],
    technologies: ['HR Development', 'Organizational Training', 'Performance Evaluation', 'Team Facilitation'],
  },
];
