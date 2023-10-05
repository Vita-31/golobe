import { FC } from 'react';

export const Header: FC = () => {
  return (
    <header className="flex items-center justify-between p-4">
      <div className="flex items-center">
        <i className="ai-arrow-left"></i>
        <h1 className="ml-2 text-xl font-bold">Hello</h1>
      </div>
      <div className="flex items-center">
        <i className="ai-search"></i>
        <i className="ai-bell"></i>
        <i className="ai-user"></i>
      </div>
    </header>
  );
};
