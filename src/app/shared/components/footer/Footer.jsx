import { footerLinks } from "./footerLinks";
import "./Footer.scss";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Divider,
  Typography,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import { LinkList } from "./LinkList/LinkList";
import { Fade } from "../fade/Fade";
import routeTypes from "app/shared/types/routeTypes";
import { PublicFooter } from "./public-footer/PublicFooter";

export const Footer = ({ mode }) => {
  if (mode === routeTypes.PUBLIC_ROUTE) return <PublicFooter />;
  return (
    <Fade>
      <div className="footer">
        <LinkList links={footerLinks} />

        {footerLinks.map((footerLink) => (
          <Accordion
            TransitionProps={{ timeout: 600 }}
            className="accordion"
            key={footerLink.id}
          >
            <AccordionSummary
              expandIcon={<ExpandMore />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              className="accordion__header"
            >
              <Typography className="accordion__title">
                {footerLink.linkHeading}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              {footerLink.links.map((link) => (
                <Typography
                  sx={{ color: "rgba(0,0,0,.58)", fontWeight: 400 }}
                  key={link}
                  className="accordion__link"
                >
                  {link}
                </Typography>
              ))}
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </Fade>
  );
};
