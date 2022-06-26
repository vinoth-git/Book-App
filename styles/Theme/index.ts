import { createTheme } from "@mui/material/styles";
import React from "react";

const theme = createTheme({
  breakpoints: {
    keys: ["xs", "sm", "md", "lg", "xl"],
    values: { xs: 0, sm: 320, md: 768, lg: 1024, xl: 1580 },
  },
  palette: {
    primary: {
      main: "#14213D",
    },
    secondary: {
      main: "#FCA311",
    },
    info: { main: "#fff" },
  },
});

export default theme;
