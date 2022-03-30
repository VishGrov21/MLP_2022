import * as Yup from "yup";

import { useEffect, useState } from "react";
import {
  styled,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
  Typography,
  FormHelperText,
} from "@mui/material";
import configSettingsIcon from "assets/images/configSettingsIcon.svg";
import { Field, Form, Formik, FormikErrors, FormikTouched } from "formik";
import { updateConfigMetricsActionCreator } from "state/actions/settings/config-lead/configLead.action";
import { UpdateConfigMetricsI } from "model/settings.model";
import { useAppDispatch } from "state/store";
import { METRICS_CONFIG_LEAD_ARR } from "constants/settings.constants";
import { CheckboxWithLabel } from "formik-mui";
import { GridSelectionModel } from "@mui/x-data-grid";

interface ConfigUpdateModalDataI {
  id: GridSelectionModel;
  showModal: boolean;
  closeModalCB?: Function;
}

const DialogContainer = styled(Dialog)(({ theme }) => ({
  "& .MuiDialog-paper": {
    padding: "30px",
    " & .title": {
      marginBottom: "1rem",
      width: "100%",
      "& .settings-icon": {
        width: "60px",
        marginRight: "1.5rem",
      },
    },
    "& .message": {
      paddingLeft: "40px",
    },
    "& .checkbox-container": {
      padding: "10px 15px",
    },
    "& button": {
      width: "10rem",
    },
    "& .MuiFormControlLabel-label": {
      ...theme.typography.body2,
    },
  },
}));

const getConfigUpdateFormValidations = () =>
  Yup.object().shape({
    id: Yup.number(),
    updateConfigMetricsGroup: Yup.object()
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

const ConfigUpdateFormInitState: UpdateConfigMetricsI = {
  id: 0,
  updateConfigMetricsGroup: {
    traceability: false,
    sustainability: false,
  },
};

const ConfigUpdateModal = (props: ConfigUpdateModalDataI) => {
  const [open, setOpen] = useState(true);
  const { showModal, closeModalCB } = props;

  useEffect(() => {
    setOpen(showModal);
  }, [showModal]);

  const dispatch = useAppDispatch();
  
  const showCheckBoxHelperText = (
    touchedObj: FormikTouched<UpdateConfigMetricsI>,
    submitCount: number,
    error: FormikErrors<UpdateConfigMetricsI>
  ) => {
    if (submitCount > 0 && error.updateConfigMetricsGroup?.traceability) {
      return true;
    } else if (
      (touchedObj.updateConfigMetricsGroup?.sustainability || touchedObj.updateConfigMetricsGroup?.traceability) &&
      error.updateConfigMetricsGroup?.traceability
    ) {
      return true;
    } else return false;
  };
  const handleUpdateModalCancel = () => {
    if (closeModalCB) closeModalCB();
    setOpen(false);
  };

  const handleFormSubmit = (e: typeof ConfigUpdateFormInitState) => {
    dispatch(updateConfigMetricsActionCreator(e));
    handleUpdateModalCancel();
  };


  return (
    <DialogContainer open={open} onClose={handleUpdateModalCancel}>
      <DialogTitle>
        <Stack className='title' direction='row' alignItems='center'>
          <img src={configSettingsIcon} alt='Settings Icon' className='settings-icon' />
          <Typography variant='h3'>Metrics Configuration Update</Typography>
        </Stack>
      </DialogTitle>
      <Stack className='content-container'>
        <Formik
          initialValues={{ ...ConfigUpdateFormInitState }}
          validationSchema={getConfigUpdateFormValidations()}
          onSubmit={handleFormSubmit}
        >
          {({ submitForm, isSubmitting, touched, errors, handleChange, submitCount }) => {
            return (
              <Form style={{ width: "100%" }}>
                <Typography className='message' variant='body2'>
                  Which metrics do you want to configure?
                </Typography>
                <DialogContent>
                  <Stack direction='row' className='checkbox-container' spacing={{ md: 4 }}>
                    {METRICS_CONFIG_LEAD_ARR.map((metricsType, index) => (
                      <Field
                        component={CheckboxWithLabel}
                        name={`updateConfigMetricsGroup.${metricsType.name}`}
                        Label={{ label: metricsType.value }}
                        key={index + metricsType.name}
                        type='checkbox'
                        className='value'
                      />
                    ))}
                  </Stack>

                  {/* Only 1 error would be sufficient either traceability or sustainability */}
                  {showCheckBoxHelperText(touched, submitCount, errors) && (
                    <FormHelperText error={true}>{errors.updateConfigMetricsGroup?.traceability}</FormHelperText>
                  )}
                </DialogContent>
                <DialogActions>
                  <Stack direction='row' spacing={5} justifyContent='flex-end' alignItems='center'>
                    <Button color='primary' variant='outlined' onClick={handleUpdateModalCancel}>
                      Cancel
                    </Button>
                    <Button color='primary' variant='contained' type='submit'>
                      Proceed
                    </Button>
                  </Stack>
                </DialogActions>
              </Form>
            );
          }}
        </Formik>
      </Stack>
      <div className='dialogContents'>
        <DialogActions></DialogActions>
      </div>
    </DialogContainer>
  );
};

export default ConfigUpdateModal;
