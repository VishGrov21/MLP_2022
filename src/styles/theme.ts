import { createTheme } from "@mui/material/styles";
import typography from "styles/typography";
import color from "styles/color";

const theme = createTheme({
  typography: typography,
  palette: color.palette
});

export default theme;
