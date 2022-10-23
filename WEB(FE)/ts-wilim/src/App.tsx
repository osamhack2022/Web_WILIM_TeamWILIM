import { Layout } from "./components/layout/Layout";
import { Route, Routes } from "react-router-dom";
import { LoginPage } from "./components/pages/loginPage";
import { CreateAccountPage } from "./components/pages/createAccountPage";
import { FindPasswordPage } from "./components/pages/findPasswordPage";
import { ProfiletPage } from "./components/pages/profilePage";
import { SideNavBarTestPage } from "./components/pages/sideNavBarTestPage";
import { AdditionalUserInfoPage } from "./components/pages/additionalUserInfoPage";
import { useSelector } from "react-redux";
import { ReducerType } from "./store/rootReducer";
import { NavBar } from "./components/organism/navBar";
import { lazy, Suspense } from "react";
import { DescriptionModal } from "./components/organism/descriptionModal";
import { GetGoalPage } from "./components/pages/getGoalPage";
import { ToastContainer } from 'react-toastify';
import '../src/utils/ReactToastify.css';
import { Shimmer } from "./utils/shimmer";

const GoalPlanPage = lazy(() => import("./components/pages/goalPlanPage"));
const GoalPage = lazy(() => import("./components/pages/goalPage"));
const PlanPage = lazy(() => import("./components/pages/planPage"));
const CommunityPage = lazy(() => import("./components/pages/communityPage"));
const ModifyUserInfoPage = lazy(() => import("./components/pages/modifyUserInfoPage"));

function App() {
  const toggle = useSelector((state: ReducerType) => state.toggle.sideBar);
  const pixel = toggle ? -182 : 0;
  return (
    <>
        <Suspense fallback={<Shimmer />}>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/createAccount" element={<CreateAccountPage />} />
            <Route path="/*" element={<NavBar />}>
              <Route path="findPassword" element={<FindPasswordPage />} />
              <Route path="test" element={<Layout />} />
              <Route path="main" element={<GoalPlanPage />} />
              <Route path="modifyUserInfo/:_id" element={<ModifyUserInfoPage />} />
              <Route path="goal" element={<GoalPage />} />
              <Route path="plan" element={<PlanPage />} />
              <Route path="profile" element={<ProfiletPage />} />
              <Route path="snbt" element={<SideNavBarTestPage />} />
              <Route path="additionalUserInfo" element={<AdditionalUserInfoPage />} />
              <Route path="modal" element={<DescriptionModal />} />
              <Route path="community" element={<CommunityPage />} />
              <Route path="getGoal" element={<GetGoalPage />} />
            </Route>
          </Routes>
        </Suspense>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}

export default App;
