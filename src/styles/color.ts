import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    orange: Palette["primary"];
    red: Palette["primary"];
    green: Palette["primary"];

  }
  interface PaletteOptions {
    orange: PaletteOptions["primary"];
    red: PaletteOptions["primary"];
    green: PaletteOptions["primary"];

  }

  interface PaletteColor {
    darker?: string;
    lighter?: string;
  }
  interface SimplePaletteColorOptions {
    darker?: string;
    lighter?: string;
  }
}

const color = createTheme({
  palette: {
    primary: {
      light: "#F4DA7D",
      main: "#DAA900",
    },
    grey: {
      100: '#F9F9F9',
      200: '#F0F0F0',
      300: '#F4F4F4',
      400: '#F3F6F8',
      500: '#CED4DA',
      600: '#9FA9B2',
      700: '#6C757D',
      800: '#393939',
      900: '#282828'
    },
    orange: {
      lighter: "#F3B388",
      light: "#E78E5F",
      main: "#F57C00",
    },
    red: {
      light: "#ED7D75",
      main: "#F03738",
      dark: "#E00001",
    },
    green: {
      lighter: "#C2E6AB",
      light: "#8BC34A",
      main: "#1AB068",
      contrastText: "#AFB42B",
    },
  },
});

export default color;
