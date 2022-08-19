import { SidebarItem } from "./SidebarItem";

export const SidebarItemList = ({ linkList, changeShowMenu }) => {
  return linkList.map((menuLink) => (
    <SidebarItem
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
