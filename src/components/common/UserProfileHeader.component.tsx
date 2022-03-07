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

interface Props {
  children: React.ReactElement;
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
  backgroundColor: color.palette.primary.dark,
  width: "100%",
  height: "5rem",
});

const NameContainer = styled(Stack)({
  height: "100%",
  width: "100%",
});

function expandIconStyles() {
  return {
    fontSize: "28px",
    color: color.palette.secondary.main,
  };
}

const DownArrowIcon = styled(ExpandMoreIcon)(expandIconStyles());
const UpArrowIcon = styled(ExpandLessIcon)(expandIconStyles());

const ProfileButton = styled(Button)({
  marginLeft: "auto",
  marginRight: "20px",
  width: "30%",
});

const MenuStyled = styled(Menu)({
  "& .MuiMenu-paper": {
    minWidth: "150px",
    backgroundColor: color.palette.primary.dark,
    color: color.palette.secondary.main,
    maxWidth: "30%",
    zIndex: "1",
  },
  "& .MuiMenu-list": {
    paddingTop: 0,
    paddingBottom: 0,
  },
});

const MenuItemStyled = styled(MenuItem)({
  "&.MuiMenuItem-divider": {
    borderBottomColor: color.palette.secondary.main,
    flexDirection: "column",
    alignItems: "flex-start",
  },
  "&.MuiMenuItem-root": {
    paddingTop: "8px",
    paddingBottom: "8px",
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
    color += `00${value.toString(16)}`.substring(-2);
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
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
  };
}

const UserProfileHeader = () => {
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

  const open = Boolean(anchorEl);

  return (
    <ElevationScroll>
      <StyledAppBar>
        <Toolbar disableGutters sx={{ height: "5rem" }}>
          <ProfileButton onClick={showUserMenu} endIcon={expandIcon}>
            <NameContainer direction='row' spacing={1} justifyContent='flex-end' alignItems='center'>
              <Avatar {...stringAvatar(userDetailsObj.name)} />
              <Typography sx={{ color: color.palette.secondary.main }}>{userDetailsObj.name}</Typography>
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
            <MenuItemStyled onClick={closeUserMenu} divider>
              <Typography>{userDetailsObj.name}</Typography>
              <Typography>{userDetailsObj.email}</Typography>
            </MenuItemStyled>
            <MenuItemStyled onClick={closeUserMenu} divider>
              <Typography>{userDetailsObj.company}</Typography>
              <Typography>{userDetailsObj.jobTitle}</Typography>
            </MenuItemStyled>
            <MenuItemStyled onClick={handleLogout} sx={{ flexDirection: "row" }}>
              <ListItemIcon>
                <LogoutIcon sx={{ color: color.palette.secondary.main }} />
              </ListItemIcon>
              <Typography variant='inherit'>Log-out</Typography>
            </MenuItemStyled>
          </MenuStyled>
        </Toolbar>
      </StyledAppBar>
    </ElevationScroll>
  );
};

export default UserProfileHeader;
