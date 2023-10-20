import { FC } from 'react';

interface BannerProp {
  title: string;
  text: string;
  img: string;
}

export const Banner: FC<BannerProp> = ({ title, text, img }) => {
  console.log(img);
  return (
    <section className="banner">
      <div className="container">
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </section>
  );
};
