import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "pages/Login.page";
import Layout from "pages/Layout.page";
import SupplyMetrics from "pages/SupplyMetrics.page";

const RootNavigator = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Navigate replace to='/login' />} />
      </Routes>

      <Layout>
        <Routes>
          <Route path='/supply-metrics' element={<SupplyMetrics />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default RootNavigator;
