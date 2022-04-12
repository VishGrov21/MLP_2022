import * as Yup from "yup";

import {
  Box,
  AutocompleteRenderInputParams,
  InputLabel,
  Stack,
  styled,
  Typography,
  Button,
  FormHelperText,
  Grid,
} from "@mui/material";
import { METRICS_CONFIG_LEAD_ARR, ORIGIN_ARR, PRODUCTS_ARR } from "constants/settings.constants";
import { Field, Form, Formik, FormikErrors, FormikTouched } from "formik";
import { Autocomplete, CheckboxWithLabel } from "formik-mui";
import MuiTextField from "@mui/material/TextField";
import { ConfigFormI } from "model/settings.model";
import { configMetricsFormActionCreator } from "state/actions/settings/config-lead/configLead.action";

import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "state/store";
import { useNavigate } from "react-router-dom";
import globeRecycleIcon from "assets/images/globeRecycleIcon.svg";

const getConfigFormValidations = () =>
  Yup.object().shape({
    product: Yup.string().required("Product is a required field").nullable(),
    origin: Yup.string().required("Origin is a required field").nullable(),
    metricsGroup: Yup.object()
      .shape(
        {
          traceability: Yup.bool().when("sustainability", {
            is: (sustainability: boolean) => !sustainability,
            then: Yup.boolean().oneOf([true], "Please select at least one of the metrics category"),
          }),
          sustainability: Yup.bool().when("traceability", {
            is: (traceability: boolean) => !traceability,
            then: Yup.boolean().oneOf([true], "Please select at least one of the metrics category"),
          }),
        },
        [
          ["traceability", "sustainability"],
          ["sustainability", "traceability"],
        ]
      )
      .required(),
  });

const ConfigFormInitState = {
  product: "",
  origin: "",
  metricsGroup: {
    traceability: false,
    sustainability: false,
  },
};

const FormContainer = styled(Box)(({ theme }) => ({
  "& .black-globe-icon": {
    width: "65px",
  },
  "& .label": {
    ...theme.typography.body2,
  },
  "& .select": {
    width: "100%",
    margin: "1% 0 5%",
  },
  "& .message": {
    margin: "1.5% 0",
  },
  "& .checkbox": {
    margin: "3% 0",
    "& .MuiTypography-root": {
      ...theme.typography.body2,
    },
  },
  "& button": {
    margin: "5% 0",
  },
  "& .MuiFormControlLabel-label": {
    fontSize: "14px",
  },
  "& .MuiFormHelperText-root": {
    fontSize: "0.8rem",
  },
  "& .checkbox-label": {
    textOverflow: "initial",
    whiteSpace: "break-spaces",
  },
  "& .MuiOutlinedInput-input": {
    ...theme.typography.body2,
  },
  "& .heading": {
    marginBottom: "2rem",
  },
  "& .description": {
    marginBottom: "2rem",
  },
  "& .form-button": {
    width: "10rem",
    "&.MuiButton-outlined": {
      marginRight: "2rem",
    },
  },
  [theme.breakpoints.up("lg")]: {
    "& .MuiFormControlLabel-label": {
      fontSize: "16px",
    },
  },
}));

const autoCompleteTextField = (
  fieldName: "product" | "origin",
  params: AutocompleteRenderInputParams,
  touchedObj: FormikTouched<ConfigFormI>,
  errorObj: FormikErrors<ConfigFormI>
) => (
  <MuiTextField
    {...params}
    name={fieldName}
    error={touchedObj[fieldName] && !!errorObj[fieldName]}
    helperText={touchedObj[fieldName] && errorObj[fieldName]}
    variant='outlined'
    className='value'
  />
);
interface ConfigFormProps {
  cancelCB?: Function;
}

