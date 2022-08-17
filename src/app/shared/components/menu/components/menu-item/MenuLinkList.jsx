import { MenuItem } from "./MenuItem";

export const MenuLinkList = ({ linkList, changeShowMenu }) => {
  return linkList.map((menuLink) => (
    <MenuItem
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
