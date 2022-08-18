import { ThemeProvider } from "@emotion/react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { AppRouter } from "./AppRouter";
import { standardTheme } from "./themes/standard";

export const App = () => {
  return (
    <BrowserRouter>
    <ThemeProvider theme={standardTheme}>
      <AppRouter />
    </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
