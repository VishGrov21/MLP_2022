import * as Yup from "yup";

import { Box, Button, Stack } from "@mui/material";
import { CheckboxWithLabel, TextField } from "formik-mui";
import { styled } from "@mui/material/styles";
import sustainItLogo from "assets/images/sustainItLogo.png";
import { Link } from "react-router-dom";
import { LoginFormI } from "model/login.model";
import { Field, Form, Formik } from "formik";
import { useState } from "react";
import Message from "../common/Message.component";

const LoginFormContainer = styled(Stack)({
  backgroundColor: "#fff",
  width: "28rem",
  height: "28rem",
  padding: "20px 50px",
});

const LogoImg = styled("img")({
  width: "50%",
  height: "auto",
  display: "block",
});

const FieldContainer = styled(Stack)({
  margin: "1.5rem 0",
});

const LoginButtonContainer = styled(Box)({
  margin: "2rem 0",
});

const LoginButton = styled(Button)({
  width: "100%",
  backgroundColor: "#DAA900",
  color: "#000",
  "&:hover": {
    backgroundColor: "#ECD276",
  },
});

const LoginFormInitState: LoginFormI = {
  email: "",
  password: "",
};

const checkboxStyle = {
  "&.Mui-checked": {
    color: "#DAA900",
  },
};

const getLoginFormvalidations = () =>
  Yup.object().shape({
    email: Yup.string().required("Email is a required field").email("Invalid e-mail"),
    password: Yup.string().required("Password is a required field"),
  });

const LoginForm = () => {
  // True -> Success, False -> Error, null -> None
  const [showMessage, setShowMessage] = useState<boolean | null>();

  const handleLoginFormSubmit = () => {
    setShowMessage(true);
  };

  return (
    <LoginFormContainer>
      <LogoImg src={sustainItLogo} alt='Sustain It Logo' />
      <Formik
        initialValues={{ ...LoginFormInitState }}
        validationSchema={getLoginFormvalidations()}
        onSubmit={handleLoginFormSubmit}
      >
        <Form>
          <FieldContainer spacing={1}>
            <label>Username/ Email address</label>
            <Field component={TextField} placeholder='user@mail.com' id='email' name='email' />
          </FieldContainer>
          <FieldContainer spacing={1}>
            <label>Password</label>
            <Field component={TextField} type='password' placeholder='**********' id='password' name='password' />
          </FieldContainer>
          <LoginButtonContainer>
            <LoginButton type='submit' variant='contained'>
              Login
            </LoginButton>
          </LoginButtonContainer>
          <Stack justifyContent='space-between' direction='row'>
            <Field
              component={CheckboxWithLabel}
              type='checkbox'
              Label={{ label: "Remember Me" }}
              sx={checkboxStyle}
              defaultChecked={false}
            />
            <Link to='/forgot-password' style={{ paddingTop: "10px", color: "Black" }}>
              Forgot Password
            </Link>
          </Stack>
        </Form>
      </Formik>
      <Message
        closeMessageFn={() => setShowMessage(null)}
        textToDisplay='Login Successful'
        openFl={showMessage === true}
        variant='success'
      />
    </LoginFormContainer>
  );
};

export default LoginForm;
