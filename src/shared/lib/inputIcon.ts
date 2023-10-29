type inputIconStyleProp = (pos?: 'right' | 'left' | 'left right', icon?: string) => string;

export const inputIconStyle: inputIconStyleProp = (pos, icon) => {
  if (icon && typeof icon === 'string') {
    switch (pos) {
      case 'right':
        return 'pl-4 pr-12 py-4';
      case 'left':
        return 'pr-4 pl-12 py-4';
      case 'left right':
        return 'pl-12 pr-12 py-4';
      default:
        return 'py-4 px-4';
    }
  } else {
    return 'py-4 px-4';
  }
};
