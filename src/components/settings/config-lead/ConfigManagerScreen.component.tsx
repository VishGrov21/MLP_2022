import React, { useState } from "react";
import blackGlobeGreyOutlineIcon from "assets/images/blackGlobeGreyOutlineIcon.svg";
import globeRecycleIcon from "assets/images/globeRecycleIcon.svg";
import { Box, Button, Grid, styled, Typography } from "@mui/material";
import TitleBar from "components/common/TitleBar.component";
import ConfigRecords from "./ConfigRecords.component";
import ConfigFormDialog from "./ConfigFormDialog.component";

const BaseContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100%",

  "& .information-tile": {
    background: theme.palette.common.white,
    boxShadow: "0px 12px 24px rgba(69, 124, 189, 0.03)",
    borderRadius: "8px",
    padding: "2rem",
    margin: "2rem",
    position: "relative",

    "& .new-config-btn": {
      ...theme.typography.body2,
      color: theme.palette.common.black,
      position: "absolute",
      right: "2rem",
      bottom: "1rem",
    },
  },
}));

const ConfigManagerScreen = () => {
  const [showConfigFormModal, setShowConfigFormModal] = useState(false);

  const handleConfigFormModalCancel = () => {
    setShowConfigFormModal(false);
  };

  return (
    <BaseContainer>
      <TitleBar title={"Metrics Configuration Manager"} />
      <Grid container>
        <Grid container item className='information-tile' md justifyContent='center' alignItems='center'>
          <Grid item md={3} lg={2}>
            <img className='icon' src={blackGlobeGreyOutlineIcon} alt='Globe Icon' />
          </Grid>
          <Grid item md={9} lg={10}>
            <Typography variant='body2'>
              Select the records to configure, update or delete the associated metrics
            </Typography>
          </Grid>
        </Grid>
        <Grid container item className='information-tile ' md>
          <Grid container item justifyContent='center' alignItems='center'>
            <Grid item md={3} lg={2}>
              <img className='icon' src={globeRecycleIcon} alt='Globe Icon' />
            </Grid>
            <Grid item md={9} lg={10}>
              <Typography variant='body2'>
                Create a new metrics configuration record for a product and origin
              </Typography>
            </Grid>
          </Grid>
          <Grid item style={{ marginLeft: "auto" }}>
            <Button
              className='new-config-btn'
              variant='outlined'
              color='primary'
              onClick={() => setShowConfigFormModal(true)}
            >
              New Configuration Record
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <ConfigRecords />
      <ConfigFormDialog showModal={showConfigFormModal} closeModalCB={handleConfigFormModalCancel} />
    </BaseContainer>
  );
};

export default ConfigManagerScreen;
