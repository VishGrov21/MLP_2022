import { Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import leavesImg from "assets/images/leaves.png";

import color from "styles/color";

const FormContainer = styled(Stack)({
  backgroundColor: color.palette.secondary.main,
  width: "28rem",
  padding: "40px 60px",
  zIndex: 10,
});

const PageContainer = styled(Stack)({
  width: "100vw",
  height: "100vh",
  backgroundColor: color.palette.secondary.darker,
  "& .MuiTypography-body1, & .MuiInputBase-formControl, label": {
    fontFamily: "Roboto Regular",
  },
  "& .MuiInputBase-input": {
    padding: "7px 14px",
  },
  '& button':{
    textTransform: 'capitalize'
  }
});

const LeavesImg = styled("img")({
  position: "absolute",
  top: "30vh",
  right: "10vw",
  height: "auto",
});

interface formDataI {
  children: object
}

const FormLayout = (props:formDataI) => {

  return (
    <PageContainer justifyContent='center' alignItems='center'>
      <LeavesImg src={leavesImg} alt='Leaves' />
      <FormContainer>
          {props.children}
      </FormContainer>
    </PageContainer>
  );
};

export default FormLayout;
