import { Layout } from "./layout/Layout";
import { Route, Routes } from "react-router-dom";
import { LoginPage } from "./pages/loginPage";
import { CreateAccountPage } from "./pages/creatAccountPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />}/>
      <Route path="/createAccountPage" element={<CreateAccountPage />}/>

      <Route path="/test" element={<Layout />} />
    </Routes>
  );
}

export default App;
