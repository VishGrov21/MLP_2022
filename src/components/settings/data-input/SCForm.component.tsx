import * as Yup from "yup";

import { Box, AutocompleteRenderInputParams, InputLabel, Stack, styled, Typography, Button, Grid } from "@mui/material";
import { ORIGIN_ARR, PRODUCTS_ARR, SUPPLY_CHAIN_TYPE_ARR, SUSTAINABILITY_CAT_ARR } from "constants/settings.constants";
import { Field, Form, Formik, FormikErrors, FormikTouched } from "formik";
import { Autocomplete } from "formik-mui";
import { useSelector } from "react-redux";
import { RootState } from "state/store";
import { SCFormI } from "model/settings.model";
import MuiTextField from "@mui/material/TextField";
import { Fragment, SyntheticEvent, useState } from "react";
import Dropzone from "components/common/Dropzone.component";
import Message from "components/common/Message.component";

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
  "& .template-btn": {
    width: "100%",
    margin: "1rem auto",
  },
  [theme.breakpoints.up("lg")]: {
    "& .MuiFormControlLabel-label": {
      fontSize: "16px",
    },
  },
}));

const SCFormInitState: SCFormI = {
  product: "",
  origin: "",
  type: "",
  category: "",
  file: "",
};
const getSCFormValidations = () =>
  Yup.object().shape({
    product: Yup.string().required("Product is a required field").nullable(),
    origin: Yup.string().required("Origin is a required field").nullable(),
    type: Yup.string().required("Type is a required field").nullable(),
    category: Yup.string()
      .nullable()
      .when("type", {
        is: "Sustainability Data",
        then: (schema) => schema.required("Category is a required field"),
      }),
    file: Yup.string().required("File is a required field"),
  });
const autoCompleteTextField = (
  fieldName: "product" | "origin" | "type" | "category",
  params: AutocompleteRenderInputParams,
  touchedObj: FormikTouched<SCFormI>,
  errorObj: FormikErrors<SCFormI>
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

const SCForm = () => {
  const isRecordsManagePage = !useSelector((state: RootState) => state.user.user.isFirstTimeConfig);
  type fieldType = (field: string, value: any, shouldValidate?: boolean | undefined) => void;

  const [isTypeSelected, setIsTypeSelected] = useState(false);
  const [isSustainability, setIsSustainability] = useState(false);
  const [showDownloadMsg, setShowDownloadMsg] = useState(false);
  const [isFileFieldDisabled, setIsFileFieldDisabled] = useState(false);
  // const [typeValue, setTypeValue] = useState("");
  // const [typeInputValue, setTypeInputValue] = useState("");

  const handleTypeChange = (event: SyntheticEvent, setFormikField: fieldType) => {
    const { innerText } = event.target as HTMLInputElement;
    if (innerText) {
      setFormikField("type", innerText);
      setIsTypeSelected(true);
      if (innerText && innerText === SUPPLY_CHAIN_TYPE_ARR[1]) {
        setIsSustainability(true);
        setIsFileFieldDisabled(true);
      } else {
        setIsSustainability(false);
        setIsFileFieldDisabled(false);
      }
    } else {
      setIsTypeSelected(false);
      setIsSustainability(false);
    }
  };

  const handleCategoryChange = (event: SyntheticEvent, setFormikField: fieldType) => {
    const { innerText } = event.target as HTMLInputElement;
    if (innerText) {
      setFormikField("category", innerText);
      setIsFileFieldDisabled(false);
    } else {
      setIsFileFieldDisabled(true);
    }
  };

  const handleFormSubmit = (values: SCFormI) => {
    console.log("🚀 ~ file: SCForm.component.tsx ~ line 136 ~ handleFormSubmit ~ values", values);
    // dispatch(configMetricsFormActionCreator(e));
    // navigate("/metrics-config");
  };

  const checkOptionsAndValue = (option: string, value: string) => {
    //nothing that is put in here will cause the warning to go away
    if (value === "") {
      return true;
    } else if (value === option) {
      return true;
    }
  };

  const handleFiles = (files: File[], setFormikField: fieldType) => {
    setFormikField("file", files[0]["name"]);
  };

  const handleDownloadTemplateBtn = (event: SyntheticEvent, type: string) => {
    // based on type template can be downloaded
    setShowDownloadMsg(true);
  };

  return (
    <Fragment>
      <FormContainer>
        {isRecordsManagePage && (
          <Grid container direction='column'>
            <Grid item container justifyContent='flex-start' alignItems='center' spacing={5} className='heading'>
              <Grid item>{/* <img src={globeRecycleIcon} alt='Globe Icon' className='black-globe-icon' /> */}</Grid>
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
          initialValues={{ ...SCFormInitState }}
          validationSchema={getSCFormValidations()}
          onSubmit={handleFormSubmit}
        >
          {({ submitForm, isSubmitting, touched, errors, handleChange, submitCount, values, setFieldValue }) => {
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
                <Typography sx={{ margin: "0 0 1rem" }}>Which type of data do you wish to enter? </Typography>
                <InputLabel className='label' id='type' required>
                  Type
                </InputLabel>
                <Field
                  name='type'
                  component={Autocomplete}
                  options={SUPPLY_CHAIN_TYPE_ARR}
                  getOptionLabel={(option: string) => (option ? option : "")}
                  className='select'
                  isOptionEqualToValue={checkOptionsAndValue}
                  onChange={(event: SyntheticEvent) => handleTypeChange(event, setFieldValue)}
                  renderInput={(params: AutocompleteRenderInputParams) =>
                    autoCompleteTextField("type", params, touched, errors)
                  }
                />
                {isSustainability && (
                  <>
                    <InputLabel className='label' id='category' required>
                      Category
                    </InputLabel>
                    <Field
                      name='category'
                      component={Autocomplete}
                      options={SUSTAINABILITY_CAT_ARR}
                      getOptionLabel={(option: string) => (option ? option : "")}
                      className='select'
                      isOptionEqualToValue={checkOptionsAndValue}
                      onChange={(event: SyntheticEvent) => handleCategoryChange(event, setFieldValue)}
                      renderInput={(params: AutocompleteRenderInputParams) =>
                        autoCompleteTextField("category", params, touched, errors)
                      }
                    />
                  </>
                )}
                {isTypeSelected && (
                  <Fragment>
                    <Dropzone
                      maxFilesCount={1}
                      onFilesAccept={(files: File[]) => handleFiles(files, setFieldValue)}
                      disabled={isFileFieldDisabled}
                    />
                    <Typography sx={{ textAlign: "center", margin: "1rem 0 auto" }}>OR</Typography>
                    <Button
                      variant='outlined'
                      onClick={(event) => handleDownloadTemplateBtn(event, values.type)}
                      className='template-btn'
                      disabled={isFileFieldDisabled}
                    >
                      Download Template
                    </Button>
                  </Fragment>
                )}

                <Stack
                  justifyContent={isRecordsManagePage ? "flex-end" : undefined}
                  alignItems={isRecordsManagePage ? "center" : undefined}
                >
                  {/* {isRecordsManagePage && cancelCB && (
                  <Button color='primary' variant='outlined' className='form-button' onClick={() => cancelCB()}>
                    Cancel
                  </Button>
                )} */}
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
      <Message
        openFl={showDownloadMsg}
        closeMessageFn={() => setShowDownloadMsg(false)}
        textToDisplay='File is downloaded'
        variant='success'
      />
    </Fragment>
  );
};

export default SCForm;
