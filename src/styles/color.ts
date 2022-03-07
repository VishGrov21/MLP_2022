import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    orange: Palette["primary"];
    greyShade: Palette["primary"];
    red: Palette["primary"];
    green: Palette["primary"];
    black: Palette["primary"];
  }
  interface PaletteOptions {
    orange: PaletteOptions["primary"];
    greyShade: PaletteOptions["primary"];
    red: PaletteOptions["primary"];
    green: PaletteOptions["primary"];
    black: PaletteOptions["primary"];
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
    secondary: {
      light: "#F9F9F9",
      main: "#F0F0F0",
      dark: "#F4F4F4",
      contrastText: "#ffffff",
    },
    black: {
      light: "#393939",
      main: "#282828",
      contrastText: "#000000",
    },
    greyShade: {
      lighter: "#F3F6F8",
      light: "#CED4DA",
      main: "#9FA9B2",
      dark: "#6C757D",
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
