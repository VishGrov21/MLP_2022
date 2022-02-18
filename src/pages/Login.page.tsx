import { Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import LoginForm from "components/Login/LoginForm.component";
import leavesImg from "assets/images/leaves.png";

const LoginPageContainer = styled(Stack)({
  backgroundColor: "#E5E5E5",
  width: "100vw",
  height: "100vh",
});

const LeavesImg = styled("img")({
  position: "absolute",
  top: "30vh",
  right: "10vw",
  height: "auto",
});

const Login = () => {
  return (
    <LoginPageContainer justifyContent='center' alignItems='center'>
      <LoginForm />
      <LeavesImg src={leavesImg} alt='Leaves' />
    </LoginPageContainer>
  );
};

export default Login;
