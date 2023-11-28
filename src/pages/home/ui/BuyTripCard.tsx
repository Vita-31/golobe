import { FC } from 'react';
import { Button } from '../../../shared/components/ui/button/Button';

interface BuyTripCardProp {
  trip: {
    city: string;
    description: string;
    cost: string;
    buttonText: string;
    img: string;
  };
}

export const BuyTripCard: FC<BuyTripCardProp> = ({ trip }) => {
  return (
    <div className="card relative h-[420px] w-full overflow-hidden rounded-xl">
      <img
        src={trip.img}
        alt={trip.city}
        className="absolute bottom-0 left-0 right-0 top-0 h-full w-full object-cover"
        width="1"
        height="1"
        decoding="async"
        loading="lazy"
      />
      <div className="absolute bottom-6 left-6 right-6 z-10 text-white">
        <div className="mb-4 flex justify-between">
          <div>
            <h2 className="text-2xl font-semibold leading-7">{trip.city}</h2>
            <p className="text-sm leading-4">{trip.description}</p>
          </div>
          <span className="text-2xl font-semibold leading-7">{trip.cost}</span>
        </div>
        <Button variant="filled" color="primary" bg="primary" size="lg" className="w-full">
          {trip.buttonText}
        </Button>
      </div>
    </div>
  );
};
