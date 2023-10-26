import { FC } from 'react';
import { Content } from '@/shared/components/ui/Content';
import { backpackingPhotos } from '../../lib/constants';
import { BackpackingContent } from './BackpackingContent';

interface BackpackingProp {}

export const Backpacking: FC<BackpackingProp> = () => {
  return (
    <div className="backpacking">
      <Content
        title="Fall into travel"
        text="Going somewhere to celebrate this season? Whether you’re going home or somewhere to roam, we’ve got the travel tools to get you to your destination."
        buttonText="See All"
        buttonLink="/backpacking"
      />
      <div className="container grid grid-cols-1 grid-rows-1 gap-6 lg:grid-cols-2">
        <BackpackingContent />
        <div className="grid gap-x-5 gap-y-6 sm:grid-cols-2 sm:grid-rows-2">
          {backpackingPhotos.map((photo) => (
            <div className="overflow-hidden rounded-xl border-2 border-solid border-primary">
              <img
                src={photo.img}
                alt="Backpacking Sri Lanka"
                title="Backpacking Sri Lanka"
                className="backpacking-photo h-full w-full object-cover"
                width="1"
                height="1"
                decoding="async"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