const ConfigForm = (props: ConfigFormProps) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const isRecordsManagePage = !useSelector((state: RootState) => state.user.user.isFirstTimeConfig);

  const { cancelCB } = props;

  const handleFormSubmit = (e: typeof ConfigFormInitState) => {
    dispatch(configMetricsFormActionCreator(e));
    navigate("/metrics-config");
  };

  const showCheckBoxHelperText = (
    touchedObj: FormikTouched<ConfigFormI>,
    submitCount: number,
    error: FormikErrors<ConfigFormI>
  ) => {
    if (submitCount > 0 && error.metricsGroup?.traceability) {
      return true;
    } else if (
      (touchedObj.metricsGroup?.sustainability || touchedObj.metricsGroup?.traceability) &&
      error.metricsGroup?.traceability
    ) {
      return true;
    } else return false;
  };

  const checkOptionsAndValue = (option: string, value: string) => {
    //nothing that is put in here will cause the warning to go away
    if (value === "") {
      return true;
    } else if (value === option) {
      return true;
    }
  };

  return (
    <FormContainer>
      {isRecordsManagePage && (
        <Grid container direction='column'>
          <Grid item container justifyContent='flex-start' alignItems='center' spacing={5} className='heading'>
            <Grid item>
              <img src={globeRecycleIcon} alt='Globe Icon' className='black-globe-icon' />
            </Grid>
            <Grid item>
              <Typography variant='h3'>New Configuration Record</Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant='body2' className='description'>
              Please select the product and origin for which you want to create a new supply chain
            </Typography>
          </Grid>
        </Grid>
      )}
      <Formik
        initialValues={{ ...ConfigFormInitState }}
        validationSchema={getConfigFormValidations()}
        onSubmit={handleFormSubmit}
      >
        {({ submitForm, isSubmitting, touched, errors, handleChange, submitCount }) => {
          return (
            <Form style={{ width: "100%" }}>
              <InputLabel className='label' id='product' required>
                Product
              </InputLabel>
              <Field
                name='product'
                component={Autocomplete}
                options={PRODUCTS_ARR}
                getOptionLabel={(option: string) => option}
                className='select'
                isOptionEqualToValue={checkOptionsAndValue}
                renderInput={(params: AutocompleteRenderInputParams) =>
                  autoCompleteTextField("product", params, touched, errors)
                }
              />
              <InputLabel className='label' id='origin' required>
                Origin
              </InputLabel>
              <Field
                name='origin'
                component={Autocomplete}
                options={ORIGIN_ARR}
                getOptionLabel={(option: string) => (option ? option : "")}
                className='select'
                isOptionEqualToValue={checkOptionsAndValue}
                renderInput={(params: AutocompleteRenderInputParams) =>
                  autoCompleteTextField("origin", params, touched, errors)
                }
              />
              <Typography style={{ marginBottom: "0.5rem" }} className='message' variant='body1'>
                Which metrics do you want to configure?
              </Typography>
              <InputLabel className='checkbox-label' id='metrics'>
                You can select both or choose to configure one later.
              </InputLabel>
              <Stack direction='row' className='checkbox' spacing={{ md: 4, lg: 10 }}>
                {METRICS_CONFIG_LEAD_ARR.map((metricsType, index) => (
                  <Field
                    component={CheckboxWithLabel}
                    name={`metricsGroup.${metricsType.name}`}
                    Label={{ label: metricsType.value }}
                    key={index + metricsType.name}
                    type='checkbox'
                    className='value'
                  />
                ))}
              </Stack>

              {/* Only 1 error would be sufficient either traceability or sustainability */}
              {showCheckBoxHelperText(touched, submitCount, errors) && (
                <FormHelperText error={true}>{errors.metricsGroup?.traceability}</FormHelperText>
              )}
              <Stack
                direction='row'
                justifyContent={isRecordsManagePage ? "flex-end" : undefined}
                alignItems={isRecordsManagePage ? "center" : undefined}
              >
                {isRecordsManagePage && cancelCB && (
                  <Button color='primary' variant='outlined' className='form-button' onClick={() => cancelCB()}>
                    Cancel
                  </Button>
                )}
                <Button
                  color='primary'
                  variant='contained'
                  fullWidth={!isRecordsManagePage}
                  type='submit'
                  className={isRecordsManagePage ? "form-button" : undefined}
                >
                  Next
                </Button>
              </Stack>
            </Form>
          );
        }}
      </Formik>
    </FormContainer>
  );
};

export default ConfigForm;
