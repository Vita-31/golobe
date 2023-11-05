import { ButtonProps } from '../Button';

type ButtonStyles = { [key in NonNullable<ButtonProps['color']>]: string };

export const filledStyles: ButtonStyles = {
  primary:
    'bg-primary text-dark border-primary rounded focus:border-white focus:outline-primary focus:outline-1 focus:outline',
  secondary: 'bg-secondary text-dark border-secondary rounded',
  dark: 'bg-dark text-white border-dark rounded',
};

export const outlineStyles: ButtonStyles = {
  primary: 'text-dark border-primary rounded bg-transparent',
  secondary: 'text-dark border-secondary rounded bg-transparent',
  dark: 'text-dark border-dark rounded bg-transparent',
};

export const flatStyles: ButtonStyles = {
  primary: 'text-primary bg-transparent border-transparent px-0',
  secondary: 'text-secondary bg-transparent border-transparent px-0',
  dark: 'text-dark bg-transparent border-transparent px-0',
};
