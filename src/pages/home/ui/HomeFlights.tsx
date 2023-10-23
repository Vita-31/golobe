import { FC } from 'react';
import { Input } from '@/shared/components/ui/Input';
import icon from '@/assets/img/sprites.svg';

interface HomeFlightsProps {}

export const HomeFlights: FC<HomeFlightsProps> = () => {
  return (
    <section className="reservation container absolute z-20">
      <h2 className="flex flex-col gap-8 rounded-2xl bg-white px-6 pb-12 pt-8 text-xl font-semibold leading-6 text-dark">
        Where are you flying?
        <div className="flex gap-6">
          <Input label="From - To" icon={`${icon}#arrow-swap`} iconPos="right" />
        </div>
      </h2>
    </section>
  );
};
