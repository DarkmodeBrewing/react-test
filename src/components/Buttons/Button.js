import './Button.css';

export const Button = ({ label, onClick, className }) => {
  const classes = `btn ${className ? className : ''}`;
  return (
    <button onClick={onClick} className={classes}>
      {label}
    </button>
  );
};
