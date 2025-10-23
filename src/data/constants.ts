import { TeamMember, Program, Activity, ContactInfo, CoreValue, NavigationItem } from '@/types';

export const navigationItems: NavigationItem[] = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'programs', label: 'Programs', href: '#programs' },
  { id: 'values', label: 'Values', href: '#values' },
  { id: 'smt', label: 'SMT', href: '#smt' },
  { id: 'activities', label: 'Activities', href: '#activities' },
  { id: 'organogram', label: 'Organogram', href: '#organogram' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];

export const teamMembers: TeamMember[] = [
  { id: '1', name: 'Bartholomew Agyo', position: 'Executive Director', initials: 'BA' },
  { id: '2', name: 'Kabiru Sodiq', position: 'Head of Programs', initials: 'KS' },
  { id: '3', name: 'Kemi Amina Abdullazeez', position: 'Head Admin & HR', initials: 'KA' },
  { id: '4', name: 'Kim Pwol Dung', position: 'Head Grants, Partnership & Consortium', initials: 'KD' },
  { id: '5', name: 'Felix Terwase Tsebee', position: 'Head Monitoring, Evaluation, Accountability & Learning', initials: 'FT' },
  { id: '6', name: 'Moses Tanko', position: 'Head Finance & Operations', initials: 'MT' },
  { id: '7', name: 'Simon Obeya', position: 'Internal Control & Compliance Expert', initials: 'SO' },
  { id: '8', name: 'Esther Omojoh Ogah', position: 'Gender Based Violence & Protection Expert', initials: 'EO' },
];

export const programs: Program[] = [
  { id: '1', title: 'Food Security', description: 'Reducing hunger and improving access to nutritious food.' },
  { id: '2', title: 'Research', description: 'Evidence generation to inform impactful interventions.' },
  { id: '3', title: 'WASH', description: 'Water, sanitation, and hygiene for healthy communities.' },
  { id: '4', title: 'Livelihoods', description: 'Skills, jobs, and enterprise development for resilience.' },
  { id: '5', title: 'Education', description: 'Access to inclusive learning for children and youth.' },
  { id: '6', title: 'Shelter/CCCM/NFI', description: 'Safe shelter and non-food items for displaced people.' },
  { id: '7', title: 'Warehousing & Logistics', description: 'Efficient relief supply chain management.' },
  { id: '8', title: 'Nutrition', description: 'Preventing and treating malnutrition.' },
  { id: '9', title: 'Health', description: 'Primary healthcare and preventive services.' },
  { id: '10', title: 'Protection', description: 'Access to justice, information, advocacy, and GBV prevention.' },
];

export const activities: Activity[] = [
  {
    id: '1',
    title: 'Hand Washing Awareness',
    description: 'CFCI carrying out awareness creation on the importance of hand washing.',
    image: '/assets/img/activities/handwashing.jpg',
    alt: 'CFCI awareness creation on the importance of hand washing'
  },
  {
    id: '2',
    title: 'Education Activities',
    description: 'Education activities in Mala Sherif, Jere Local Government, Borno State.',
    image: '/assets/img/activities/education.jpg',
    alt: 'Education activities in Mala Sherif, Jere LGA, Borno State'
  },
  {
    id: '3',
    title: 'Housing, Land and Property Awareness',
    description: 'Awareness creation on Housing, Land and Property with stakeholders of displaced persons in Isa Gamai, Dusuman ward, Jere LGA.',
    image: '/assets/img/activities/hlp-stakeholders.jpg',
    alt: 'Awareness on Housing, Land and Property with stakeholders in Isa Gamai, Dusuman ward, Jere LGA'
  },
];

export const coreValues: CoreValue[] = [
  { id: '1', name: 'Altruism' },
  { id: '2', name: 'Empathy' },
  { id: '3', name: 'Non-discrimination' },
  { id: '4', name: 'Transparency' },
  { id: '5', name: 'Excellence' },
  { id: '6', name: 'Confidentiality' },
  { id: '7', name: 'Accountability' },
];

export const contactInfo: ContactInfo = {
  phone: ['+2348026533075', '+2347034624598'],
  email: 'bagyo@cfcinitiative.org',
};

export const organizationInfo = {
  name: 'Care First Community Initiative',
  shortName: 'CFCI',
  vision: 'A society devoid of poverty and social deprivation.',
  mission: 'To mitigate the impact of poverty and social deprivation among vulnerable groups through provision of innovative and sustainable social empowerment services that enhance human rights and dignity.',
  mandate: 'To alleviate human suffering, protect vulnerable populations, and restore dignity and resilience in crisis-affected communities. We commit to providing timely, inclusive, and accountable humanitarian assistance guided by the principles of humanity, impartiality, neutrality, and independence.',
  registrationDate: 'May 13, 2022',
  registrationBody: 'Corporate Affairs Commission, Nigeria',
};


