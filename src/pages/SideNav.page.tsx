import { NavLink } from "react-router-dom";
import { styled, Stack } from "@mui/material";

const SideBarContainer = styled(Stack)({
    background: "grey",
    flexBasis: "25%",
    flex: "0 0 200px",
    height: "100vw",
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