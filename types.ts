export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: 'soccer' | 'dumbbell' | 'building';
  image: string;
}

export interface FeatureItem {
  title: string;
  description: string;
  iconName: 'users' | 'award' | 'sun' | 'calendar';
}

export interface PricePlan {
  category: string;
  items: {
    name: string;
    details: string;
    price: string;
    note?: string;
  }[];
}

export interface CompanyInfo {
  name: string;
  representative: string;
  facilityName: string;
  address: string;
  phone: string;
  email: string;
  hours: string;
  stations: string;
  reservationUrl: string;
  instagram: string;
}