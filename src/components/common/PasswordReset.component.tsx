import { styled, Box, Typography, Stack, InputLabel, Button, FormHelperText } from "@mui/material";
import { Form, Formik } from "formik";
import MuiTextField from "@mui/material/TextField";
import FormLayout from "components/login/LoginFormBackground.component";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import * as Yup from "yup";
import { useNavigate, useLocation } from "react-router-dom";

import { useState } from "react";
import { userDetailsArr } from "constants/userDetails.constants";
import { userLoginACtionCreator } from "state/actions/user/user.action";
import { useAppDispatch } from "state/store";
import ModalComponent from "components/common/Modal.component";
import passwordResetImage from "assets/images/password_reset.gif";

interface EventI {
  value: string;
}
const PasswordContainer = styled(Box)(({ theme }) => ({
  "& h1": {
    color: theme.palette.grey[700],
  },
  "& .MuiTypography-body2 ": {
    color: theme.palette.grey[700],
    padding: "20px 0 35px 0",
  },
  "& form": {
    "& .MuiTextField-root": {
      margin: "8px 0",
    },
    "& input": {
      padding: "6px 10px",
      fontSize: "16px",
      letterSpacing: "3px",
      border: `1px solid ${theme.palette.grey[500]}`,
    },
    "& label": {
      color: theme.palette.grey[900],
    },
    "& > div": {
      "&:last-child": { marginTop: "30px" },
    },
    "& button": {
      width: "100%",
      marginRight: "10px",
      "&:last-child": {
        marginLeft: "10px",
        marginRight: "0",
      },
    },
    "& .MuiFormHelperText-root": {
      marginBottom: "7px",
    },
  },
}));

const PasswordRules = styled(Stack)(({ theme }) => ({
  paddingBottom: "35px",
  "& .MuiTypography-body2": {
    padding: "0",
    fontSize: "14px",
  },
  "& .css-nen11g-MuiStack-root": {
    flexDirection: "row",
    alignItems: "center",
    padding: "15px 0 0",
    "& .MuiTypography-body2": {
      padding: "0 0 0 13px",
    },
    "& .MuiSvgIcon-root": {
      width: "18px",
      height: "18px",
    },
  },
}));

const initialFormState = {
  password: "",
  changepassword: "",
};

const PasswordReset = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { state }: any = useLocation();

  const [charNumberValid, setCharNumberValid] = useState(false);
  const [specialCharValid, setSpecialCharValid] = useState(false);
  const [uppercaseValid, setUppercaseValid] = useState(false);
  const [numberValid, setNumberValid] = useState(false);
  const [showResetModal, setShowResetModal] = useState(false);

  const handleFormSubmit = (e: typeof initialFormState) => {
    const isValidUser = userDetailsArr.findIndex((user) => user.email === state.userEmail);
    const updatedValues = {
      password: e.password,
      passwordUpdateDate: new Date().toLocaleString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
      isFirstTimeLogin: false,
    };
    const updatedUserData = { ...userDetailsArr[isValidUser], ...updatedValues };

    dispatch(userLoginACtionCreator(updatedUserData));
    setShowResetModal(true);
  };

  const handleFormRedirection = () => {
    navigate("/login");
  };

  const handlePasswordChange = (e: { target: EventI }) => {
    const specialCharPattern = /[ !@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/g;
    const numberPattern = /[0-9]/;

    if (e.target.value.length >= 8) {
      setCharNumberValid(true);
    } else {
      setCharNumberValid(false);
    }
    if (specialCharPattern.test(e.target.value)) {
      setSpecialCharValid(true);
    } else {
      setSpecialCharValid(false);
    }
    if (/[A-Z]/.test(e.target.value) && /[a-z]/.test(e.target.value)) {
      setUppercaseValid(true);
    } else {
      setUppercaseValid(false);
    }
    if (numberPattern.test(e.target.value)) {
      setNumberValid(true);
    } else {
      setNumberValid(false);
    }
  };
  const passwordValidation = Yup.object({
    password: Yup.string()
      .required("Password is required")
      .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, " "),
    changepassword: Yup.string()
      .oneOf([Yup.ref("password"), null], `Password doesn't match`)
      .required("Password confirmation is required"),
  });

  return (
    <>
      <FormLayout showLogo={true} prevPath={state.prevPath}>
        <PasswordContainer>
          <Typography variant='h1'>Password Reset</Typography>
          <Typography variant='body2'>Please enter your new password</Typography>
          <Formik initialValues={initialFormState} validationSchema={passwordValidation} onSubmit={handleFormSubmit}>
            {({ values, submitForm, isSubmitting, touched, errors, handleChange, submitCount }) => {
              return (
                <Form>
                  <Stack>
                    <InputLabel className='label' id='password'>
                      New Password
                    </InputLabel>
                    <MuiTextField
                      type='password'
                      name='password'
                      error={touched["password"] && !!errors["password"]}
                      onChange={(e: { target: EventI }) => {
                        handleChange(e);
                        handlePasswordChange(e);
                      }}
                      value={values?.password}
                    />
                    {errors["password"] !== " " && <FormHelperText error={true}>{errors["password"]}</FormHelperText>}
                  </Stack>
                  <PasswordRules>
                    <Typography variant='body2'>Password must :</Typography>
                    <Stack>
                      <CheckCircleIcon color={charNumberValid ? "success" : "disabled"} />
                      <Typography variant='body2'>Be at least 8 characters long</Typography>
                    </Stack>
                    <Stack>
                      <CheckCircleIcon color={uppercaseValid ? "success" : "disabled"} />
                      <Typography variant='body2'>Include at least one upper case and one lower case letter</Typography>
                    </Stack>
                    <Stack>
                      <CheckCircleIcon color={numberValid ? "success" : "disabled"} />
                      <Typography variant='body2'>Include at least one digit number</Typography>
                    </Stack>
                    <Stack>
                      <CheckCircleIcon color={specialCharValid ? "success" : "disabled"} />
                      <Typography variant='body2'>Include at least one special character</Typography>
                    </Stack>
                  </PasswordRules>
                  <Stack>
                    <InputLabel className='label' id='password'>
                      Confirm Password
                    </InputLabel>

                    <MuiTextField
                      type='password'
                      name='changepassword'
                      error={touched["changepassword"] && !!errors["changepassword"]}
                      onChange={handleChange}
                      value={values?.changepassword}
                    />
                  </Stack>
                  <FormHelperText error={true}>{errors["changepassword"]}</FormHelperText>

                  <Stack justifyContent='space-between' direction='row'>
                    <Button className='cancelBtn' color='primary' variant='outlined' onClick={() => navigate(-1)}>
                      Cancel
                    </Button>
                    <Button className='sendBtn' color='primary' type='submit' variant='contained'>
                      Send
                    </Button>
                  </Stack>
                </Form>
              );
            }}
          </Formik>
        </PasswordContainer>
      </FormLayout>
      <ModalComponent
        body='Your password has been reset!'
        buttonArr={[{ id: 1, buttonText: "Back to login", onClickFn: handleFormRedirection }]}
        showCloseIcon={false}
        showModal={showResetModal}
        gifImage={passwordResetImage}
      />
    </>
  );
};

export default PasswordReset;
