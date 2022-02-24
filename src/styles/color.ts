import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    yellow: Palette["primary"];
    orange: Palette["primary"];
    greyShade: Palette["primary"];
    red: Palette["primary"];
    green: Palette["primary"];
  }
  interface PaletteOptions {
    yellow: PaletteOptions["primary"];
    orange: PaletteOptions["primary"];
    greyShade: PaletteOptions["primary"];
    red: PaletteOptions["primary"];
    green: PaletteOptions["primary"];
  }

  interface PaletteColor {
    darker?: string;
  }
  interface SimplePaletteColorOptions {
    darker?: string;
  }
}

const color = createTheme({
  palette: {
    primary: {
      light: "#393939",
      main: "#282828",
      dark: "#000000",
    },
    secondary: {
      light: "#F9F9F9",
      main: "#ffffff",
      dark: "#EEEEEE",
      darker: "#E5E5E5",
    },
    greyShade: {
      light: "#CED4DA",
      main: "#6C757D",
      dark: "#9FA9B3",
      darker: "#6C757D"
    },
    yellow: {
      light: "#ECD276",
      main: "#DAA900",
    },
    orange: {
      light: "#E78E5F",
      main: "#E27338",
    },
    red: {
      light: "#ED7D75",
      main: "#E27338"
    },
    green: {
      light: "#1AB068",
      main: "#1AB068",
    }
  },
});

export default color;