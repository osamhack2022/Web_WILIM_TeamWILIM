import { Layout } from "./components/layout/Layout";
import { Route, Routes } from "react-router-dom";
import { LoginPage } from "./components/pages/loginPage";
import { CreateAccountPage } from "./components/pages/createAccountPage";
import { RefCommunityPage } from "./components/pages/refCommunityPage";
import { FindPasswordPage } from "./components/pages/findPasswordPage";
import { ModifyUserInfoPage } from "./components/pages/modifyUserInfoPage";
import { GoalPlanPage } from "./components/pages/goalPlanPage";
import { GoalPage } from "./components/pages/goalPage";
import { PlanPage } from "./components/pages/planPage";
import { ProfiletPage } from "./components/pages/profilePage";
import { SideNavBarTestPage } from "./components/pages/sideNavBarTestPage";
import { AdditionalUserInfoPage } from "./components/pages/additionalUserInfoPage";
import { useSelector } from "react-redux";
import { ReducerType } from "./store/rootReducer";
import { NavBar } from "./components/organism/navBar";

function App() {
  const toggle = useSelector((state: ReducerType) => state.sideBarToggle);
  const pixel = toggle ? -182 : 0;
  return (
    <>
      <div style={{ transform: `translateX(${pixel}px)`, transitionDuration: "0.5s" }}>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/createAccount" element={<CreateAccountPage />} />
          <Route path="/refCommunity/:username" element={<RefCommunityPage />} />
          <Route path="/findPassword" element={<FindPasswordPage />} />
          <Route path="/test" element={<Layout />} />
          <Route path="/:username" element={<GoalPlanPage />} />
          <Route path="/modifyUserInfo/:_id" element={<ModifyUserInfoPage />} />
          <Route path="/:username/goal" element={<GoalPage />} />
          <Route path="/:username/plan" element={<PlanPage />} />
          <Route path="/:username/profile" element={<ProfiletPage />} />
          <Route path="/snbt" element={<SideNavBarTestPage />} />
          <Route path="/additionalUserInfo" element={<AdditionalUserInfoPage />} />
        </Routes>
      </div>
      <NavBar />
    </>
  );
}

export default App;
