import { ButtonProps } from '../Button';

type ButtonStyles = { [key in NonNullable<ButtonProps['color']>]: string };

export const filledStyles: ButtonStyles = {
  primary:
    'bg-primary text-dark border-primary rounded hover:bg-[#9BE0C8] hover:border-[#9BE0C8] active:bg-[#82CBB2] active:border-[#9BE0C8] active:rounded-none disabled:bg-[#D2D1D3] disabled:border-[#D2D1D3] disabled:text-[#8F8C91] focus:outline-primary focus:border-white outline-transparent outline outline-1',
  secondary: 'bg-secondary text-dark border-secondary rounded',
  dark: 'bg-dark text-white border-dark rounded hover:bg-primary hover:border-primary',
};

export const outlineStyles: ButtonStyles = {
  primary:
    'text-dark border-primary rounded hover:border-[#9BE0C8] focus:border-2 active:border-[#82CBB2] disabled:border-[#D2D1D3] disabled:text-[#8F8C91]',
  secondary: 'text-dark border-secondary rounded',
  dark: 'text-dark border-dark rounded',
};

export const flatStyles: ButtonStyles = {
  primary: 'text-primary border-transparent px-0',
  secondary: 'text-secondary border-transparent px-0',
  dark: 'text-dark border-transparent px-0 hover:text-[#9BE0C8] disabled:text-[#8F8C91] active:text-[#82CBB2]',
};
