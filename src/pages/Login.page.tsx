import LoginForm from "components/login/LoginForm.component";
import Message from "components/common/Message.component";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

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
      <LoginForm setIsLogedIn={props.setIsLogedIn} />
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
