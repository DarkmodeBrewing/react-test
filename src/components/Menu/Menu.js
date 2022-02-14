import { useState } from 'react';

export const Menu = ({ children }) => {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <div className="menu-toggle" onClick={() => setOpened(!opened)}>
        <span />
        <span />
        <span />
      </div>
      <aside className="menu">{{ children }}</aside>
    </>
  );
};
