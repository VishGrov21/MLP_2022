import { Button, Stack, styled } from "@mui/material";
import { textAlign } from "@mui/system";
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
  height: "100%",
  marginTop: "10rem",
  "& .settings-button": {
    backgroundColor: "white",
    width: "45%",
    margin: "1% auto",
    height: "4rem",
    border: "none",
    borderRadius: "10px",
    boxShadow: `2px 2px ${theme.palette.grey[200]}`,
    "& .name": {
      width: "100%",
      textAlign: "left",
      paddingLeft: "12%",
      color: theme.palette.common.black,
      ...theme.typography.body1,
    },
    "& .icon": {
      fontSize: "50px",
      color: theme.palette.grey[500],
    },
    [theme.breakpoints.up("lg")]: {
      width: "35%",
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
                <span className='name'>{view.name}</span>
              </Button>
            )
        )}
      </ButtonContainer>
    </div>
  );
};

export default Settings;
