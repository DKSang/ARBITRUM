export interface ProjectItem {
  name: string;
  logo: string;
  description: string;
  link: string;
  orbitChain?: boolean;
}

export interface StatItem {
  value: string;
  label: string;
  description: string;
  sourceUrl: string;
}

export interface CaseStudy {
  title: string;
  image: string;
  link: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface NavGroup {
  label: string;
  items: NavLink[];
}

export interface SceneCard {
  id: string;
  label: string;
  titleTop: string;
  titleBottom: string;
  description: string;
  cta: { label: string; href: string };
  image: string;
  gradient: string;
}

export interface EcosystemLogo {
  name: string;
  logo: string;
}
