import { StarbucksButton } from "../buttons/StarbucksButton";
import { Fade } from "../fade/Fade";
import "./PromotedItem.scss";

export const PromotedItem = ({
  imgPosition,
  imgUrl,
  alt,
  title,
  text,
  buttonText,
  bgColor,
  color,
}) => {
  return (
    <Fade>
      <div className="promotedItem" style={{ backgroundColor: bgColor, color }}>
        <img
          style={{ order: imgPosition === "right" ? 1 : 0 }}
          className="promotedItem__left"
          src={imgUrl}
          alt={alt}
        />
        <div className="promotedItem__right">
          <div className="promotedItem__container">
            <div className="promotedItem__title">{title}</div>
            <div className="promotedItem__text">{text}</div>
            <div className="promotedItem__button">
              <StarbucksButton
                text={buttonText}
                to="/incoming"
                type="outline"
                color={color}
              />
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
};
