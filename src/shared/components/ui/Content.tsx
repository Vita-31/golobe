import { Button } from '@/shared/components/ui/Button';
import { FC } from 'react';
import { useNavigate } from 'react-router';

interface ContentProps {
  title: string;
  text: string;
  buttonText: string;
  buttonLink: string;
  className?: string;
}

export const Content: FC<ContentProps> = ({ title, text, buttonText, buttonLink, className }) => {
  const navigate = useNavigate();
  return (
    <div className={`container grid ${className ? className : 'mb-6'}`}>
      <h2 className="title title--md column-start-1 column-end-2 row-start-1 row-end-2 mb-4 w-9/12 font-semibold leading-7 text-black">
        {title}
      </h2>
      <p className="column-start-1 column-end-2 row-start-2 row-end-3 w-9/12 text-base font-normal leading-5 text-black">
        {text}
      </p>
      <Button
        className="column-start-2 colum-end-3 row-start-1 row-end-3 self-center"
        buttonType="outlined"
        buttonColor="primary"
        buttonSize="md"
        onClick={() => navigate(buttonLink)}
      >
        {buttonText}
      </Button>
    </div>
  );
};
