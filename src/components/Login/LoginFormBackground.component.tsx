import { Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import leavesImg from "assets/images/leaves.png";
import sustainItLogo from "assets/images/sustainItLogo.png";
import UserProfileHeader from "components/common/UserProfileHeader.component";

import color from "styles/color";

const FormContainer = styled(Stack)({
  backgroundColor: color.palette.common.white,
  width: "28rem",
  padding: "40px 60px",
  zIndex: 10,
});

const FormBackground = styled(Stack)({
  boxShadow: "0px 12px 24px rgba(69, 124, 189, 0.03)",

  "& .MuiTypography-body1, & .MuiInputBase-formControl, label": {
    fontFamily: "Roboto Regular",
  },
  "& .MuiInputBase-input": {
    padding: "7px 14px",
  },
  "& button": {
    textTransform: "capitalize",
  },
});
const PageContainer = styled(Stack)({
  width: "100vw",
  height: "100vh",
  boxShadow: "0px 12px 24px rgba(69, 124, 189, 0.03)",
  backgroundColor: "inherit",
  justifyContent: "center",
  alignItems: "center",
  "& .MuiTypography-body1, & .MuiInputBase-formControl, label": {
    fontFamily: "Roboto Regular",
  },
  "& .MuiInputBase-input": {
    padding: "7px 14px",
  },
  "& button": {
    textTransform: "capitalize",
  },
});

const LeavesImg = styled("img")({
  position: "absolute",
  top: "30vh",
  right: "10vw",
  height: "auto",
});
const LogoImg = styled("img")({
  width: "285px",
  marginBottom: "35px",
  height: "auto",
  display: "block",
});

interface formDataI {
  children: object;
  showLogo?: boolean;
  prevPath?: string;
}

const FormLayout = (props: formDataI) => {
  return (
    <PageContainer>
      {props?.showLogo && (
        <>
          {props?.prevPath === "/user-profile" ? (
            <UserProfileHeader headerLogo={true} />
          ) : (
            <LogoImg src={sustainItLogo} alt='Sustain It Logo' />
          )}
        </>
      )}

      <FormBackground justifyContent='center' alignItems='center'>
        <LeavesImg src={leavesImg} alt='Leaves' />
        <FormContainer>{props.children}</FormContainer>
      </FormBackground>
    </PageContainer>
  );
};

export default FormLayout;
