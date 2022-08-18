import { StarbucksButton } from "../buttons/StarbucksButton";
import "./InnerAlert.scss";

export const InnerAlert = ({ title, text, actionText }) => {
  return (
    <div className="innerAlert">
      <div className="innerAlert__title">{title}</div>
      <div className="innerAlert__text">{text}</div>
      <div className="innerAlert__action">
        <StarbucksButton
          text={actionText}
          type="outline"
          bold
          color="#00754a"
        />
      </div>
    </div>
  );
};
