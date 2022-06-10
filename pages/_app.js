import { SessionProvider } from "next-auth/react";
import GoogleAnalytics from "../components/HeadComponent";
import "../styles/testimonial.css";
import "../styles/accordian.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  // function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <>
      <Component {...pageProps} />
      {process.env.NODE_ENV === "production" && <GoogleAnalytics />}
    </>
  );
}

export default MyApp;
