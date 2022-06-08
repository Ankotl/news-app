import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUserLogin } from "../store/slices/appSlices";
import styled from "styled-components";

const Profile = () => {
  const navigate = useNavigate();
  const isLogin = useSelector((state) => state.app.isLogin);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isLogin) {
      navigate("/login");
    }
  }, []);

  const disLogin = () => {
    dispatch(setUserLogin(false));
    localStorage.setItem("login", false);
    navigate("/login");
  };

  return (
    <div>
      {isLogin ? (
        <ProfileBlock>
          <h2>Страница пользователя</h2>
          <Button onClick={disLogin}>Выйти</Button>
        </ProfileBlock>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Profile;

const ProfileBlock = styled.div`
  padding-top: 50px;
  display: flex;
  width: 90vw;
  justify-content: space-between;
  gap: 20px;
  margin: 0 auto;
`;

const Button = styled.button`
  width: 200px;
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
