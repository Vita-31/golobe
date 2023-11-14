import { ButtonProps } from '../Button';

type ButtonStyles = { [key in NonNullable<ButtonProps['color']>]: string };

export const filledStyles: ButtonStyles = {
  primary:
    'bg-primary text-dark border-primary rounded focus:border-white focus:outline-primary focus:outline-1 focus:outline',
  secondary: 'bg-secondary text-dark border-secondary rounded',
  dark: 'bg-dark text-white border-dark rounded',
};

export const outlineStyles: ButtonStyles = {
  primary: 'text-dark border-primary rounded',
  secondary: 'text-dark border-secondary rounded',
  dark: 'text-dark border-dark rounded',
};

export const flatStyles: ButtonStyles = {
  primary: 'text-primary border-transparent px-0',
  secondary: 'text-secondary border-transparent px-0',
  dark: 'text-dark border-transparent px-0',
};
