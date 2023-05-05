import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "../login/login.module.scss";
import logo from "../../assets/logo.svg";
import { FaAngleLeft } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { AiFillFacebook } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { UserAuth } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import FormRegister from "../../components/FormRegister/FormRegister";
const cx = classNames.bind(styles);
const Register = () => {
  const navigate = useNavigate();
  const [signInAcc, setSignInAcc] = useState(false);
  const { googleSignIn, facebookSignIn } = UserAuth();
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
              <h2>Sign Up with Comfy Sloth</h2>
            </div>
            {signInAcc ? (
              <FormRegister title="sign up" />
            ) : (
              <div className={cx("wrapper-btn")}>
                <button onClick={() => setSignInAcc(true)}>
                  <FaUser className={cx("btn-icon", "user-icon")} />
                  <p>Register an account</p>
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
                You already have an account?
                <Link to="/login" className="text-deco">
                  <span onClick={() => setSignInAcc(false)}> Login</span>
                </Link>
              </p>
            </div>
          </div>
        }
      </div>
    </div>
  );
};

export default Register;
