export interface ProjectItem {
  id: string;
  slug: string;
  number: string;
  title: string;
  category: string;
  image: string;
  shortDescription: string;
  fullDescription: string;
  highlights: string[];
  challenges: string[];
  technologies: string[];
  architecture: string[];
  featured: boolean;
  githubUrl?: string;
  liveUrl?: string;
}

export const projectsData: ProjectItem[] = [
  {
    id: 'intelligent-helmet-detection',
    slug: 'intelligent-helmet-detection-system',
    number: '01',
    title: 'Intelligent Helmet Detection System',
    category: 'Artificial Intelligence / Computer Vision / IoT',
    image: '/images/relic-1.jpg',
    shortDescription:
      'Developed an intelligent helmet detection system using YOLOv8 with attention mechanisms to identify helmet usage among motorcycle riders. Integrated ESP32-CAM and Flask Server to process detection results and activate automated warning mechanisms.',
    fullDescription:
      'The Intelligent Helmet Detection System addresses motorcycle rider safety through computer vision and edge computing. Utilizing an enhanced YOLOv8 architecture augmented with Attention Mechanisms (CBAM and ECA), the system accurately detects whether riders are wearing certified helmets even under diverse lighting, motion blur, and occluded environments. An integrated ESP32-CAM optical unit streams video frames to an inference Flask server, which performs real-time detection and sends automated signal alerts when a violation is identified.',
    highlights: [
      'Integrated Convolutional Block Attention Module (CBAM) and Efficient Channel Attention (ECA) to boost helmet feature representation.',
      'Constructed a low-latency edge-to-server pipeline utilizing ESP32-CAM microcontrollers and Python Flask server.',
      'Implemented automated warning triggers that activate visual and auditory safety alerts upon rider non-compliance.',
      'Evaluated model performance using rigorous mAP, precision, recall, and FPS benchmarks under various environmental conditions.',
    ],
    challenges: [
      'Handling occlusion when riders carry pillion passengers or wear hooded jackets under varying daylight conditions.',
      'Minimizing inference latency over local Wi-Fi streams from low-power ESP32-CAM microcontrollers to avoid false positives.',
    ],
    technologies: ['Python', 'YOLOv8', 'CBAM', 'ECA', 'OpenCV', 'Flask', 'ESP32-CAM'],
    architecture: [
      'Optical Capture: ESP32-CAM captures 720p video feeds at motorcycle check points.',
      'Streaming Ingestion: HTTP/MJPEG stream piped to Flask inference server.',
      'Neural Vision Pipeline: YOLOv8 custom-trained weights with CBAM/ECA attention filters.',
      'Actuation Logic: Real-time bounding box thresholding triggering automated physical warning pins on edge hardware.',
    ],
    featured: true,
  },
  {
    id: 'siap-asset-management',
    slug: 'siap-government-asset-management-system',
    number: '02',
    title: 'SIAP – Government Asset Management System',
    category: 'Full-Stack Web Development',
    image: '/images/relic-2.jpg',
    shortDescription:
      'Developed a web-based government asset management application during an internship at Diskominfo Kota Bandung, featuring QR code integration, geotagging, asset lending, and multi-role validation workflows.',
    fullDescription:
      'SIAP (Sistem Informasi Aset Pemerintah) is a comprehensive web-based enterprise asset management solution designed for the Bandung City Communication and Information Agency (Diskominfo Kota Bandung). The platform streamlines the entire lifecycle of governmental municipal hardware, office facilities, and digital assets. It replaces fragmented paper registries with a centralized PostgreSQL database, QR code scanning for fast inventory checks, geographic coordinate tagging, and hierarchical approval workflows for inter-department equipment loans.',
    highlights: [
      'Architected end-to-end RESTful APIs with Node.js and Express.js backed by relational PostgreSQL schemas.',
      'Designed responsive UI dashboards using React.js and Vite paired with Material Tailwind components.',
      'Implemented secure JWT-based stateless authentication with granular Role-Based Access Control (RBAC).',
      'Built a QR-code generator and reader engine for rapid field auditing and physical asset tagging.',
      'Engineered an asset lending and validation workflow with multi-level supervisor approval sign-offs.',
    ],
    challenges: [
      'Enforcing strict role permissions so that department personnel could only request or view permitted inventory categories.',
      'Ensuring reliable offline QR code generation and quick scanning response times on handheld mobile devices.',
    ],
    technologies: ['React.js', 'Vite', 'Node.js', 'Express.js', 'PostgreSQL', 'JWT', 'Material Tailwind'],
    architecture: [
      'Client Layer: React.js SPA with modular state handling and Material Tailwind UI components.',
      'Application Gateway: Express.js REST API with JWT authorization middleware and validation interceptors.',
      'Data Persistence: PostgreSQL database with indexed foreign keys for asset categories, audit trails, and logs.',
      'Integration Services: Dynamic QR Code encoding/decoding and Geolocation API coordinates mapping.',
    ],
    featured: true,
  },
  {
    id: 'educational-geometry-game',
    slug: 'educational-geometry-game-for-early-childhood',
    number: '03',
    title: 'Educational Geometry Game for Early Childhood',
    category: 'Game Development / Educational Technology',
    image: '/images/relic-3.jpg',
    shortDescription:
      'Developed an interactive educational game using Unity and a Tracing-and-Matching approach to introduce geometric shapes to early childhood students.',
    fullDescription:
      'Created as an interactive educational initiative for early childhood students (PAUD Yayasan APII), this interactive game harnesses the Unity game engine and C# scripting to teach geometric 2D shapes through multisensory interaction. Utilizing an intuitive Tracing-and-Matching instructional method, children trace shape contours with continuous feedback and match polygons with everyday real-world objects. The project culminated in an academic research publication analyzing learning retention improvements.',
    highlights: [
      'Engineered finger-tracing contour algorithms in Unity to validate touch paths against target geometric shapes.',
      'Implemented interactive drag-and-match puzzle stages with celebratory audio-visual feedback loops.',
      'Designed child-friendly user experience with high-contrast pastel palettes and intuitive, text-free navigation.',
      'Conducted user testing with preschool students and published academic findings in an educational informatics journal.',
    ],
    challenges: [
      'Calibrating touch gesture tolerance algorithms to accommodate imperfect motor control of preschool-aged children.',
      'Balancing playful game aesthetics with instructional clarity to ensure pedagogical effectiveness.',
    ],
    technologies: ['Unity', 'C#', 'Game Development', 'Interactive UI', 'Academic Research'],
    architecture: [
      'Game Engine: Unity 2D environment tailored for interactive mobile/tablet displays.',
      'Tracing Logic: Vector interpolation evaluating precision distance from coordinate waypoints.',
      'Gamification Framework: Event-driven audio, star rewards, and progressive level progression.',
      'Research Methodology: Pre-test and post-test assessment framework tracking shape recognition accuracy.',
    ],
    featured: true,
  },
];
