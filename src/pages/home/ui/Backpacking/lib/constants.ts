import TripPhoto1 from '@/assets/img/trip-photo-1.webp';
import TripPhoto2 from '@/assets/img/trip-photo-2.webp';
import TripPhoto3 from '@/assets/img/trip-photo-3.webp';
import TripPhoto4 from '@/assets/img/trip-photo-4.webp';

export const backpackingPhotos = [
  { img: TripPhoto1 },
  { img: TripPhoto2 },
  { img: TripPhoto3 },
  { img: TripPhoto4 },
];

export type BackpackingPhotos = (typeof backpackingPhotos)[0];
