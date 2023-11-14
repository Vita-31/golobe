import { FC } from 'react';
import { useNavigate } from 'react-router';
import classNames from 'classnames';
import { Button, Title } from '@/shared/components/ui';

interface SectionTitleProps {
  title: string;
  text: string;
  buttonText: string;
  buttonLink: string;
  spaceBottom?: string;
}

export const SectionTitle: FC<SectionTitleProps> = ({
  title,
  text,
  buttonText,
  buttonLink,
  spaceBottom,
}) => {
  const navigate = useNavigate();

  return (
    <div
      className={classNames(
        'container flex flex-col gap-6 md:flex-row md:items-center md:justify-between md:gap-4',
        spaceBottom || 'mb-6',
      )}
    >
      <Title title={title} subtitle={text} />
      {buttonLink && (
        <Button
          className="w-full md:w-[200px]"
          variant="outlined"
          color="primary"
          size="md"
          onClick={() => navigate(buttonLink)}
        >
          {buttonText}
        </Button>
      )}
    </div>
  );
};
