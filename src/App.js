import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import "./App.css";
import Layout from "./components/Layout/Layout";
import Homepage from "./components/Homepage/Homepage";
import Search from "./components/SearchPage/Search";

import GetDetails from "./components/MovieDetails/GetDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path="search" element={<Search />}></Route>
        <Route path="/detailsPage/:id" element={<GetDetails />} />
      </Route>
    </Routes>
  );
}

export default App;
