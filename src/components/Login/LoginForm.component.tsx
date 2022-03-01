import * as Yup from "yup";

import { Box, Button, Stack } from "@mui/material";
import { CheckboxWithLabel, TextField } from "formik-mui";
import { styled } from "@mui/material/styles";
import sustainItLogo from "assets/images/sustainItLogo.png";
import { Link, useNavigate } from "react-router-dom";
import { LoginFormI } from "model/login.model";
import { Field, Form, Formik } from "formik";
import FormLayout from "components/login/LoginFormBackground.component";

import color from "styles/color";

const LogoImg = styled("img")({
  width: "50%",
  height: "auto",
  display: "block",
});

const FieldContainer = styled(Stack)({
  margin: "1.5rem 0",
});

const LoginButtonContainer = styled(Box)({
  margin: "40px 0 20px",
});

const LoginButton = styled(Button)({
  width: "100%",
  backgroundColor: color.palette.yellow.main,
  color: color.palette.primary.dark,
  "&:hover": {
    backgroundColor: color.palette.yellow.light,
  },
});

const BottomContainer = styled(Stack)({
  justifyContent: 'space-between', 
  flexDirection:'row',
  color : color.palette.greyShade.main,
  fontSize: '14px',
  fontFamily: "Roboto Regular",
  '& label': {
    '& span': {fontSize: 'inherit'},
  },
  '& a': {
    paddingTop: "10px", 
    color : color.palette.greyShade.main,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline'
    }
  }
});

const LoginFormInitState: LoginFormI = {
  email: "",
  password: "",
  rememberMe: false,
};

const checkboxStyle = {
  "&.Mui-checked": {
    color: color.palette.yellow.main,
  },
};

const getLoginFormvalidations = () =>
  Yup.object().shape({
    email: Yup.string().required("Email is a required field").email("Invalid e-mail"),
    password: Yup.string()
      .required("Password is a required field")
  });

interface LoginPropsI {
  setIsLogedIn: Function;
}

const LoginForm = (props: LoginPropsI) => {
  const navigate = useNavigate();

  const handleLoginFormSubmit = async () => {
    props.setIsLogedIn(true);
    navigate("/supply-metrics");
  };

  return (
      <FormLayout>
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
            <BottomContainer>
              <Field
                name='rememberMe'
                id='rememberMe'
                component={CheckboxWithLabel}
                type='checkbox'
                Label={{ label: "Remember Me" }}
                sx={checkboxStyle}
              />
              <Link to='/forgot-password'>
                Forgot Password?
              </Link>
            </BottomContainer>
          </Form>
        </Formik>
      </FormLayout>
  );
};

export default LoginForm;
