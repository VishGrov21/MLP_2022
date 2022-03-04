import { NavLink } from "react-router-dom";
import { styled, Stack } from "@mui/material";

const SideBarContainer = styled(Stack)({
  background: "grey",
  flexBasis: "25%",
  flex: "0 0 200px",
  height: "100vw",
});

const SidebarItems = [
  {
    name: "Supply Metrics",
    path: "/supply-metrics",
    imageSrc: "dummyimage",
  },
];
const SideNavigation = () => {
  return (
    <SideBarContainer>
      {SidebarItems.map((linkItems, index) => {
        return (
          <NavLink to={linkItems.path} key={index}>
            {linkItems.name}
          </NavLink>
        );
      })}
    </SideBarContainer>
  );
};

export default SideNavigation;
