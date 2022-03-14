import {
  AppBar,
  Avatar,
  Button,
  ListItemIcon,
  Menu,
  MenuItem,
  Stack,
  styled,
  Toolbar,
  Typography,
  useScrollTrigger,
} from "@mui/material";
import React, { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import LogoutIcon from "@mui/icons-material/Logout";
import color from "styles/color";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "state/store";
import editIcon from "assets/images/editIcon.svg";
import Logo from "assets/images/sustainItLogo_white.png";

interface Props {
  children: React.ReactElement;
}

interface HeaderPropsI {
  headerLogo?: boolean;
}

function ElevationScroll(props: Props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 0 : 0,
  });
}

const StyledAppBar = styled(AppBar)({
  backgroundColor: color.palette.grey[900],
  padding: "10px 20px",
  width: "100%",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
});

const NameContainer = styled(Stack)({
  "& .MuiAvatar-root": {
    width: "50px",
    height: "50px",
  },
  "& .MuiTypography-root": {
    textTransform: "capitalize",
    color: color.palette.common.white,
  },
});

function expandIconStyles() {
  return {
    fontSize: "28px",
    color: color.palette.common.white,
  };
}

const DownArrowIcon = styled(ExpandMoreIcon)(expandIconStyles());
const UpArrowIcon = styled(ExpandLessIcon)(expandIconStyles());

const ProfileButton = styled(Button)({
  width: "100%",
  padding: 0,
  "&.MuiButton-root:hover": {
    backgroundColor: "transparent",
  },
});

const MenuStyled = styled(Menu)({
  "& .MuiMenu-paper": {
    backgroundColor: color.palette.grey[900],
    color: color.palette.common.white,
    zIndex: "1",
    right: 0,
    borderRadius: "0 0 8px 8px",
  },
  "& .MuiMenu-list": {
    padding: "10px 10px 20px",
  },
});
const LogoImg = styled("img")({
  height: "55px",
});

const MenuItemStyled = styled(MenuItem)({
  "&.MuiMenuItem-divider": {
    borderBottomColor: color.palette.common.white,
    flexDirection: "column",
    alignItems: "flex-start",
  },
  "&.MuiMenuItem-root": {
    padding: "12px 10px",
    "& h3": {
      lineHeight: "23px",
    },
    "&:last-child": {
      paddingBottom: 0,
    },
  },
  "& div": {
    flexDirection: "row",
    alignItems: "center",
    "& span": {
      marginLeft: "18px",
    },
  },
});

/**
 * This function takes in a string parameter & generates a random color
 * @param string
 * @returns color
 */
function stringToColor(string: string): string {
  let hash = 0;
  let i;

  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `${value.toString(16)}`.substring(-2);
  }

  return color;
}

/**
 * This function generates the Avatar for a name & also
 * provides the random color by invoking the stringToColor
 *
 * @param name
 * @returns
 */
function stringAvatar(name: string): { sx: { bgcolor: string }; children: string } {
  let nameArr = name.split(" ");
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${nameArr[0][0]}${nameArr[nameArr.length - 1][0]}`,
  };
}

const UserProfileHeader = (props: HeaderPropsI) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [expandIcon, setExpandIcon] = useState(<DownArrowIcon />);
  const navigate = useNavigate();

  const userDetailsObj = useSelector((state: RootState) => state.user.user);

  const showUserMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
    setExpandIcon(<UpArrowIcon />);
  };

  const closeUserMenu = () => {
    setAnchorEl(null);
    setExpandIcon(<DownArrowIcon />);
  };

  const handleLogout = () => {
    closeUserMenu();
    navigate("/login", { state: { isLogout: true }, replace: true });
  };

  const handleProfileRedirection = () => {
    navigate("/user-profile", { state: { bgcolor: stringAvatar(userDetailsObj.name) } });
    closeUserMenu();
  };
  const open = Boolean(anchorEl);

  return (
    <ElevationScroll>
      <StyledAppBar sx={{ justifyContent: `${props.headerLogo ? "space-between" : "flex-end"}` }}>
        {props.headerLogo && <LogoImg src={Logo} alt='Sustain Logo' />}
        <Toolbar disableGutters>
          <ProfileButton onClick={showUserMenu} endIcon={expandIcon}>
            <NameContainer direction='row' spacing={1} justifyContent='flex-end' alignItems='center'>
              <Avatar {...stringAvatar(userDetailsObj.name)} />
              <Typography variant='body1'>{userDetailsObj.name}</Typography>
            </NameContainer>
          </ProfileButton>
          <MenuStyled
            id='User Profile Menu'
            anchorEl={anchorEl}
            open={open}
            onClose={closeUserMenu}
            MenuListProps={{
              "aria-labelledby": "User Profile Menu",
            }}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            sx={{ top: "15px", left: "0.8%" }}
          >
            <MenuItemStyled divider>
              <Stack>
                <Typography variant='h3'>{userDetailsObj.name}</Typography>
                <span onClick={handleProfileRedirection}>
                  <img src={editIcon} alt='edit-profile' />
                </span>
              </Stack>
              <Typography variant='subtitle1'>{userDetailsObj.email}</Typography>
            </MenuItemStyled>
            <MenuItemStyled onClick={closeUserMenu} divider>
              <Typography variant='body2'>{userDetailsObj.company}</Typography>
              <Typography variant='subtitle1'>{userDetailsObj.jobTitle}</Typography>
            </MenuItemStyled>
            <MenuItemStyled onClick={handleLogout} sx={{ flexDirection: "row" }}>
              <ListItemIcon>
                <LogoutIcon sx={{ color: color.palette.common.white }} />
              </ListItemIcon>
              <Typography variant='body2'>Logout</Typography>
            </MenuItemStyled>
          </MenuStyled>
        </Toolbar>
      </StyledAppBar>
    </ElevationScroll>
  );
};

export default UserProfileHeader;
