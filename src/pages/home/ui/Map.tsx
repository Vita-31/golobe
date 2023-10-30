import { FC } from 'react';
import MapPhoto from '@/assets/img/map.webp';
import { Content } from '@/shared/components/ui';

interface Map {}

export const Map: FC<Map> = () => {
  return (
    <section className="map mb-20">
      <Content
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
        className="w-full object-cover"
      />
    </section>
  );
};
