import React, { useEffect } from "react";
import Header from "./components/Header/Header";
import MainRoutes from "./routes/MainRoutes";
import { createTheme, Theme, ThemeProvider } from "@material-ui/core";

const theme: Theme = createTheme({
  palette: {
    primary: {
      main: "#050A30",
    },
    secondary: {
      main: "#444444",
    },
  },
});

function App(): JSX.Element {
  useEffect(() => {
    document.title = "Welkin Constructions";
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <MainRoutes />
    </ThemeProvider>
  );
}

export default App;
