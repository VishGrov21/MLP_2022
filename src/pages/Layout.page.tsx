import { Header } from "./Header.page";
import SideNav from "./SideNav.page";
import { Footer } from "./Footer.page";
import { styled, Stack } from "@mui/material"

const LayoutContainer = styled(Stack)({
    flexDirection: "row"
});

interface layoutTypesI {
    children: object
}

export const Layout = (props: layoutTypesI) => {
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