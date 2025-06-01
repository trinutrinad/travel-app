import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Search from "../pages/Search";
import Planner from "../pages/Planner";
import BudgetCalculator from "../pages/BudgetCalculator";
import CurrencyConverter from "../pages/CurrencyConverter";
import LocalServices from "../pages/LocalServices";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/profile" element={<Profile />} />
    <Route path="/search" element={<Search />} />
    <Route path="/planner" element={<Planner />} />
    <Route path="/budget" element={<BudgetCalculator />} />
    <Route path="/currency" element={<CurrencyConverter />} />
    <Route path="/services" element={<LocalServices />} />
  </Routes>
);

export default AppRoutes;
