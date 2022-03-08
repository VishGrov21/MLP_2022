import { styled, IconButton, ListItemIcon, ListItemText, List, ListItemButton, Divider } from "@mui/material";
import { additionalSideNavArr, sideNavArr } from "constants/sideNav.constants";
import MuiDrawer from "@mui/material/Drawer";
import { Theme, CSSObject } from "@mui/material/styles";
import { useState } from "react";
import sustainItLogo from "assets/images/sustainItLogo.png";
import sustainItLogoSmall from "assets/images/sustainItLogoSmall.svg";
import ExpandLessIcon from "@mui/icons-material/ArrowBackIosNew";
import ExpandMoreIcon from "@mui/icons-material/ArrowForwardIos";
import { Box } from "@mui/system";
import { useSelector } from "react-redux";
import { RootState } from "state/store";
import { SETTINGS_AUTHORIZED_ROLE_ARR } from "constants/settings.constants";
import color from "styles/color";

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  margin: "0.5rem",
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== "open" })(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  boxShadow: "box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25)",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const LogoImg = styled("img")({
  width: "100%",
  height: "auto",
  display: "block",
});

const IconButtonStyled = styled(IconButton)({
  width: "30px",
  backgroundColor: color.palette.grey[300],
  borderRadius: "4px",
  marginLeft: "auto",
  marginTop: "10px",
});

const ListItemStyled = styled(ListItemButton)({
  margin: "30px auto",
  "&.Mui-selected": {
    backgroundColor: color.palette.grey[200],
    borderLeft: `7px solid ${color.palette.primary.main}`,
    // Padding of list Item without select is 16px,
    // so reducing the borderWidth from left in order to align properly
    paddingLeft: "9px",
  },
  "& .wide": {
    marginLeft: "-20px",
  },
  " .narrow": {
    marginLeft: "-8px",
  },
});

function expandIconStyles() {
  return {
    fontSize: "20px",
    color: "Black",
  };
}

const ForwardIcon = styled(ExpandMoreIcon)(expandIconStyles());
const BackwardIcon = styled(ExpandLessIcon)(expandIconStyles());

const SideNavigation = () => {
  const [open, setOpen] = useState(true);
  const [expandIcon, setExpandIcon] = useState(<BackwardIcon />);
  const [logoSrc, setLogoSrc] = useState(sustainItLogo);
  const [selectedMenu, setSelectedMenu] = useState<number | null>(0);
  const [additionalSelectedMenu, setAdditionalSelectedMenu] = useState<number | null>(null);

  const userRoleArr = useSelector((state: RootState) => state.user.user.role);

  const handleDrawerOpen = () => {
    setOpen(true);
    setLogoSrc(sustainItLogo);
    setExpandIcon(<BackwardIcon />);
  };

  const handleDrawerClose = () => {
    setOpen(false);
    setExpandIcon(<ForwardIcon />);
    setLogoSrc(sustainItLogoSmall);
  };

  const handleDrawer = () => {
    if (open) handleDrawerClose();
    else handleDrawerOpen();
  };

  const handleMenu = (menuIndex: number, isAdditionalMenu: boolean) => {
    if (isAdditionalMenu) {
      setAdditionalSelectedMenu(menuIndex);
      setSelectedMenu(null);
    } else {
      setSelectedMenu(menuIndex);
      setAdditionalSelectedMenu(null);
    }
  };

  const showSettingsOption = () => {
    for (let settingsRole of SETTINGS_AUTHORIZED_ROLE_ARR) {
      for (let userRole of userRoleArr) if (userRole === settingsRole) return true;
    }
    return false;
  };

  return (
    <Box>
      <Drawer variant='permanent' open={open}>
        <DrawerHeader>
          <LogoImg src={logoSrc} alt='Sustain It Logo' />
        </DrawerHeader>
        <IconButtonStyled onClick={handleDrawer}>{expandIcon}</IconButtonStyled>
        <List>
          {sideNavArr.map((navEle, index) => (
            <ListItemStyled
              key={navEle.path}
              onClick={() => handleMenu(index, false)}
              selected={index === selectedMenu}
            >
              <ListItemIcon sx={{ paddingLeft: "10px" }}>{<img src={navEle.iconSrc} alt='Icon' />}</ListItemIcon>
              <ListItemText className={open ? "wide" : "narrow"} primary={navEle.name} />
            </ListItemStyled>
          ))}
        </List>
        <Divider sx={{ marginTop: "50%", marginBottom: "30px" }} />
        <List>
          {additionalSideNavArr.map((navEle, index) =>
            navEle.name === "Settings" && !showSettingsOption() ? null : (
              <ListItemStyled
                key={navEle.path}
                onClick={() => handleMenu(index, true)}
                selected={index === additionalSelectedMenu}
                sx={{ marginTop: "-20px" }}
              >
                <ListItemIcon sx={{ paddingLeft: "10px" }}>{<img src={navEle.iconSrc} alt='Icon' />}</ListItemIcon>
                <ListItemText className={open ? "wide" : "narrow"} primary={navEle.name} />
              </ListItemStyled>
            )
          )}
        </List>
      </Drawer>
    </Box>
  );
};

export default SideNavigation;
