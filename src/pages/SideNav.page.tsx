import { NavLink } from "react-router-dom";
import { styled, Stack } from "@mui/material";
import { theme }from "Themes/Theme.style";

const SideBarContainer = styled(Stack)({
    background: theme.palette.secondary.main,
    flexBasis: "25%",
    flex: "0 0 200px",
    position: "fixed",
    zIndex: 99999,
    top: 0,
    left: "auto",
    color: theme.palette.secondary.main,
    width: "8%",
    height: "100vh",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
});

const SideNavigation = () => {

    const SidebarItems = [
        {
            name: "Metrics", component: "/supply-metrics", imageURL: "dummyimage"
        }
    ];

    return (
        <SideBarContainer>
            {SidebarItems.map((linkItems, index) => {
                return <NavLink to={linkItems.component} key={index}>{linkItems.name}</NavLink>
            })}
        </SideBarContainer>
    )
}

export default SideNavigation;