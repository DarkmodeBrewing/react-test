import { useState } from 'react';
import { useScrollPosition } from '../../hooks/use-scroll-position';
import './Header.css';
export const Header = ({ appTitle, className }) => {
  const [scroll, setScroll] = useState(false);

  useScrollPosition(
    ({ prevPos, currPos }) => {
      console.log(1, prevPos);
      console.log(2, currPos);
      const isScrolled = currPos.y < prevPos.y;
      if (isScrolled !== scroll) {
        setScroll(isScrolled);
      }
    },
    [scroll],
    false,
    false,
    300,
  );

  const classes = `header ${className ? className : ''}`;

  return (
    <header className={`${classes} ${scroll ? 'scrolled' : ''}`}>
      <h1>{appTitle}</h1>
    </header>
  );
};
