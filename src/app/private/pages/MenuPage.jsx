import { MenuHeader } from "./components/menu-header/MenuHeader";
import { MenuList } from "./components/menu-list/MenuList";
import menuList from "app/assets/data/menuList.json";
import "./MenuPage.scss";
import { MenuItem } from "./components/menu-item/MenuItem";

export const MenuPage = () => {
  return (
    <div className="menuPage">
      <MenuHeader />
      <div className="menuPage__container">
        <div className="menuPage__left">
          <MenuList />
        </div>
        <div className="menuPage__right">
          <h1>Menu</h1>
          <div className="menuPage__category">
            <h2>Drinks</h2>
            <div className="menuPage__items">
              {menuList.map((menuListCategory) =>
                menuListCategory.drinks.map(({ type, path, image }) => (
                  <MenuItem key={path} type={type} image={image} />
                ))
              )}
            </div>
          </div>

          <div className="menuPage__category">
            <h2>Food</h2>
            <div className="menuPage__items">
              {menuList.map((menuListCategory) =>
                menuListCategory.food.map(({ type, path, image }) => (
                  <MenuItem key={path} type={type} image={image} />
                ))
              )}
            </div>
          </div>

          <div className="menuPage__category">
            <h2>At Home Coffee</h2>
            <div className="menuPage__items">
              {menuList.map((menuListCategory) =>
                menuListCategory.atHomeCoffee.map(({ type, path, image }) => (
                  <MenuItem key={path} type={type} image={image} />
                ))
              )}
            </div>
          </div>

          <div className="menuPage__category">
            <h2>Merchandise</h2>
            <div className="menuPage__items">
              {menuList.map((menuListCategory) =>
                menuListCategory.merchandise.map(({ type, path, image }) => (
                  <MenuItem key={path} type={type} image={image} />
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
