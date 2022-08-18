import { Link, useNavigate } from "react-router-dom";
import "./StarbucksButton.scss";

export const StarbucksButton = ({
  to = "",
  text,
  type,
  color,
  bold,
  bgColor,
  size,
  buttonBehavior,
}) => {
  const navigate = useNavigate();
  return (
    <button
      style={{
        backgroundColor: bgColor,
        color,
        borderColor: color,
        fontWeight: bold ? "700" : "500",
      }}
      className={`starbucksButton starbucksButton__${type} ${size}`}
      onClick={() => {
        to && navigate(to)
      }}
   
    >
      {text}
    </button>
  );
};
