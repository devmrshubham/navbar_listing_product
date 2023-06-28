import React from "react";
import Header from "./Component/Header";
import Home from "./Pages/Home";
import { Routes, Route } from "react-router-dom";
import NotFound from "./Pages/NotFound";
import Blogs from "./Data/Blog";
import Gellary from "./Pages/Gellary";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/gellary" element={<Gellary />}></Route>
        <Route path="/blog/:id" element={<Blogs />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </>
  );
}
export default App;
