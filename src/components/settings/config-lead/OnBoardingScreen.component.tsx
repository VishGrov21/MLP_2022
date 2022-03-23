import { Box, Divider, Grid, Stack, styled, Typography } from "@mui/material";
import TitleBar from "components/common/TitleBar.component";
import { useSelector } from "react-redux";
import { RootState } from "state/store";
import globeRecycleIcon from "assets/images/globeRecycleIcon.svg";
import ConfigForm from "./ConfigForm.component";

const OnBoardingContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100%",

  "& .user": {
    margin: "4rem 2rem 0rem",
  },

  "& .container": {
    backgroundColor: theme.palette.common.white,
    margin: "2rem 2rem 5rem",
    boxShadow: "0px 12px 24px rgba(69, 124, 189, 0.03)",
    borderRadius: "8px",

    "& .globe-icon": {
      width: "180px",
      margin: "18% auto",
    },
    "& .message": {
      marginBottom: "1rem",
    },
    "p.message": {
      fontSize: "14px",
    },
    "h2.message": {
      fontSize: "20px",
    },
    "& .internal-container": {
      padding: "3rem 5%",
    },
    "& .form": {
      marginBottom: "2%",
    },
    [theme.breakpoints.up("lg")]: {
      "p.message": {
        fontSize: "16px",
      },
      "h2.message": {
        fontSize: "24px",
      },
      "& .globe-icon": {
        width: "240px",
      },
      "& .internal-container": {
        padding: "3rem 12%",
      },
    },
  },
}));

const OnBoardingScreen = () => {
  const user = useSelector((state: RootState) => state.user.user);
  return (
    <OnBoardingContainer>
      <TitleBar title='Metrics Configuration' />
      <Typography className='user' variant='h1'>
        Welcome {user.name}
      </Typography>
      <Box className='container'>
        <Grid direction='row' container sx={{ width: "100%" }}>
          {/* Left Side Panel */}
          <Grid item md={6} style={{ width: "49%" }}>
            <Stack className='internal-container'>
              <Typography className='message' variant='h2'>
                You don't have configurations yet
              </Typography>
              <Typography className='message' variant='body1'>
                Start creating your first configuration right away
              </Typography>
              <img src={globeRecycleIcon} alt='Globe Icon' className="globe-icon" />
            </Stack>
          </Grid>
          {/* Divider */}
          <Grid item xs='auto' sx={{ padding: "3rem 0" }}>
            <Divider sx={{ borderRightWidth: "3px" }} orientation='vertical' />
          </Grid>
          {/* Right Side Panel */}
          <Grid item style={{ width: "49%" }}>
            <Stack className='internal-container'>
              <Typography className='form' variant='body1'>
                Select a product and origin
              </Typography>
              <ConfigForm />
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </OnBoardingContainer>
  );
};

export default OnBoardingScreen;
