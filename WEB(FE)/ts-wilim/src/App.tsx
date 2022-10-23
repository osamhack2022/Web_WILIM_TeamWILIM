import { Layout } from "./components/layout/Layout";
import { Route, Routes } from "react-router-dom";
import { LoginPage } from "./components/pages/loginPage";
import { CreateAccountPage } from "./components/pages/createAccountPage";
import { ProfiletPage } from "./components/pages/profilePage";
import { SideNavBarTestPage } from "./components/pages/sideNavBarTestPage";
import { AdditionalUserInfoPage } from "./components/pages/additionalUserInfoPage";
import { NavBar } from "./components/organism/navBar";
import { Suspense } from "react";
import { DescriptionModal } from "./components/organism/descriptionModal";
import { GetGoalPage } from "./components/pages/getGoalPage";
import { ToastContainer } from 'react-toastify';
import '../src/utils/ReactToastify.css';
import { Shimmer } from "./utils/shimmer";
import { retryLazy } from '../src/utils/lazyUtil';

const GoalPlanPage = retryLazy(() => import("./components/pages/goalPlanPage"));
const GoalPage = retryLazy(() => import("./components/pages/goalPage"));
const PlanPage = retryLazy(() => import("./components/pages/planPage"));
const CommunityPage = retryLazy(() => import("./components/pages/communityPage"));
const ModifyUserInfoPage = retryLazy(() => import("./components/pages/modifyUserInfoPage"));

function App() {
  return (
    <>
        <Suspense fallback={<Shimmer />}>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/createAccount" element={<CreateAccountPage />} />
            <Route path="/*" element={<NavBar />}>
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
