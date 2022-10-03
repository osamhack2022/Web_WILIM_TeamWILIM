import { Layout } from "./layout/Layout";
import { Route, Routes } from "react-router-dom";
import { LoginPage } from "./pages/loginPage";
import { CreateAccountPage } from "./pages/creatAccountPage";
import { GoalPlanPage } from "./pages/goalPlanPage";
import { RefCommunityPage } from "./pages/refCommunityPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />}/>
      <Route path="/createAccountPage" element={<CreateAccountPage />}/>
      <Route path="/goalPlanPage" element={<GoalPlanPage />} />
      <Route path="/refCommunityPage" element={<RefCommunityPage />} />

      <Route path="/test" element={<Layout />} />
    </Routes>
  );
}

export default App;
