import { useDispatch } from "react-redux";
import axios from "axios";
import { useEffect } from "react";

const useFetching = (updateState) => {
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts?_limit=15")
      .then((res) => dispatch(updateState(res.data)));
  });
};

export default useFetching;
