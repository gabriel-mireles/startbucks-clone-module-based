import { ErrorOutlineOutlined } from "@mui/icons-material";
import { StarbucksButton } from "../buttons/StarbucksButton";
import "./InnerAlert.scss";

export const InnerAlert = ({ title, text, actionText, type = "info" }) => {
  return (
    <div className={`innerAlert innerAlert__${type}`}>
      <div className={`innerAlert__${type}__title`}>
        {title}
        <ErrorOutlineOutlined className={`innerAlert__${type}__icon`}/>
      </div>
      <div className={`innerAlert__${type}__text`}>{text}</div>
      {actionText ? (
        <div className={`innerAlert__${type}__action`}>
          <StarbucksButton
            text={actionText}
            type="outline"
            bold
            color="#00754a"
          />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
