import { Typography } from "@mui/material";

export const LinkListItem = ({ links }) => {
  return links.map((link) => (
    <Typography key={link} className="linkList__item">
      {link}
    </Typography>
  ));
};
