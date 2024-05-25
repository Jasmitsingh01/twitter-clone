import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Layout from "./Layout/Layout";
import Profile from "./Pages/Profile";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="/profile/:id" element={<Profile />} />
      </Route>
    </Routes>
  );
}

export default App;
