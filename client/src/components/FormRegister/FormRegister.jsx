import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./FormRegister.module.scss";
import { UserAuth } from "../../context/AuthContext";
const cx = classNames.bind(styles);
const FormRegister = ({ title }) => {
  const { register } = UserAuth();
  const [emailRegister, setEmailRegister] = useState();
  const [passwordRegister, setPasswordRegister] = useState();
  const submitRegister = (e) => {
    e.preventDefault();
    register(emailRegister, passwordRegister);
  };
  return (
    <div className={cx("wrapper-btn")}>
      <form action="" className={cx("form-login")} onSubmit={submitRegister}>
        <input type="text" className="text" placeholder="Email" onChange={(e) => setEmailRegister(e.target.value)} />
        <input
          type="password"
          className="text"
          placeholder="Password"
          onChange={(e) => setPasswordRegister(e.target.value)}
        />
        <button>{title}</button>
      </form>
    </div>
  );
};

export default FormRegister;
