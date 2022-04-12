import {
  styled,
  AutocompleteRenderInputParams,
  Box,
  Typography,
  InputLabel,
  Stack,
  FormHelperText,
  Button,
  TextField,
} from "@mui/material";
import { Field, Form, Formik, FormikErrors } from "formik";
import { Autocomplete } from "formik-mui";
import { ORIGIN_ARR, PRODUCTS_ARR, STARTING_POINT_ARR } from "constants/settings.constants";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { RootState } from "state/store";
import { Action } from "redux";
import { footPrintFilterActionCreator } from "state/actions/supplyMetrics/supplyMetrics.action";

const FootPrintContainer = styled(Box)(({ theme }) => ({
  padding: "40px 40px 90px",
  background: theme.palette.grey[800],
  display: "flex",
  justifyContent: "center",
  "& > div": {
    flexBasis: "80%",
  },
  "& h1, h3": {
    color: theme.palette.common.white,
  },
  "& h3": {
    marginTop: "10px",
  },
}));

const FilterContainer = styled(Box)(({ theme }) => ({
  "& label": {
    marginBottom: "15px",
    fontFamily: "Roboto Regular",
    color: theme.palette.common.white,
  },
  "& .MuiInputBase-root": {
    borderColor: theme.palette.common.white,
    background: theme.palette.common.white,
    color: theme.palette.common.black,
  },
  "& button": {
    "&.applyFilterBtn": {
      width: "150px",
      height: "35px",
      textTransform: "Capitalize",
    },
  },
  "& form": {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    padding: "35px 0 35px 0",
    "& > div": {
      flex: 1,
      paddingRight: "60px",
      "& .MuiOutlinedInput-root": {
        padding: "6px 12px",
        paddingRight: "35px!important",
        "& .MuiOutlinedInput-input": {
          padding: 0,
          fontFamily: "Roboto Regular",
        },
      },
    },
  },
  "& .Mui-error ": {
    marginTop: "15px",
    fontSize: "14px",
  },
}));

/* Initial state */
const FilterInitState = {
  product: "",
  destination: "",
  startingPoint: "",
  volume: "",
};

/* Form validation */
const footPrintValidation = () =>
  Yup.object().shape({
    product: Yup.string().required("Product is a required field"),
    destination: Yup.string().required("destination is a required field"),
    startingPoint: Yup.string().required("startingPoint is a required field"),
    volume: Yup.number().typeError("volume must be a number").required("volume is a required field"),
  });
/**
 * Auto Complete Field
 * @param fieldName The name of the input field
 * @param fieldProps The properties available in the field
 * @returns The text input field
 */
const autoCompleteField = (
  fieldName: "product" | "destination" | "volume" | "startingPoint",
  fieldProps: AutocompleteRenderInputParams
) => {
  return <TextField {...fieldProps} name={fieldName} variant='outlined' className='value' placeholder='select' />;
};

const FootprintCalculator = () => {
  const dispatch = useDispatch<ThunkDispatch<RootState, {}, Action<string>>>();

  const getErrorMessage = (submitCount: number, error: FormikErrors<typeof FilterInitState>) => {
    if (submitCount > 0 && (error.product || error.destination || error.startingPoint)) {
      return "Please select appropriate filter value";
    } else if (error.volume) {
      return error.volume;
    } else return false;
  };

  /**
   * Handles Form submission
   * @param e The form values entered
   */
  const handleFormSubmit = (e: typeof FilterInitState) => {
    dispatch(footPrintFilterActionCreator(e));
  };

  return (
    <FootPrintContainer>
      <FilterContainer>
        <Typography variant='h1'>Footprint Calculator </Typography>
        <Typography variant='h3'>
          To view your supply chain’s footrprint please provide the following information
        </Typography>

        <Formik
          initialValues={{ ...FilterInitState }}
          validationSchema={footPrintValidation()}
          onSubmit={handleFormSubmit}
          enableReinitialize={true}
        >
          {({ submitForm, isSubmitting, touched, errors, handleChange, submitCount }) => {
            return (
              <>
                <Form>
                  <Stack>
                    <InputLabel>Product</InputLabel>
                    <Field
                      name='product'
                      component={Autocomplete}
                      options={PRODUCTS_ARR}
                      getOptionLabel={(option: string) => option}
                      isOptionEqualToValue={(option: string, value: string) =>
                        value ? value === option : value === ""
                      }
                      renderInput={(fieldProps: AutocompleteRenderInputParams) =>
                        autoCompleteField("product", fieldProps)
                      }
                      disabled={false}
                    />
                  </Stack>
                  <Stack>
                    <InputLabel>Destination</InputLabel>
                    <Field
                      name='destination'
                      component={Autocomplete}
                      options={ORIGIN_ARR}
                      getOptionLabel={(option: string) => option}
                      isOptionEqualToValue={(option: string, value: string) =>
                        value ? value === option : value === ""
                      }
                      renderInput={(fieldProps: AutocompleteRenderInputParams) =>
                        autoCompleteField("destination", fieldProps)
                      }
                      disabled={false}
                    />
                  </Stack>
                  <Stack>
                    <InputLabel>Starting Point</InputLabel>
                    <Field
                      name='startingPoint'
                      component={Autocomplete}
                      options={STARTING_POINT_ARR}
                      getOptionLabel={(option: string) => option}
                      isOptionEqualToValue={(option: string, value: string) =>
                        value ? value === option : value === ""
                      }
                      renderInput={(fieldProps: AutocompleteRenderInputParams) =>
                        autoCompleteField("startingPoint", fieldProps)
                      }
                      disabled={false}
                    />
                  </Stack>
                  <Stack>
                    <InputLabel>Volume (Tonnes)</InputLabel>
                    <TextField name='volume' disabled={false} onChange={handleChange} />
                  </Stack>

                  <Button color='primary' variant='contained' fullWidth type='submit' className='applyFilterBtn'>
                    Apply
                  </Button>
                </Form>
                {submitCount > 0 && (
                  <FormHelperText error={true}>{getErrorMessage(submitCount, errors)}</FormHelperText>
                )}
              </>
            );
          }}
        </Formik>
      </FilterContainer>
    </FootPrintContainer>
  );
};

export default FootprintCalculator;
