import { Layout } from "./components/layout/Layout";
import { Route, Routes } from "react-router-dom";
import { LoginPage } from "./components/pages/loginPage";
import { CreateAccountPage } from "./components/pages/createAccountPage";
import { RefCommunityPage } from "./components/pages/refCommunityPage";
import { FindPasswordPage } from "./components/pages/findPasswordPage";
import { ModifyUserInfoPage } from "./components/pages/modifyUserInfoPage";
import { GoalPlanPage } from "./components/pages/goalPlanPage";
import { AdditionalUserInfoPage } from "./components/pages/additionalUserInfoPage";
import axios from "axios";

axios.defaults.withCredentials = true;

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/createAccount" element={<CreateAccountPage />} />
      <Route path="/refCommunity/:username" element={<RefCommunityPage />} />
      <Route path="/findPassword" element={<FindPasswordPage />} />
      <Route path="/test" element={<Layout />} />
      <Route path="/:username" element={<GoalPlanPage />} />
      <Route path="/modifyUserInfo/:_id" element={<ModifyUserInfoPage />} />
      <Route path="/additionalUserInfo" element={<AdditionalUserInfoPage />} />
    </Routes>
  );
}

export default App;
