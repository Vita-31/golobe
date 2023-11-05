import Melbourne from '@/assets/img/melbourne.webp';
import Paris from '@/assets/img/paris.webp';
import London from '@/assets/img/london.webp';
import Columbia from '@/assets/img/columbia.webp';

export const trips = [
  {
    id: 1,
    city: 'Melbourne',
    description: 'An amazing journey',
    cost: '$ 700',
    buttonText: 'Book Flight',
    img: Melbourne,
  },
  {
    id: 2,
    city: 'Paris',
    description: 'A Paris Adventure',
    cost: '$ 600',
    buttonText: 'Book Flight',
    img: Paris,
  },
  {
    id: 3,
    city: 'London',
    description: 'London eye adventure',
    cost: '$ 350',
    buttonText: 'Book Flight',
    img: London,
  },
  {
    id: 4,
    city: 'Columbia',
    description: 'Amazing streets',
    cost: '$ 700',
    buttonText: 'Book Flight',
    img: Columbia,
  },
];
export type Trips = (typeof trips)[0];
