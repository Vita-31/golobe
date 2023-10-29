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
    <div className={`container md:grid ${className ? className : 'mb-6'}`}>
      <h2 className="title title--md mb-4 font-semibold leading-7 text-black md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-2 md:w-9/12">
        {title}
      </h2>
      <p className="mb-4 text-base font-normal leading-5 text-black md:col-start-1 md:col-end-2 md:row-start-2 md:row-end-3 md:mb-0 md:w-9/12">
        {text}
      </p>
      <Button
        className="w-full max-w-sm self-center md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-3 md:w-fit md:max-w-fit"
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
