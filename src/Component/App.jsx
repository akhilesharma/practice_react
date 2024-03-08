import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Toggle from "./Toggle";
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Toggle />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
