import { createTheme } from "@mui/material";

declare module "@mui/material/styles" {
  interface Palette {
    black: Palette["primary"];
  }

  interface PaletteOptions {
    black?: PaletteOptions["primary"];
  }
}

export const theme = createTheme({
  palette: {
    primary: {
      main: "#373737",
      light: "#474747",
      dark: "#333333",
      contrastText: "#FFFFFF",
    },
  },
});
