import { LinkListItem } from "./LinkListItem";
import "./LinkList.scss";

export const LinkList = ({ links }) => {
  return (
    <div className="linkList">
      {links.map((link) => {
        return (
          <div className="linkList__container" key={link.id}>
            <p className="linkList__heading">{link.linkHeading}</p>
            <LinkListItem links={link.links} />;
          </div>
        );
      })}
      ;
    </div>
  );
};
