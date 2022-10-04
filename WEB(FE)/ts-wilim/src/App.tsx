import { Layout } from "./layout/Layout";
import { Route, Routes } from "react-router-dom";
import { LoginPage } from "./pages/loginPage";
import { CreateAccountPage } from "./pages/createAccountPage";
import { GoalPlanPage } from "./pages/goalPlanPage";
import { RefCommunityPage } from "./pages/refCommunityPage";
import { FindPasswordPage } from "./pages/findPasswordPage";
import { UserSchemaPage } from "./pages/userSchemaPage";
import { Button } from "./components/atom/button";
import { Link } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<>
        <LoginPage />
        <Link to="/test">
          <Button innerText="테스트페이지로 이동" onClick={() => console.log("테스트페이지로 이동")} />
        </Link>
      </>} />
      <Route path="/createAccount" element={<CreateAccountPage />} />
      <Route path="/goalPlan/:username" element={<GoalPlanPage />} />
      <Route path="/refCommunity/:username" element={<RefCommunityPage />} />
      <Route path="/findPassword" element={<FindPasswordPage />} />
      <Route path="/test" element={<Layout />} />
      <Route path="/:username" element={<UserSchemaPage />} />
    </Routes>
  );
}

export default App;
