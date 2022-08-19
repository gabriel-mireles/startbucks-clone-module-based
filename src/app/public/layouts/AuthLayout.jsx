import { Typography } from "@mui/material";
import { InnerAlert } from "app/shared/components/inner-alert/InnerAlert";
import { StarbucksCard } from "app/shared/components/starbucks-card/StarbucksCard";
import "./AuthLayout.scss";

export const AuthLayout = ({ title, subtitle, text, children }) => {
  return (
    <div className="authLayout">
      <div className="authLayout__title">
        <p>{title}</p>
      </div>
      <div className="authLayout__subtitle">
        <p>{subtitle}</p>
      </div>
      <div className="authLayout__text">
        <p>{text}</p>
      </div>
      <div className="authLayout__box">
        <StarbucksCard>
          <Typography className="authLayout__required">
            <span style={{ color: "var(--main-green)" }}>*</span> indicates
            required field
          </Typography>
          {children}
        </StarbucksCard>
      </div>
      <div className="authLayout__alert">
        <InnerAlert
          title="JOIN STARBUCKS® REWARDS"
          text="Join Starbucks® Rewards to earn free food and drinks, get free refills, pay and order with your phone, and more."
          actionText="Join now"
        />
      </div>
    </div>
  );
};
