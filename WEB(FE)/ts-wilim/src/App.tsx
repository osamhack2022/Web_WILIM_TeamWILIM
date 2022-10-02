import { Layout } from "./layout/Layout";
import { Route, Routes } from "react-router-dom";
import { LoginPage } from "./pages/loginPage";
import { CreateAccountPage } from "./pages/creatAccountPage";

function App() {
  return (
    //<Layout />
    
    <Routes>
      <Route path="/" element={<LoginPage />}/>
      <Route path="/CreateAccountPage" element={<CreateAccountPage />}/>
    </Routes>
  );
}

export default App;
