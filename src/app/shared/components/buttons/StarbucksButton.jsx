import { Link } from "react-router-dom";
import './StarbucksButton.scss'

export const StarbucksButton = ({to, text, type}) => {
  return (
    <Link className={`starbucksButton starbucksButton__${type}`} to={to}>
      {text} 
    </Link>
  );
};
