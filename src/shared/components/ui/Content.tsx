import { FC } from 'react';
import { useNavigate } from 'react-router';
import classNames from 'classnames';
import { Button, Title } from '@/shared/components/ui';

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
    <div
      className={classNames(
        'container flex flex-col items-center gap-4 md:flex-row',
        className || 'mb-6',
      )}
    >
      <Title title={title} subtitle={text} />
      <Button
        className="w-full md:w-[200px]"
        variant="outlined"
        color="primary"
        size="md"
        onClick={() => navigate(buttonLink)}
      >
        {buttonText}
      </Button>
    </div>
  );
};
