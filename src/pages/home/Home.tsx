import { FC } from 'react';
import { Banner } from './ui/Banner';
import { HomeFlights } from './ui/HomeFlights';
import { Map } from './ui/Map';
import { BuyTrip } from './ui/BuyTrip';
import { Backpacking } from './ui/Backpacking';
import { Subscribe } from './ui/Subscribe';
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
      <Map />
      <BuyTrip />
      <Backpacking />
      <Subscribe />
    </>
  );
};
