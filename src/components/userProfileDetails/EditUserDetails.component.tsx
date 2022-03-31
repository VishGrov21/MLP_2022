import { Box, Button, Stack, styled, Typography } from "@mui/material";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";

import { useDispatch } from "react-redux";

import { Action } from "redux";
import { RootState } from "state/store";
import { TextField } from "formik-mui";
import { ThunkDispatch } from "redux-thunk";
import { userLoginACtionCreator } from "state/actions/user/user.action";
import { UserDetailsI } from "model/user.model";

interface ProfileProps {
  closeProfileDialogFn: Function;
  userData: UserDetailsI;
}
const EditFormContainer = styled("div")(({ theme }) => ({
  width: "100%",
  "& button": {
    marginLeft: "20px",
    boxShadow: "none",
    color: theme.palette.common.black,
  },
  "& form": {
    margin: "0!important",
  },
  "& .MuiTextField-root,.MuiInputBase-root": {
    ...theme.typography.body2,
  },
}));

const FieldContainer = styled(Stack)(({ theme }) => ({
  "& .MuiBox-root": {
    "& .MuiTypography-body2": {
      WebkitTextFillColor: "rgba(0, 0, 0, 0.38)",
    },
    "& .Mui-disabled": {
      padding: 0,
      "& .MuiOutlinedInput-notchedOutline": {
        border: 0,
      },
    },
  },
  [theme.breakpoints.up("md")]: {
    flexFlow: "row wrap",
  },
}));
const getProfileFormValidation = () => {
  return Yup.object().shape({
    mobile: Yup.string()
      .required("required_field")
      .matches(/^[0-9]+$/, "number_must"),
    jobTitle: Yup.string()
      .required("required_field")
      .matches(/^[^*|":<>.[\]{}`\\()';#%@!,?_+*=/\-&*$0-9]+$/, "noSplChar"),
  });
};

export const EditFormComponent = (props: ProfileProps) => {
  const ProfileFormValidation = getProfileFormValidation();

  const dispatch = useDispatch<ThunkDispatch<RootState, {}, Action<string>>>();

  const handleSubmitFn = (profile: UserDetailsI) => {
    dispatch(userLoginACtionCreator({ ...profile }));
    props.closeProfileDialogFn();
  };

  return (
    <EditFormContainer>
      <Formik initialValues={{ ...props.userData }} validationSchema={ProfileFormValidation} onSubmit={handleSubmitFn}>
        {({ submitForm, isSubmitting, touched, errors }) => (
          <Form style={{ margin: "0.5rem 0.5rem 0 0.5rem" }}>
            <FieldContainer>
              <Box>
                <Typography variant='h2'>Basic Information</Typography>
                <Stack>
                  <Typography variant='body1'>Name</Typography>
                  <Field component={TextField} name='name' type='text' size='small' disabled sx={{ flex: 1 }} />
                </Stack>
                <Stack>
                  <Typography variant='body1'>Company</Typography>
                  <Field component={TextField} name='company' type='text' size='small' disabled />
                </Stack>
                <Stack>
                  <Typography variant='body1'>Job Title</Typography>
                  <Field component={TextField} name='jobTitle' type='text' size='small' variant='outlined' />
                </Stack>
              </Box>
              <Box>
                <Typography variant='h2'>Contact Information</Typography>
                <Stack>
                  <Typography
                    variant='body1'
                    sx={{ width: `${props.userData.email.length < 35 ? "inherit" : "auto!important"}` }}
                  >
                    Email
                  </Typography>
                  <Typography variant='body2'>{props.userData.email}</Typography>
                </Stack>
                <Stack>
                  <Typography variant='body1'>Phone Number</Typography>
                  <Field component={TextField} name='mobile' type='text' size='small' />
                </Stack>
              </Box>
            </FieldContainer>
            <Stack direction='row' justifyContent={"flex-end"}>
              <Button size={"large"} variant='outlined' color='primary' onClick={() => props.closeProfileDialogFn()}>
                {"cancel"}
              </Button>

              <Button size={"large"} variant='contained' color='primary' type='submit'>
                {"update"}
              </Button>
            </Stack>
          </Form>
        )}
      </Formik>
    </EditFormContainer>
  );
};
