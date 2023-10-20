type styleButtonSize = (size?: string) => string;

export const styleButtonSize: styleButtonSize = (size) => {
  switch (size) {
    case 'sm':
      return 'py-2';
    case 'md':
      return 'py-3';
    case 'lg':
      return 'py-4';
    default:
      return '';
  }
};
