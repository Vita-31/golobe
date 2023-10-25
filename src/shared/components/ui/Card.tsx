import { FC } from 'react';
import { Button } from './Button';

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
    <div>
      <img src={trip.img} alt={trip.city} width="1" height="1" decoding="async" loading="lazy" />\
      <div>
        <h2>{trip.city}</h2>
        <p>{trip.description}</p>
        <div>{trip.cost}</div>
        <Button buttonType="filled" buttonColor="primary" buttonSize="lg">
          {trip.buttonText}
        </Button>
      </div>
    </div>
  );
};
