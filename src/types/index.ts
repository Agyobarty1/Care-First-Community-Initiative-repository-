export interface TeamMember {
  id: string;
  name: string;
  position: string;
  initials: string;
  image?: string;
}

export interface Program {
  id: string;
  title: string;
  description: string;
  icon?: string;
}

export interface Activity {
  id: string;
  title: string;
  description: string;
  image: string;
  alt: string;
}

export interface ContactInfo {
  phone: string[];
  email: string;
  address?: string;
}

export interface CoreValue {
  id: string;
  name: string;
  description?: string;
}

export interface NavigationItem {
  id: string;
  label: string;
  href: string;
}

