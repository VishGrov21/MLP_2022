import { Button, Stack, styled, Typography } from "@mui/material";
import TitleBar from "components/common/TitleBar.component";
import { settingsViewArr } from "constants/settings.constants";
import { ADMIN } from "constants/userDetails.constants";
import { Settings_Authorized_RolesT } from "model/settings.model";
import { useSelector } from "react-redux";
import { RootState } from "state/store";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { useNavigate } from "react-router-dom";

const ButtonContainer = styled(Stack)(({ theme }) => ({
  width: "100%",
  marginTop: "10rem",
  alignItems: "center",
  "& .settings-button": {
    backgroundColor: theme.palette.common.white,
    width: "100%",
    maxWidth: "55%",
    margin: "1% 0",
    border: "none",
    borderRadius: "16px",
    padding: "15px 30px",
    boxShadow: `0px 12px 32px rgba(69, 124, 189, 0.06)`,
    "& h2": {
      width: "100%",
      textAlign: "left",
      paddingLeft: "12%",
      color: theme.palette.grey[800],
      textTransform: "capitalize",
    },
    "& .icon": {
      fontSize: "50px",
      color: theme.palette.grey[500],
    },
    [theme.breakpoints.up("lg")]: {
      maxWidth: "40%",
    },
  },
}));

const Settings = () => {
  const userRole = useSelector((state: RootState) => state.user.user.role);
  const navigate = useNavigate();

  const verifyRole = (roleName: Settings_Authorized_RolesT) => {
    if (userRole.includes(ADMIN) || userRole.includes(roleName)) return true;
    else return false;
  };

  const navigateToView = (path: string) => {
    navigate(path);
  };

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <TitleBar title='Manager' />
      <ButtonContainer>
        {settingsViewArr.map(
          (view, index) =>
            verifyRole(view.role) && (
              <Button
                variant='outlined'
                key={index + view.name}
                className='settings-button'
                endIcon={<ArrowRightIcon className='icon' />}
                onClick={() => navigateToView(view.path)}
              >
                <Typography variant='h2'>{view.name}</Typography>
              </Button>
            )
        )}
      </ButtonContainer>
    </div>
  );
};

export default Settings;
