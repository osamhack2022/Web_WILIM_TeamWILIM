import { Layout } from "./layout/Layout";
import { Route, Routes } from "react-router-dom";
import { LoginPage } from "./pages/loginPage";
import { CreateAccountPage } from "./pages/createAccountPage";
import { RefCommunityPage } from "./pages/refCommunityPage";
import { FindPasswordPage } from "./pages/findPasswordPage";
import { UserSchemaPage } from "./pages/userSchemaPage";
import { ModifyUserInfoPage } from "./pages/modifyUserInfoPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/createAccount" element={<CreateAccountPage />} />
      <Route path="/refCommunity/:username" element={<RefCommunityPage />} />
      <Route path="/findPassword" element={<FindPasswordPage />} />
      <Route path="/test" element={<Layout />} />
      <Route path="/:username" element={<UserSchemaPage />} />
      <Route path="/modifyUserInfo/:_id" element={<ModifyUserInfoPage />} />
    </Routes>
  );
}

export default App;
