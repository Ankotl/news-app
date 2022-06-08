import { useDispatch } from "react-redux";
import { useEffect } from "react";

const useAuth = (updateState) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(updateState(localStorage.getItem("login") & false));
  }, []);
};

export default useAuth;
