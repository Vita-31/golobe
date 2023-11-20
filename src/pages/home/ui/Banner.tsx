import { Title } from '@/shared/components/ui';
import { FC } from 'react';

interface BannerProp {
  title: string;
  text: string;
  img: string;
}

export const Banner: FC<BannerProp> = ({ title, text, img }) => {
  return (
    <section className="relative h-[70vh] min-h-[30rem] pb-32 pt-20">
      <div className="absolute bottom-0 left-0 right-0 top-0 z-10 [background:linear-gradient(to_right,#00234D63,#ffffff00)] "></div>
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
          <Title title={title} subtitle={text} size="h1" color="white" sizeSubtitle="lg" />
        </div>
      </div>
    </section>
  );
};
