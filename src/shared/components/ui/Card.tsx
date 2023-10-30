import { FC } from 'react';
import { Button } from './button/Button';

interface CardProp {
  trip: {
    city: string;
    description: string;
    cost: string;
    buttonText: string;
    img: string;
  };
}

export const Card: FC<CardProp> = ({ trip }) => {
  return (
    <div className="card relative w-full overflow-hidden rounded-xl">
      <img
        src={trip.img}
        alt={trip.city}
        className="absolute bottom-0 left-0 right-0 top-0 h-full w-full object-cover"
        width="1"
        height="1"
        decoding="async"
        loading="lazy"
      />
      <div className="card__content absolute bottom-6 left-6 right-6 z-10 grid gap-x-2 text-white">
        <h2 className="col-start-1 col-end-2 row-start-1 row-end-2 text-2xl font-semibold leading-7">
          {trip.city}
        </h2>
        <p className="col-start-1 col-end-2 row-start-2 row-end-3 mb-4 text-sm leading-4">
          {trip.description}
        </p>
        <span className="col-start-2 col-end-3 row-start-1 row-end-3 mb-4 self-end text-2xl font-semibold leading-7">
          {trip.cost}
        </span>
        <Button
          variant="filled"
          color="primary"
          size="lg"
          className="col-start-1 col-end-3 row-start-3 row-end-4"
        >
          {trip.buttonText}
        </Button>
      </div>
    </div>
  );
};
