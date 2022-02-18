import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/Login.page";
import SupplyMetrics from "../pages/SupplyMetrics.page";

const RootNavigator = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Navigate replace to='/login' />} />
        <Route path='/supplyMetrics' element={<SupplyMetrics />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RootNavigator;
