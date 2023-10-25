type styleButtonTypeProp = (type?: 'filled' | 'outlined' | 'flat', color?: string) => string;

type colorStylesProp = {
  [key: string]: string;
  primary: string;
  secondary: string;
  dark: string;
};

const filledStyles: colorStylesProp = {
  primary:
    'bg-primary text-dark border-primary rounded focus:border-white focus:outline-primary focus:outline-1 focus:outline',
  secondary: 'bg-secondary text-dark border-secondary rounded',
  dark: 'bg-dark text-white border-dark rounded',
};

const outlineStyles: colorStylesProp = {
  primary: 'text-dark border-primary rounded',
  secondary: 'text-dark border-secondary rounded',
  dark: 'text-dark border-dark rounded',
};

const flatStyles: colorStylesProp = {
  primary: 'text-primary bg-transparent',
  secondary: 'text-secondary bg-transparent',
  dark: 'text-dark bg-transparent',
};

export const styleButtonType: styleButtonTypeProp = (type, color) => {
  if (typeof color === 'string') {
    switch (type) {
      case 'filled':
        return filledStyles[color];
      case 'outlined':
        return outlineStyles[color];
      case 'flat':
        return flatStyles[color];
      default:
        break;
    }
  }

  return '';
};
