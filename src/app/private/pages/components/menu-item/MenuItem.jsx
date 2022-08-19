import { Fade } from "app/shared/components/fade/Fade";
import React from "react";
import { Link } from "react-router-dom";
import "./MenuItem.scss";

export const MenuItem = ({ type, image }) => {
  return (
    <Fade>
      <Link to="" className="menuItem">
        <img src={image} alt="" className="menuItem__image" />
        <h4 className="menuItem__type">{type}</h4>
      </Link>
    </Fade>
  );
};

