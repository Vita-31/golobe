import { Title } from '@/shared/components/ui';
import { FC } from 'react';

interface BannerProp {
  title: string;
  text: string;
  img: string;
}

export const Banner: FC<BannerProp> = ({ title, text, img }) => {
  return (
    <section className="relative mb-[400px] h-[538px] pb-32 pt-20 md:mb-[276px]">
      <img
        src={img}
        className="absolute bottom-0 left-0 right-0 top-0 h-full w-full object-cover"
        alt="airplane"
        width="1"
        height="1"
        decoding="async"
      />
      <div className="container relative z-10 h-full">
        <div className="max-w-md">
          <Title title={title} subtitle={text} size="lg" color="white" sizeSubtitle="lg" />
        </div>
      </div>
    </section>
  );
};
