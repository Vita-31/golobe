import { FC } from 'react';
import { Banner } from '@/shared/components/ui/Banner';
import { HomeFlights } from './ui/HomeFlights';
import Bg from '@/assets/img/airplane.webp';

export const Home: FC = () => {
  return (
    <>
      <Banner
        title="Make your travel whishlist, we’ll do the rest"
        text="Special offers to suit your plan"
        img={Bg}
      />

      <HomeFlights />
    </>
  );
};
