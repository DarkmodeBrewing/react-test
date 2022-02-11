import './Footer.css';

export const Footer = ({ className }) => {
  const classes = `footer ${className ? className : ''}`;
  return <footer className={classes}></footer>;
};
