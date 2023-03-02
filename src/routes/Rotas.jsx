import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import Portfolio from "../pages/Portfolio/Portfolio";
import Layout from "../shared/layout/Layout";
import Contato from '../pages/Contato/Contato'
function Rotas() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio/>}/>
            <Route path="/contato" element={<Contato/>}/>
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default Rotas;
