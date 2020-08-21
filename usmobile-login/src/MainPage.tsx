import React from "react";
import { Auth } from "./Firebase";
import { Redirect } from "react-router-dom";

const MainPage = () => {
  var user = Auth.currentUser;

  return user ? (
    <div>Welcome!</div>
  ) : (
    <Redirect
      to={{
        pathname: "/signup",
      }}
    />
  );
};

export default MainPage;
