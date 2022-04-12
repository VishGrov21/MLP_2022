import { Box, Breadcrumbs, Divider, Grid, Link, Stack, styled, Typography } from "@mui/material";
import TitleBar from "components/common/TitleBar.component";
import { useSelector } from "react-redux";
import { RootState } from "state/store";
import { LeftSection } from "../config-lead/OnBoardingScreen.component";
import noFolderIcon from "assets/images/noFolderIcon.svg";
import SCForm from "./SCForm.component";
import { useNavigate } from "react-router-dom";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const BreadCrumbContainer = styled(Breadcrumbs)(({ theme }) => ({
  margin: "1rem 2rem 0rem",
}));

const BreadCrumb = () => {
  const navigate = useNavigate();
  const handleHome = () => {
    navigate("/settings/data-input");
  };
  const breadcrumbs = [
    <Link underline='hover' key='1' onClick={handleHome} color='inherit' variant='body2'>
      Home
    </Link>,
    <Typography key='2'>Supply Chain</Typography>,
  ];
  return (
    <BreadCrumbContainer separator={<NavigateNextIcon fontSize='small' />} aria-label='breadcrumb'>
      {breadcrumbs}
    </BreadCrumbContainer>
  );
};

const SCcontainer = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100%",
  "& .user": {
    margin: "1rem 2rem 0rem",
  },
  "& .container": {
    backgroundColor: theme.palette.common.white,
    margin: "2rem 2rem 5rem",
    boxShadow: "0px 12px 24px rgba(69, 124, 189, 0.03)",
    borderRadius: "8px",

    "& .internal-container": {
      padding: "3rem 5%",
    },
    "& .form": {
      marginBottom: "2%",
    },
  },
}));
const SConboarding = () => {
  const user = useSelector((state: RootState) => state.user.user);
  return (
    <SCcontainer>
      <TitleBar title='Supply Chain Configuration' />
      <BreadCrumb />
      <Typography className='user' variant='h1'>
        Welcome {user.name}
      </Typography>
      <Box className='container'>
        <Grid direction='row' container sx={{ width: "100%" }}>
          {/* Left Side Panel */}
          <Grid item md={6} style={{ width: "49%" }}>
            <LeftSection
              title='You don’t have data Inputs yet'
              description='Start creating your first data input'
              imgSrc={noFolderIcon}
            />
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
              <SCForm />
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </SCcontainer>
  );
};

export default SConboarding;
