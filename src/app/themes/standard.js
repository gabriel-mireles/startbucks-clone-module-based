import { createTheme } from "@mui/material";

export const standardTheme = createTheme({
  palette: {
    primary: {
      main: "#008248",
    },
  },
  typography: {
    fontFamily: `"Open Sans", -apple-system, BlinkMacSystemFont, "Segoe UI",
    "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
    "Helvetica Neue", sans-serif`,
  },
});
