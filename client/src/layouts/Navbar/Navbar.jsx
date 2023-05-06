import React from "react";
import styles from "./Navbar.module.scss";
import classNames from "classnames/bind";
import { links } from "../../utils/constants";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { FaBars, FaUserPlus } from "react-icons/fa";
import CartButton from "../../components/CartButton/CartButton";
import { UserAuth } from "../../context/AuthContext";
import { useEffect } from "react";
const cx = classNames.bind(styles);
const Nav = ({ setOpenSidebar }) => {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user !== null) {
      setTimeout(() => {
        navigate("/");
      }, 1000);
    }
  }, [user]);

  return (
    <nav className="section-center">
      <div className={cx("wrapper-nav")}>
        <Link to="/">
          <img src={logo} alt="logo comfy sloth" />
        </Link>
        <FaBars className={cx("menu-bars")} onClick={() => setOpenSidebar(true)} />
      </div>
      <ul className={cx("nav-links")}>
        {links.map((link) => {
          const { id, text, url } = link;
          if (user) {
            return (
              <Link key={id} className={cx("link-url")} to={url}>
                <li>{text}</li>
              </Link>
            );
          } else {
            if (text === "checkout") return;
            return (
              <Link key={id} className={cx("link-url")} to={url}>
                <li>{text}</li>
              </Link>
            );
          }
        })}
      </ul>
      <div className={cx("cart-wrapper")}>
        <Link to="cart" className={cx("text-deco")}>
          <CartButton />
        </Link>
        <Link to="/login" className={cx("text-deco")}>
          {user ? (
            <button className={cx("auth-btn")} onClick={logOut}>
              <span>Logout</span>
              <img
                src={user.photoURL ?? "https://cdn3.iconfinder.com/data/icons/avatars-9/145/Avatar_Cat-1024.png"}
                alt={user.displayName}
              />
            </button>
          ) : (
            <button className={cx("auth-btn")}>
              <span>Login</span>
              <FaUserPlus />
            </button>
          )}
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
