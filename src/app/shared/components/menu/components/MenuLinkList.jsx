import { MenuLink } from "./MenuLink";

export const MenuLinkList = ({ linkList, changeShowMenu }) => {
  return linkList.map((menuLink) => (
    <MenuLink
      key={menuLink.link}
      link={menuLink.link}
      isMenu={menuLink.isMenu}
      leftBackIcon={menuLink.leftBackIcon}
      rightBackIcon={menuLink.rightBackIcon}
      onClick={() => {
        menuLink.onClick(changeShowMenu);
      }}
      width={menuLink.width}
    />
  ));
};
