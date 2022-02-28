import { useMediaQuery,useTheme  } from "@mui/material";

const useMobileScreen = (): boolean => {
  const theme = useTheme();
  const mobileScreen = useMediaQuery(theme.breakpoints.down('md'));
  if (mobileScreen) return true;
  else return false;
};

export default useMobileScreen;
