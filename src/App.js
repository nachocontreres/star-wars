import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./app/components/header";
import Characters from "./features/characters";
import Favorites from "./features/favorites";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Characters />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </>
  );
};

export default App;
