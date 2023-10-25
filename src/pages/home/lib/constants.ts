export const trips = [
  {
    id: 1,
    city: 'Melbourne',
    description: 'An amazing journey',
    cost: '$ 700',
    buttonText: 'Book Flight',
    img: '',
  },
  {
    id: 2,
    city: 'Paris',
    description: 'A Paris Adventure',
    cost: '$ 600',
    buttonText: 'Book Flight',
    img: '',
  },
  {
    id: 3,
    city: 'London',
    description: 'London eye adventure',
    cost: '$ 350',
    buttonText: 'Book Flight',
    img: '',
  },
  {
    id: 4,
    city: 'Columbia',
    description: 'Amazing streets',
    cost: '$ 700',
    buttonText: 'Book Flight',
    img: '',
  },
];

export type Trips = (typeof trips)[0];
