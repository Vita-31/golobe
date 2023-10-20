import { Banner } from '@/shared/components/ui/Banner';
import { FC } from 'react';
import Bg from '@/assets/img/airplane.webp';

interface HomeFlightsProp {}

export const HomeFlights: FC<HomeFlightsProp> = () => {
  return (
    <>
      <Banner
        title="Make your travel whishlist, we’ll do the rest"
        text="Special offers to suit your plan"
        img={Bg}
      />
    </>
  );
};
