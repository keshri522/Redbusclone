import React from "react";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home_Page from "./Pages/Home_Page";
import AvailableBusPage from "./Pages/Available_bus_page";
import InfoPage from "./Pages/Info_page";
import PaymentPage from "./Pages/Payment_page";
import Allbus from "./Components/allbuses";
const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home_Page />} />
        <Route path="/availablebus" element={<AvailableBusPage />} />
        <Route path="/info" element={<InfoPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/allbus" element={<Allbus />} />
      </Routes>
    </div>
  );
};

export default Router;
