import { useState } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { ReducerType } from "../../store/rootReducer";
import { SideNavBar } from "../molecule/sideNavBar";
import { SideNavBarMobile } from "../molecule/sideNavBarMobile";

export const NavBar = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const _id = useSelector((state: ReducerType) => state.userInfo._id);
  window.addEventListener("resize", () => {
    setWidth(window.innerWidth);
  });
  return (
    <>
      {width > 1080 ? <SideNavBar mainLink="/main" goalLink="/goal" planLink="/plan" profileLink={`/modifyUserInfo/${_id}`} /> : <SideNavBarMobile mainLink="/main" goalLink="/goal" planLink="/plan" profileLink={`/modifyUserInfo/${_id}`} />}
      <Outlet />
    </>
  )
}