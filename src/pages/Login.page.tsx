import { Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import LoginForm from "components/login/LoginForm.component";
import leavesImg from "assets/images/leaves.png";
import color from "styles/color";
import Message from "components/common/Message.component";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

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
  const { state }: { state: any } = useLocation();
  const [showLogoutMsg, setShowLogoutMsg] = useState(false);

  useEffect(() => {
    if (state?.isLogout) {
      const val = state.isLogout;
      setShowLogoutMsg(val);
    }
  }, [state]);

  const logoutMsgClose = () => {
    setShowLogoutMsg(false);
    window.history.replaceState({}, document.title);
  };

  return (
    <>
      <LoginPageContainer justifyContent='center' alignItems='center'>
        <LoginForm setIsLogedIn={props.setIsLogedIn} />
        <LeavesImg src={leavesImg} alt='Leaves' />
      </LoginPageContainer>
      <Message
        openFl={showLogoutMsg}
        textToDisplay="You've been logged-out successfully"
        variant='success'
        closeMessageFn={logoutMsgClose}
      />
    </>
  );
};

export default Login;
