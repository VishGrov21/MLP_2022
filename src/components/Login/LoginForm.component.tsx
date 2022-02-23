import * as Yup from "yup";

import { Box, Button, Stack } from "@mui/material";
import { CheckboxWithLabel, TextField } from "formik-mui";
import { styled } from "@mui/material/styles";
import sustainItLogo from "assets/images/sustainItLogo.png";
import { Link, useNavigate } from "react-router-dom";
import { LoginFormI } from "model/login.model";
import { Field, Form, Formik } from "formik";

import { theme }from "Theme.style";

const LoginFormContainer = styled(Stack)({
  backgroundColor: theme.palette.secondary.main,
  width: "28rem",
  height: "28rem",
  padding: "20px 50px",
  zIndex: 10,
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
  backgroundColor: theme.palette.yellow.main,
  color: theme.palette.primary.dark,
  "&:hover": {
    backgroundColor: theme.palette.yellow.light,
  },
});

const LoginFormInitState: LoginFormI = {
  email: "",
  password: "",
};

const checkboxStyle = {
  "&.Mui-checked": {
    color: theme.palette.yellow.main,
  },
};

const getLoginFormvalidations = () =>
  Yup.object().shape({
    email: Yup.string().required("Email is a required field").email("Invalid e-mail"),
    password: Yup.string().required("Password is a required field"),
  });

const LoginForm = () => {
  const navigate = useNavigate();

  const handleLoginFormSubmit = async () => {
    navigate("/supply-metrics");
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
            <LoginButton color='primary' type='submit' variant='contained'>
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
    </LoginFormContainer>
  );
};

export default LoginForm;
