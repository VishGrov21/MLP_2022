import Header from "pages/Header.page";
import SideNav from "pages/SideNav.page";
import Footer from "pages/Footer.page";
import { styled, Stack } from "@mui/material"

const LayoutContainer = styled(Stack)({
    flexDirection: "row"
});

interface layoutTypesI {
    children: object
}

const Layout = (props: layoutTypesI) => {
    const { children } = props;
    return (
        <LayoutContainer>
            <SideNav />
            <div>
                <Header />
                <div>{children}</div>
                <Footer />
            </div>
        </LayoutContainer>
    )
}

export default Layout;