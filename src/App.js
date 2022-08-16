import "./styles.css";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";

import Show from "./pages/Show";
export default function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home className="home-page" />}></Route>

        <Route exact path="/show/:id" element={<Show />}></Route>

        <Route element={<h1>This is 404 page</h1>}>This is 404 page</Route>
      </Routes>
    </div>
  );
}
