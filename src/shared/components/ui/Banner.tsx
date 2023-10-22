import { FC } from 'react';

interface BannerProp {
  title: string;
  text: string;
  img: string;
}

export const Banner: FC<BannerProp> = ({ title, text, img }) => {
  return (
    <section className="banner relative pb-32 pt-20">
      <img
        src={img}
        className="absolute bottom-0 left-0 right-0 top-0 h-full w-full"
        alt="airplane"
        width="1"
        height="1"
        decoding="async"
      />
      <div className="container relative z-10 h-full">
        <div className="max-w-md">
          <h1 className="title mb-2 font-semibold leading-snug text-white">{title}</h1>
          <p className="font-medium leading-6 text-white md:text-xl">{text}</p>
        </div>
      </div>
    </section>
  );
};
