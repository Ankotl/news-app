import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import News from "./pages/News";
import Profile from "./pages/Profile";
import { setUserLogin } from "./store/slices/appSlices";
import useAuth from "./hooks/useAuth";
import styled, { createGlobalStyle } from "styled-components";

const App = () => {
  useAuth(setUserLogin);

  return (
    <Wrapper>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/news" element={<News />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <GlobalStyle />
    </Wrapper>
  );
};

export default App;

const Wrapper = styled.div`
  width: 100vw;
`;

const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  min-height: 100vh;
  
  display: flex;
  justify-content: center;
  
}

li {
  list-style-type: none; 
 }

 ul {
  margin 0; 
  padding: 0; 
 }

 a {
  text-decoration: none;
  color: white;
 }
`;
