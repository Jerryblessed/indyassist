import { CityService } from '../types';
import { GaugeIcon as GarbageIcon, CarIcon, HomeIcon, HeartPulseIcon, DollarSignIcon, ShieldAlertIcon, MapPinIcon, BookOpenIcon } from 'lucide-react';

export const cityServices: CityService[] = [
  {
    id: '1',
    title: 'Trash & Recycling',
    description: 'Schedule pickup, report missed collection, or find recycling centers',
    icon: 'GarbageIcon',
    url: 'https://www.indy.gov/activity/trash-and-recycling',
  },
  {
    id: '2',
    title: 'Transportation',
    description: 'Bus routes, schedules, IndyGo information, and road conditions',
    icon: 'CarIcon',
    url: 'https://www.indygo.net/',
  },
  {
    id: '3',
    title: 'Housing & Neighborhoods',
    description: 'Affordable housing, home repair assistance, and neighborhood resources',
    icon: 'HomeIcon',
    url: 'https://www.indy.gov/agency/department-of-metropolitan-development',
  },
  {
    id: '4',
    title: 'Health Services',
    description: 'Public health clinics, vaccination information, and wellness programs',
    icon: 'HeartPulseIcon',
    url: 'https://www.marionhealth.org/',
  },
  {
    id: '5',
    title: 'Utility Assistance',
    description: 'Help with utility bills, energy assistance programs, and services',
    icon: 'DollarSignIcon',
    url: 'https://www.in.gov/ihcda/homeowners-and-renters/energy-assistance-program/',
  },
  {
    id: '6',
    title: 'Public Safety',
    description: 'Police, fire, emergency services, and safety resources',
    icon: 'ShieldAlertIcon',
    url: 'https://www.indy.gov/agency/indianapolis-metropolitan-police-department',
  },
  {
    id: '7',
    title: 'Parks & Recreation',
    description: 'City parks, recreational activities, and community events',
    icon: 'MapPinIcon',
    url: 'https://www.indy.gov/agency/department-of-parks-and-recreation',
  },
  {
    id: '8',
    title: 'Education & Libraries',
    description: 'Public schools, libraries, and educational resources',
    icon: 'BookOpenIcon',
    url: 'https://www.indypl.org/',
  },
];