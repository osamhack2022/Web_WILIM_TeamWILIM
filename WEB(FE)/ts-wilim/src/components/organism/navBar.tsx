import { useState } from "react";
import { useSelector } from "react-redux";
import { ReducerType } from "../../store/rootReducer";
import { SideNavBar } from "../molecule/sideNavBar";
import { SideNavBarMobile } from "../molecule/sideNavBarMobile";

export const NavBar = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const _id = useSelector((state: ReducerType) => state.userInfo._id);
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
    if(window.location.pathname === '/') return null;
    return (
        <>
        {width > 1280 ? <SideNavBar mainLink="/main" goalLink="/:username/goal" planLink="/:username/plan" profileLink={`/modifyUserInfo/${_id}`} /> : <SideNavBarMobile mainLink="/main" goalLink="/goal" planLink="/plan" profileLink={`/modifyUserInfo/${_id}`} />}
        </>
    )
}