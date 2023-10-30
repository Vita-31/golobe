import { FC } from 'react';
import { Button } from '@/shared/components/ui';

interface BackpackingContentProp {}

export const BackpackingContent: FC<BackpackingContentProp> = () => {
  return (
    <div className="backpacking__content grid gap-x-2 gap-y-4 bg-primary p-4 text-dark">
      <h2 className="font-bold sm:col-start-1 sm:col-end-2 sm:row-start-1 sm:row-end-2">
        Backpacking Sri Lanka
      </h2>
      <p className="text-sm leading-5 sm:col-start-1 sm:col-end-3 sm:row-start-2 sm:row-end-3">
        Traveling is a unique experience as it's the best way to unplug from the pushes and pulls of
        daily life. It helps us to forget about our problems, frustrations, and fears at home.
        During our journey, we experience life in different ways. We explore new places, cultures,
        cuisines, traditions, and ways of living.
      </p>
      <div className="flex h-fit flex-col gap-1 rounded-lg bg-white p-2 text-center sm:col-start-2 sm:col-end-3 sm:row-start-1 sm:row-end-2">
        <span className="text-sm leading-4">From</span>{' '}
        <span className="text-xl font-semibold leading-6">$700</span>
      </div>
      <Button
        size="lg"
        variant="outlined"
        color="primary"
        className="mt-auto sm:col-start-1 sm:col-end-3 sm:row-start-3 sm:row-end-4"
      >
        Book Flight
      </Button>
    </div>
  );
};
