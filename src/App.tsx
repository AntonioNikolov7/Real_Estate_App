import React from "react";
import Home from "./pages/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListPage from "./pages/listPage/ListPage";
import Layout from "./pages/layout/Layout";
import Login from "./pages/login/Login";
import SinglePage from "./pages/singlePage/SinglePage";
import Register from "./pages/register/Register";

const App: React.FC = () => {
  const router = (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/list" element={<ListPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/:id" element={<SinglePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );

  return router;
};

export default App;
