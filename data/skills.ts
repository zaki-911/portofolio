export interface SkillCategory {
  id: string;
  name: string;
  shortDescription: string;
  iconName: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'programming-languages',
    name: 'Programming Languages',
    shortDescription: 'Core computational languages for analytical scripts, backend services, and algorithms.',
    iconName: 'code',
    skills: ['Python', 'JavaScript', 'PHP', 'SQL'],
  },
  {
    id: 'data-analytics',
    name: 'Data Analytics',
    shortDescription: 'Uncovering patterns, purifying raw records, and communicating actionable insights.',
    iconName: 'bar-chart-3',
    skills: [
      'Data Cleaning',
      'Exploratory Data Analysis',
      'Data Visualization',
      'Statistical Analysis',
      'Data Interpretation',
    ],
  },
  {
    id: 'data-science-ml',
    name: 'Data Science & Machine Learning',
    shortDescription: 'Mathematical modeling, predictive pipelines, and computer vision architectures.',
    iconName: 'brain',
    skills: [
      'Machine Learning',
      'Deep Learning',
      'Computer Vision',
      'YOLOv8',
      'Model Evaluation',
    ],
  },
  {
    id: 'ai-engineering',
    name: 'AI Engineering',
    shortDescription: 'Building, training, and deploying neural networks and intelligent camera vision systems.',
    iconName: 'cpu',
    skills: [
      'Artificial Intelligence',
      'AI Development',
      'TensorFlow',
      'PyTorch',
      'Ultralytics',
      'OpenCV',
    ],
  },
  {
    id: 'web-development',
    name: 'Web Development',
    shortDescription: 'Full-stack web architecture, API design, secured auth flows, and relational schemas.',
    iconName: 'globe',
    skills: [
      'React.js',
      'Next.js',
      'Node.js',
      'Express.js',
      'REST API',
      'PostgreSQL',
      'JWT',
    ],
  },
  {
    id: 'tools-platforms',
    name: 'Tools & Platforms',
    shortDescription: 'Version control, collaborative development, cloud notebooks, and design handoff.',
    iconName: 'wrench',
    skills: [
      'Git',
      'GitHub',
      'Google Colab',
      'Jupyter Notebook',
      'Visual Studio Code',
      'Figma',
    ],
  },
];
