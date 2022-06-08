import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fakeUser } from "../fakeUser";
import { setUserLogin } from "../store/slices/appSlices";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const checkUserLogin = (evt) => {
    evt.preventDefault();
    if (fakeUser.username === name && fakeUser.password === password) {
      dispatch(setUserLogin(true));
      setName("");
      setPassword("");
      localStorage.setItem("login", true);
      navigate("/profile");
    } else {
      setError("Имя пользователя или пароль введены не верно");
    }
  };

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Введите логин"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <input
          placeholder="Введите пароль"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button onClick={(evt) => checkUserLogin(evt)}>Войти</button>
      </form>
      {error && <div>{error}</div>}
    </div>
  );
};

export default Login;
