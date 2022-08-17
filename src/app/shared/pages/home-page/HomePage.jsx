import { Divider } from "@mui/material";
import { Heading } from "app/shared/components/heading/Heading";
import { PromotedItem } from "app/shared/components/promoted-item/PromotedItem";
import "./HomePage.scss";
import { homePageFeatured } from "./homePageFeatured";

export const HomePage = () => {
  return (
    <div className="homePage">
      <div className="homePage__top">
        <div className="homePage__promotions">
          {homePageFeatured.map((featured) => (
            <PromotedItem key={featured.imgUrl} {...featured} />
          ))}
        </div>
      </div>
      <Heading heading="Be a part of us" />
      <Divider />
    </div>
  );
};
