import React from "react";
import styles from "./Sidebar.module.scss";
import classNames from "classnames/bind";
import { links } from "../../utils/constants";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { FaTimes, FaUserPlus } from "react-icons/fa";
import CartButton from "../../components/CartButton/CartButton";
import { UserAuth } from "../../context/AuthContext";
const cx = classNames.bind(styles);
const Sidebar = ({ openSidebar, setOpenSidebar }) => {
  const { logOut, user } = UserAuth();
  return (
    <div className={cx("wrapper-sidebar", { "show-sidebar": openSidebar })}>
      <section className="section-center">
        <div className={cx("wrapper-nav")}>
          <Link to="/" onClick={() => setOpenSidebar(false)}>
            <img src={logo} alt="logo comfy sloth" />
          </Link>
          <FaTimes className={cx("close-btn")} onClick={() => setOpenSidebar(false)} />
        </div>
      </section>
      <ul className={cx("nav-links")}>
        {links.map((link) => {
          const { id, text, url } = link;
          if (user) {
            return (
              <Link key={id} className={cx("link-url")} to={url} onClick={() => setOpenSidebar(false)}>
                <li>{text}</li>
              </Link>
            );
          } else {
            if (text === "checkout") return;
            return (
              <Link key={id} className={cx("link-url")} to={url} onClick={() => setOpenSidebar(false)}>
                <li>{text}</li>
              </Link>
            );
          }
        })}
      </ul>
      <div className={cx("cart-wrapper")}>
        <Link to="/cart" className="text-deco" onClick={() => setOpenSidebar(false)}>
          <CartButton />
        </Link>
        <Link to="/login" className="text-deco" onClick={() => setOpenSidebar(false)}>
          <div className={cx("wrapper-user")}>
            {user ? (
              <button className={cx("auth-btn")} onClick={logOut}>
                <span className="text-deco">Logout</span>
                <img
                  src={user.photoURL ?? "https://cdn3.iconfinder.com/data/icons/avatars-9/145/Avatar_Cat-1024.png"}
                  alt={user.displayName}
                />
              </button>
            ) : (
              <button className={cx("auth-btn", "text-deco")}>
                <span>Login</span>
                <FaUserPlus />
              </button>
            )}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
