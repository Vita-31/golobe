import { ButtonProps } from '../Button';

type ButtonStyles = { [key in NonNullable<ButtonProps['color']>]: string };

const base = 'border-2 rounded';
const focusBase = 'focus:ring-2 focus:ring-offset-2';
const focusPrimary = `${focusBase} focus:ring-primary`;
const focusSecondary = `${focusBase} focus:ring-secondary`;
const focusDark = `${focusBase} focus:ring-dark`;

export const filledStyles: ButtonStyles = {
  primary: `${base} bg-primary text-dark border-transparent hover:bg-primary-light active:bg-primary-dark disabled:bg-gray-lighter disabled:text-gray-light ${focusPrimary}`,
  secondary: `${base} bg-secondary text-dark border-secondary ${focusSecondary}`,
  dark: `${base} bg-dark text-white border-dark hover:bg-primary ${focusDark}`,
};

export const outlineStyles: ButtonStyles = {
  primary: `${base} text-dark border-primary hover:border-primary-light active:border-primary-dark disabled:border-gray-lighter disabled:text-gray-light ${focusPrimary}`,
  secondary: `${base} text-dark border-secondary ${focusSecondary}`,
  dark: `${base} text-dark border-dark ${focusDark}`,
};

export const linkStyles: ButtonStyles = {
  primary: `${base} text-primary border-transparent outline-none`,
  secondary: `${base} text-secondary border-transparent outline-none`,
  dark: `${base} text-dark border-transparent hover:text-primary-light disabled:text-gray-light active:text-primary-dark outline-none`,
};
