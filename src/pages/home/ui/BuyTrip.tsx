import { Content } from '@/shared/components/ui/Content';
import { Card } from '@/shared/components/ui/Card';
import { trips } from '../lib/constants';

export const BuyTrip = () => {
  return (
    <section className="buy-trip mb-20">
      <Content
        title="Fall into travel"
        text="Going somewhere to celebrate this season? Whether you’re going home or somewhere to roam, we’ve got the travel tools to get you to your destination."
        buttonText="See All"
        buttonLink="/buy-trip"
        className="mb-10"
      />
      <div className="container grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {trips.map((trip) => (
          <Card key={trip.id} trip={trip} />
        ))}
      </div>
    </section>
  );
};
