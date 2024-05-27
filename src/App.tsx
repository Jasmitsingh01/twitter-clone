import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Layout from "./Layout/Layout";
import Profile from "./Pages/Profile";
import Login from "./components/loginFrom";
import RegisterForm from "./components/RegisterForm";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="*" element={<h1 className="flex  items-center justify-center min-h-screen text-6xl font-semibold">404 Not Found</h1>} />
      </Route>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signin" element={<RegisterForm/>}/>

    </Routes>
  );
}

export default App;
