import { SectionTitle } from '@/shared/components/ui';
import { BuyTripCard } from './BuyTripCard';
import { trips } from '../lib/constants';

export const BuyTrip = () => {
  return (
    <section className="buy-trip mb-20">
      <SectionTitle
        title="Fall into travel"
        text="Going somewhere to celebrate this season? Whether you’re going home or somewhere to roam, we’ve got the travel tools to get you to your destination."
        buttonText="See All"
        buttonLink="/buy-trip"
        spaceBottom="mb-10"
      />
      <div className="container grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {trips.map((trip) => (
          <BuyTripCard key={trip.id} trip={trip} />
        ))}
      </div>
    </section>
  );
};
