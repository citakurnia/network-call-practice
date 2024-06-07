import NavBar from "./components/navbar";
import RegistPage from "./components/regist-page";
import UsersDisplay from "./components/users-display";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<UsersDisplay />} />
        <Route path="/regist-page" element={<RegistPage />} />
      </Routes>
    </>
  );
}

export default App;
