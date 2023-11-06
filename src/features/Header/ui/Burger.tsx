import { FC, useEffect, useState } from 'react';

export const Burger: FC = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('menu-open', open);
  }, [open]);

  return (
    <button className="burger relative h-8 w-8 md:hidden" onClick={() => setOpen((o) => !o)}>
      <span className="absolute left-0 block h-1 w-full rounded bg-dark"></span>
      <span className="absolute left-0 block h-1 w-full rounded bg-dark"></span>
    </button>
  );
};
