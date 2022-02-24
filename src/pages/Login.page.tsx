import { Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import LoginForm from "components/login/LoginForm.component";
import leavesImg from "assets/images/leaves.png";
import color from "styles/color";

const LoginPageContainer = styled(Stack)({
  backgroundColor: color.palette.secondary.darker,
  width: "100vw",
  height: "100vh",
});

const LeavesImg = styled("img")({
  position: "absolute",
  top: "30vh",
  right: "10vw",
  height: "auto",
});

interface LoginPropsI {
  setIsLogedIn: Function;
}

const Login = (props: LoginPropsI) => {
  return (
    <LoginPageContainer justifyContent='center' alignItems='center'>
      <LoginForm setIsLogedIn={props.setIsLogedIn} />
      <LeavesImg src={leavesImg} alt='Leaves' />
    </LoginPageContainer>
  );
};

export default Login;
