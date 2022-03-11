import SideNav from "components/common/SideNav.component";
import Footer from "components/footer/Footer.component";
import { styled, Stack } from "@mui/material";
import UserProfileHeader from "components/common/UserProfileHeader.component";
import { Navigate, Route, Routes } from "react-router-dom";
import SupplyMetrics from "pages/SupplyMetrics.page";
import Settings from "pages/Settings.page";
import { settingsViewArr } from "constants/settings.constants";

const LayoutContainer = styled(Stack)({
  flexDirection: "row",
  marginTop: "5rem",
});

const Layout = () => {
  return (
    <LayoutContainer>
      <UserProfileHeader />
      <SideNav />
      <Routes>
        <Route path='/' element={<Navigate replace to='/supply-metrics' />} />
        <Route path='/supply-metrics' element={<SupplyMetrics />} />
        <Route path='/settings'>
          <Route index={true} element={<Settings />} />
          {settingsViewArr.map((view, index) => (
            <Route key={index + view.name} path={view.path} element={view.component} />
          ))}
        </Route>
      </Routes>
      {/* <Footer /> */}
    </LayoutContainer>
  );
};

export default Layout;
