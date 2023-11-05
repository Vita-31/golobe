import { FC } from 'react';
import { Button, Input } from '@/shared/components/ui';
// import { RangeDatePicker } from '@/shared/components/ui/RangeDatePicker';
import icon from '@/assets/img/sprites.svg';

interface HomeFlightsProps {}

export const HomeFlights: FC<HomeFlightsProps> = () => {
  return (
    <section className="reservation container absolute top-[450px] z-20">
      <div className="flex flex-col gap-6 rounded-2xl bg-white px-6 pb-12 pt-8 md:gap-8 ">
        <h2 className="text-xl font-semibold leading-6 text-dark">Where are you flying?</h2>
        <div className="flex flex-col gap-4 md:flex-row md:gap-6">
          <Input label="From - To" icon={`${icon}#arrow-swap`} iconPos="right" />
          {/* <RangeDatePicker /> */}
          <Input label="Passenger - Class" value="1 Passenger, Economy" />
        </div>
        <div className="flex flex-col justify-end gap-4 md:flex-row md:gap-6">
          <Button
            variant="flat"
            color="dark"
            size="lg"
            icon="plus"
            iconClassName="w-4 h-4"
            className="justify-center py-0 md:px-0 md:py-4"
          >
            Add Promo Code
          </Button>
          <Button
            variant="filled"
            color="primary"
            size="lg"
            icon="paper-plane"
            className="justify-center"
            iconClassName="w-4 h-4"
          >
            Show Filghts
          </Button>
        </div>
      </div>
    </section>
  );
};
