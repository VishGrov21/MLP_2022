import * as Yup from "yup";
import { useState } from "react";
import { Box, Button, Stack, Typography, styled } from "@mui/material";
import { TextField } from "formik-mui";
import { useNavigate } from "react-router-dom";
import { Field, Form, Formik } from "formik";
import FormLayout from "components/login/LoginFormBackground.component";
import ModalComponent from "components/common/Modal.component";

import color from "styles/color";

const FieldContainer = styled(Stack)({
  margin: "30px 0 0",
});

const ButtonContainer = styled(Box)({
  margin: "38px 0 0",
  "& .cancelBtn": {
    marginRight: "46px",
    background: color.palette.primary.light,
  },
});

const FormButton = styled(Button)({
  width: "100%",
  backgroundColor: color.palette.primary.main,
  color: color.palette.black.contrastText,
  "&:hover": {
    backgroundColor: color.palette.primary.light,
  },
});

const FormContainer = styled("div")({
  "& h1": {
    color: color.palette.greyShade.dark,
    lineHeight: "35.16px",
    paddingBottom: "10%",
  },
  "& p": {
    color: color.palette.greyShade.dark,
  },
});

const FormInitState: object = {
  email: "",
};

const getFormvalidations = () =>
  Yup.object().shape({
    email: Yup.string().required("Email is a required field").email("Invalid e-mail"),
  });

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [isForgotPassword, setisForgotPassword] = useState(true);

  const handleFormSubmit = async () => {
    setisForgotPassword(false);
  };

  const handleFormRedirection = () => {
    navigate("/login");
  };

  return isForgotPassword ? (
    <FormLayout>
      <Formik initialValues={{ ...FormInitState }} validationSchema={getFormvalidations()} onSubmit={handleFormSubmit}>
        <FormContainer>
          <Typography variant='h1'>Forgot Password</Typography>
          <Typography variant='body2'>
            Please enter your email and instructions to reset your password will be sent.
          </Typography>
          <Form>
            <FieldContainer spacing={2}>
              <label>Email address</label>
              <Field component={TextField} placeholder='user@mail.com' id='email' name='email' />
            </FieldContainer>
            <ButtonContainer>
              <Stack justifyContent='space-between' direction='row'>
                <FormButton className='cancelBtn' variant='contained' onClick={() => navigate("/login")}>
                  Cancel
                </FormButton>
                <FormButton className='sendBtn' color='primary' type='submit' variant='contained'>
                  Send
                </FormButton>
              </Stack>
            </ButtonContainer>
          </Form>
        </FormContainer>
      </Formik>
    </FormLayout>
  ) : (
    <ModalComponent
      modalBody='An email has been sent with instructions for your password reset'
      buttonArr={[{ id: 1, buttonText: "Ok", onClickFn: handleFormRedirection }]}
      closeIcon={false}
    />
  );
};

export default ForgotPassword;
