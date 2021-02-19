import ThemeContextProvider from "../Component/ThemeSwitch/ThemeContextProvider";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeContextProvider>
      <Component {...pageProps} />
    </ThemeContextProvider>
  );
}

export default MyApp;
