import { Divider, Typography } from "@mui/material";
import { StarbucksButton } from "../../buttons/StarbucksButton";
import "./PublicFooter.scss";

export const PublicFooter = () => {
  return (
    <div className="publicFooter">
      <Divider />
      <div className="publicFooter__container">
        <div className="publicFooter__left">
          <StarbucksButton
            type="outline"
            color="var(--main-green)"
            text="Find a store"
            bold
          />
        </div>

        <div className="publicFooter__right">
          <Typography>Web Accessibility</Typography>
          <Typography>Privacy Policy</Typography>
          <Typography>Terms of Use</Typography>
          <Typography>Cookie Preferences</Typography>
        </div>
      </div>
    </div>
  );
};
