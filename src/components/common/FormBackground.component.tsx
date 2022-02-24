import { Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import leavesImg from "assets/images/leaves.png";

import color from "styles/color";

const FormContainer = styled(Stack)({
  backgroundColor: color.palette.secondary.main,
  width: "28rem",
  height: "28rem",
  padding: "20px 50px",
  zIndex: 10,
  "& .MuiTypography-body1, & .MuiInputBase-formControl": {
    fontFamily: "Roboto Regular",
  },
});

const PageContainer = styled(Stack)({
  width: "100vw",
  height: "100vh",
});

const LeavesImg = styled("img")({
  position: "absolute",
  top: "30vh",
  right: "10vw",
  height: "auto",
});

const FormLayout = () => {
  return (
    <PageContainer justifyContent='center' alignItems='center'>
      <LeavesImg src={leavesImg} alt='Leaves' />
      <FormContainer></FormContainer>
    </PageContainer>
  );
};

export default FormLayout;
