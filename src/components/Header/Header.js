import './Header.css';
export const Header = ({ appTitle, className, menu }) => {
  const classes = `header ${className ? className : ''}`;

  return (
    <header className={`${classes}`}>
      <h1>{appTitle}</h1>
      {menu}
    </header>
  );
};
