import { Button } from "./Button";
import "./Button.css";

export const ButtonPrimary = ({ label, onClick }) => {
  return <Button label={label} onClick={onClick} className="primary" />;
};
