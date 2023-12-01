import { FC } from 'react';
import classNames from 'classnames';
import { Button, Icon, Input } from '@/shared/components/ui';
// import { RangeDatePicker } from '@/shared/components/ui/RangeDatePicker';
import icon from '@/assets/img/sprites.svg';

interface HomeFlightsProps {
  className?: string;
}

export const HomeFlights: FC<HomeFlightsProps> = ({ className }) => {
  return (
    <section className={classNames('container', className)}>
      <div className="flex flex-col gap-6 rounded-2xl bg-white px-6 pb-12 pt-8 shadow-light md:gap-8">
        <h2 className="text-xl font-semibold leading-6 text-dark">Where are you flying?</h2>
        <div className="flex flex-col gap-4 md:flex-row md:gap-6">
          <Input label="From - To" right={<Icon name={icon} />} />
          {/* <RangeDatePicker /> */}
          <Input label="Passenger - Class" value="1 Passenger, Economy" />
        </div>
        <div className="flex flex-col justify-end gap-4 md:flex-row md:gap-6">
          <Button variant="link" color="dark" size="lg" icon="plus" iconClassName="w-4 h-4">
            Add Promo Code
          </Button>
          <Button
            variant="filled"
            color="primary"
            size="lg"
            icon="paper-plane"
            className="justify-center"
            iconClassName="w-4"
          >
            Show Flights
          </Button>
        </div>
      </div>
    </section>
  );
};
