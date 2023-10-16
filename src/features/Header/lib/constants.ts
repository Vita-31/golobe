export const links = [
  {
    path: '/',
    icon: 'airplane',
    name: 'Find Flight',
  },
  {
    path: '/stay',
    icon: 'bed',
    name: 'Find Stays',
  },
];

export type Link = (typeof links)[0];
