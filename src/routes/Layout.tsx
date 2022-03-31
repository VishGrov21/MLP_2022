import { useEffect, useState } from "react";
import SideNav from "components/common/SideNav.component";
import Footer from "components/footer/Footer.component";
import { styled, Stack } from "@mui/material";
import UserProfileHeader from "components/common/UserProfileHeader.component";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import SupplyMetrics from "pages/SupplyMetrics.page";
import Settings from "pages/Settings.page";
import { settingsViewArr } from "constants/settings.constants";
import UserProfileDetails from "components/userProfileDetails/UserProfileDetails.component";
import MetricsConfiguration from "pages/MetricsConfig.page";

const LayoutContainer = styled(Stack)({
  flexDirection: "row",
  marginTop: "5rem",
});

const Layout = () => {
  const [headerLogo, setHeaderlogo] = useState(false);
  const location: any = useLocation();

  useEffect(() => {
    if (location.pathname === "/user-profile") {
      setHeaderlogo(true);
    } else {
      setHeaderlogo(false);
    }
  }, [location.pathname]);
  return (
    <LayoutContainer>
      <UserProfileHeader headerLogo={headerLogo} />
      {!headerLogo && <SideNav />}
      <Routes>
        <Route path='/' element={<Navigate replace to='/supply-metrics' />} />
        <Route path='/supply-metrics' element={<SupplyMetrics />} />
        <Route path='/user-profile' element={<UserProfileDetails />}></Route>
        <Route path='/settings'>
          <Route index={true} element={<Settings />} />
          {settingsViewArr.map((view, index) => (
            <Route key={index + view.name} path={view.path} element={view.component} />
          ))}
        </Route>
        <Route path='/metrics-config' element={<MetricsConfiguration />}></Route>
      </Routes>
      {/* <Footer /> */}
    </LayoutContainer>
  );
};

export default Layout;
