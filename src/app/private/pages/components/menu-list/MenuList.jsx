import React from "react";
import { Link } from "react-router-dom";
import "./MenuList.scss";
import menuList from "app/assets/data/menuList.json";

export const MenuList = () => {
  return (
    <div className="menuList">
      <div className="menuList__container">
        <h4>Drinks</h4>
        <div className="menuList__items">
          {menuList.map((menuListCategory) =>
            menuListCategory.drinks.map((menuListItem) => (
              <Link key={menuListItem.path} to="">
                {menuListItem.type}
              </Link>
            ))
          )}
        </div>
      </div>
      <div className="menuList__container">
        <h4>Food</h4>
        <div className="menuList__items">
          {menuList.map((menuListCategory) =>
            menuListCategory.food.map((menuListItem) => (
              <Link key={menuListItem.path} to="">
                {menuListItem.type}
              </Link>
            ))
          )}
        </div>
      </div>
      <div className="menuList__container">
        <h4>At Home Coffee</h4>
        <div className="menuList__items">
          {menuList.map((menuListCategory) =>
            menuListCategory.atHomeCoffee.map((menuListItem) => (
              <Link key={menuListItem.path} to="">
                {menuListItem.type}
              </Link>
            ))
          )}
        </div>
      </div>
      <div className="menuList__container">
        <h4>Merchandise</h4>
        <div className="menuList__items">
          {menuList.map((menuListCategory) =>
            menuListCategory.merchandise.map((menuListItem) => (
              <Link key={menuListItem.path} to="">
                {menuListItem.type}
              </Link>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
