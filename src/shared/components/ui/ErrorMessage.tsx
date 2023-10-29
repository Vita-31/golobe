import { FC } from 'react';

interface ErrorMessage {
  text: string;
}

export const ErrorMessage: FC<ErrorMessage> = ({ text }) => {
  return <span className="text-xs text-secondary">{text}</span>;
};
