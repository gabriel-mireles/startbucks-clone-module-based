import { Link } from "react-router-dom";
import "./StarbucksButton.scss";

export const StarbucksButton = ({ to="", text, type, color }) => {
  return (
    <Link
      style={{ color, borderColor: color }}
      className={`starbucksButton starbucksButton__${type}`}
      to={to}
    >
      {text}
    </Link>
  );
};
