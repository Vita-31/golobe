import Melbourne from '@/assets/img/melbourne.webp';
import Paris from '@/assets/img/paris.webp';
import London from '@/assets/img/london.webp';
import Columbia from '@/assets/img/columbia.webp';

import TripPhoto1 from '@/assets/img/trip-photo-1.webp';
import TripPhoto2 from '@/assets/img/trip-photo-2.webp';
import TripPhoto3 from '@/assets/img/trip-photo-3.webp';
import TripPhoto4 from '@/assets/img/trip-photo-4.webp';

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

export const backpackingPhotos = [
  { img: TripPhoto1 },
  { img: TripPhoto2 },
  { img: TripPhoto3 },
  { img: TripPhoto4 },
];

export type BackpackingPhotos = (typeof backpackingPhotos)[0];
