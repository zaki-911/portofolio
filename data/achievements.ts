export interface AchievementItem {
  id: string;
  type: 'Publication' | 'Leadership';
  title: string;
  subtitle: string;
  venueOrContext: string;
  year: string;
  description: string;
  bullets: string[];
  badge: string;
}

export const achievementsData: AchievementItem[] = [
  {
    id: 'academic-publication-unity',
    type: 'Publication',
    title: 'Academic Journal Publication',
    subtitle: 'Game Edukasi pada Anak PAUD Yayasan APII Menggunakan Tracing-And-Matching Berbasis Unity untuk Pengenalan Bentuk Bangun Datar',
    venueOrContext: 'Academic Journal of Informatics & Educational Technology',
    year: 'Academic Contribution',
    badge: 'Peer-Reviewed Research',
    description:
      'Authored and published peer-reviewed research analyzing the pedagogical impact of digital tracing-and-matching interactive games built with Unity on geometric shape cognition among early childhood learners.',
    bullets: [
      'Researched and implemented gesture-tracing algorithms calibrated for preschool fine-motor dexterity.',
      'Conducted controlled empirical testing comparing traditional tactile learning against interactive digital feedback.',
      'Documented measurable retention gains in geometric shape classification and motor coordination.',
    ],
  },
  {
    id: 'organizational-leadership-idtc',
    type: 'Leadership',
    title: 'Organizational Leadership & Sponsorship Management',
    subtitle: 'Manager of Sponsorship – Himpunan Mahasiswa Informatika ITENAS',
    venueOrContext: 'IDTC (Itenas Digital Transformation Competition) & National Tech Programs',
    year: 'Leadership Milestones',
    badge: 'High Impact Leadership',
    description:
      'Spearheaded sponsorship strategy, corporate partnership acquisition, and team leadership across major institutional initiatives, including a nationwide technology competition.',
    bullets: [
      'Directly supervised and mentored 20 departmental staff across partnership outreach, pitching, and contract execution.',
      'Secured financial backing and resources through three funding vectors: fresh capital, in-kind equipment, and high-impact media sponsorships.',
      'Played an instrumental role in the successful execution of the national-level Itenas Digital Transformation Competition (IDTC).',
    ],
  },
];
