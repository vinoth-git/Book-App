import "../styles/globals.css";
import type { AppProps } from "next/app";
import { wrapper } from "../redux/store";
import Layout from "../components/Layout";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../styles/Theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default wrapper.withRedux(MyApp);
