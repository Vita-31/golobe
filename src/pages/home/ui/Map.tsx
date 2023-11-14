import { FC } from 'react';
import MapPhoto from '@/assets/img/map.webp';
import { SectionTitle } from '@/shared/components/ui';

interface Map {}

export const Map: FC<Map> = () => {
  return (
    <section className="mb-20">
      <SectionTitle
        title="Let's go places together"
        text="Discover the latest offers and news and start planning your next trip with us."
        buttonText="See All"
        buttonLink="/places"
      />
      <img
        src={MapPhoto}
        alt="Travel community"
        width="1"
        height="1"
        decoding="async"
        loading="lazy"
        className="max-h-[486px] min-h-[280px] w-full object-cover"
      />
    </section>
  );
};
