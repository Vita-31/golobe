import { FC } from 'react';

interface ErrorMessageProps {
  text: string;
}

export const ErrorMessage: FC<ErrorMessageProps> = ({ text }) => {
  return <span className="text-xs text-secondary">{text}</span>;
};
