import { useNavigate } from "react-router-dom";
import "./StarbucksButton.scss";

export const StarbucksButton = ({
  to = "",
  text,
  type,
  color,
  bold,
  bgColor,
  size,
  isLoading,
}) => {
  const navigate = useNavigate();
  return (
    <button
      style={{
        background: bgColor ? bgColor: 'none',
        color,
        borderColor: color,
        fontWeight: bold ? "700" : "500",
      }}
      className={`starbucksButton starbucksButton__${type} ${
        isLoading ? "starbucksButton__loading" : ""
      } ${size}`}
      onClick={() => {
        to && navigate(to);
      }}
    >
      <span className="starbucksButton__text"> {text}</span>
    </button>
  );
};
