import SideNav from "components/sideNav/SideNav.component";
import Footer from "components/footer/Footer.component";
import { styled, Stack } from "@mui/material";
import UserProfileHeader from "components/common/UserProfileHeader.component";
import { Navigate, Route, Routes } from "react-router-dom";
import SupplyMetrics from "pages/SupplyMetrics.page";

const LayoutContainer = styled(Stack)({
  flexDirection: "row",
});

interface layoutTypesI {
  children: object;
}

const Layout = () => {
  return (
    <LayoutContainer>
      <UserProfileHeader />
      <SideNav />
      <Routes>
        <Route path='/' element={<Navigate replace to='/supply-metrics' />} />
        <Route path='/supply-metrics' element={<SupplyMetrics />} />
      </Routes>
      <Footer />
    </LayoutContainer>
  );
};

export default Layout;
