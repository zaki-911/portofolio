export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  major: string;
  gpa: string;
  gpaMax: string;
  period: string;
  status: string;
  location: string;
  honors: string;
  highlights: string[];
  coursework: string[];
}

export const educationData: EducationItem = {
  id: 'itenas-bandung',
  institution: 'Institut Teknologi Nasional Bandung',
  degree: 'Bachelor of Informatics Engineering',
  major: 'Informatics Engineering (Teknik Informatika)',
  gpa: '3.76',
  gpaMax: '4.00',
  period: '2022 – 2026',
  status: 'Fresh Graduate',
  location: 'Bandung, Indonesia',
  honors: 'Distinction / High Academic Standing (GPA 3.76/4.00)',
  highlights: [
    'Conducted undergraduate thesis research applying attention-augmented YOLOv8 deep learning models for intelligent rider safety detection.',
    'Active leadership in Himpunan Mahasiswa Informatika (HIMA IF ITENAS), leading sponsorship operations and human resource development.',
    'Authored and published academic research on interactive educational game development for preschool spatial intelligence.',
  ],
  coursework: [
    'Machine Learning & Artificial Intelligence',
    'Computer Vision & Image Processing',
    'Database Systems & Advanced SQL',
    'Web Application Development',
    'Data Structures & Algorithms',
    'Software Engineering Methodologies',
  ],
};
