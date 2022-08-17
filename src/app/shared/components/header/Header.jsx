import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { SignInButton } from "../buttons/sign-in-button/SignInButton";
import { SignUpButton } from "../buttons/sign-up-button/SignUpButton";
import { FindStoreIcon } from "../find-store-icon/FindStoreIcon";
import { LogoutButton } from "../buttons/logout-button/LogoutButton";
import { Menu } from "../menu/components/Menu";
import "./Header.scss";
export const Header = ({ menuPage }) => {
  const user = useSelector((state) => state.user);
  return (
    <div className={`header ${menuPage && "header__menuPage"}`}>
      <div className="header__left">
        <Link className="header__logo" to="home">
          <img
            src={
              "https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/640px-Starbucks_Corporation_Logo_2011.svg.png"
            }
            alt=""
          />
        </Link>

        <Link to="menu" className="header__link">
          Menu
        </Link>
        <Link to="/incoming" className="header__link">
          Rewards
        </Link>
        <Link to="/incoming" className="header__link">
          Gift Cards
        </Link>
      </div>
      <div className="header__right">
        <Menu />
        <FindStoreIcon />

        {!user.name ? (
          <>
            <SignInButton />
            <SignUpButton />
          </>
        ) : (
          <div className="header__logout">
            {menuPage ? <LogoutButton /> : <Link to="/menu">Order Now</Link>}
          </div>
        )}
      </div>
    </div>
  );
};
