import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fakeUser } from "../fakeUser";
import { setUserLogin } from "../store/slices/appSlices";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

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
    <LoginBlock>
      <Form>
        <Input
          type="text"
          placeholder="Введите логин"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <Input
          placeholder="Введите пароль"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <Button onClick={(evt) => checkUserLogin(evt)}>Войти</Button>
      </Form>
      {error && <Error>{error}</Error>}
    </LoginBlock>
  );
};

export default Login;

const Input = styled.input`
  height: 30px;
  border-radius: 5px;
  font-size: 16px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 0 auto;
`;

const LoginBlock = styled.div`
  padding-top: 50px;
  max-width: 500px;
  margin: 0 auto;
`;
const Error = styled.h3`
  padding-top: 25px;
  color: red;
`;

const Button = styled.button`
  width: 100%;
  height: 30px;
  background: green;
  outline: none;
  border: none;
  border-radius: 4px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.25);
  font-size: 16px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: white;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`;
