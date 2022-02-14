import { useState } from 'react';
import './Menu.css';
export const Menu = ({ children }) => {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <div className="menu-toggle" onClick={() => setOpened(!opened)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <nav className={`${opened ? 'opened' : 'closed'}`}>{children}</nav>
    </>
  );
};
