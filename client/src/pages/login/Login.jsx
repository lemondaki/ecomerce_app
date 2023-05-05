import React, { useEffect, useState } from "react";
import { GoogleButton } from "react-google-button";
import classNames from "classnames/bind";
import styles from "./login.module.scss";
import logo from "../../assets/logo.svg";
import { FaAngleLeft } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { AiFillFacebook } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { UserAuth } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import FormLogin from "../../components/FormRegister/FormRegister";
const cx = classNames.bind(styles);
const Login = () => {
  const navigate = useNavigate();
  const { register, loginWithAcc } = UserAuth();
  const [emailLogin, setEmailLogin] = useState();
  const [passwordLogin, setPasswordLogin] = useState();
  const submitLogin = (e) => {
    e.preventDefault();
    loginWithAcc(emailLogin, passwordLogin);
  };
  const [signInAcc, setSignInAcc] = useState(false);
  const { googleSignIn, facebookSignIn, logOut, user } = UserAuth();
  const handleLoginGg = async () => {
    try {
      await googleSignIn();
    } catch (err) {
      console.log(err);
    }
  };

  const handleLoginFb = async () => {
    try {
      await facebookSignIn();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="section-center">
      <div className={cx("wrapper")}>
        {
          <div className={cx("login")}>
            <div className={cx("login__header")}>
              <FaAngleLeft className={cx("btn-back", signInAcc && "visible")} onClick={() => setSignInAcc(false)} />
              <img src={logo} alt="logo" />
              <h2>Sign In to Comfy Sloth</h2>
            </div>
            {signInAcc ? (
              <div className={cx("wrapper-form")}>
                <form action="" className={cx("form-login")} onSubmit={submitLogin}>
                  <input
                    type="text"
                    className="text"
                    placeholder="Email"
                    onChange={(e) => setEmailLogin(e.target.value)}
                  />
                  <input
                    type="password"
                    className="text"
                    placeholder="Password"
                    onChange={(e) => setPasswordLogin(e.target.value)}
                  />
                  <button className={cx('btn-login')}>login</button>
                </form>
              </div>
            ) : (
              <div className={cx("wrapper-btn")}>
                <button onClick={() => setSignInAcc(true)}>
                  <FaUser className={cx("btn-icon", "user-icon")} />
                  <p>Sign In with an account</p>
                </button>
                <button onClick={handleLoginGg}>
                  <FcGoogle className={cx("btn-icon")} />
                  <p>Continue with Google</p>
                </button>
                <button onClick={handleLoginFb}>
                  <AiFillFacebook className={cx("btn-icon", "fb-icon")} />
                  <p>Continue with Facebook</p>
                </button>
              </div>
            )}
            <div className={cx("acc_descp")}>
              <p className="descp">
                You don't have an account?
                <Link to="/register" className="text-deco">
                  <span> Register</span>
                </Link>
              </p>
            </div>
          </div>
        }
      </div>
    </div>
  );
};

export default Login;
