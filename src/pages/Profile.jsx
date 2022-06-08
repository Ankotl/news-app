import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUserLogin } from "../store/slices/appSlices";

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
        <div>
          <h2>Страница пользователя</h2>
          <button onClick={disLogin}>Выйти</button>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Profile;
