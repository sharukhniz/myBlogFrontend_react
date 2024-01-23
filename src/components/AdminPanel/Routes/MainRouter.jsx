import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminPanel from "../AdminPanel";
import MainLayout from "../../Layout/MainLayout/MainLayout";

const MainRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="admin" element={<AdminPanel />} />
      </Routes>
    </>
  );
};

export default MainRouter;
