import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Profile = () => {
  const navigate = useNavigate();
  const isLogin = useSelector((state) => state.app.isLogin);

  useEffect(() => {
    if (!isLogin) {
      navigate("/login");
    }
  }, []);
  return <div>Страница пользователя</div>;
};

export default Profile;
