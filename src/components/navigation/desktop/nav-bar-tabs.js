import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { NavBarTab } from "./nav-bar-tab";

export const NavBarTabs = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="nav-bar__tabs">
      <NavBarTab path="/profile" label="Profile" />
      <NavBarTab path="/public" label="Test_Public" />
      {isAuthenticated && (
        <>
          <NavBarTab path="/protected" label="Search_Protected" />
          <NavBarTab path="/admin" label="UserProfille_Proteced" />
          <NavBarTab path="/userinfo" label="UserInfo_Proteced" />
        </>
      )}
    </div>
  );
};
