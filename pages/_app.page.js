import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import PropTypes from "prop-types";

import AppFooter from "@/components/App/AppFooter";
import AppHeader from "@/components/App/AppHeader";
import AppToastify from "@/components/App/AppToastify";
import AuthenticationLayout from "@/components/Layouts/AuthenticationLayout";

import { HIDDEN_FOOTER, HIDDEN_HEADER } from "@/constants";
import { wrapper } from "@/store";
import { APP_INIT } from "@/store/app/actionTypes";

import "@/styles/globals.css";
import "@/styles/fonts.css";
import "@/styles/variables.css";
import "@/styles/globals.scss";

function App({ Component, pageProps }) {
  const Layout = Component.layout ?? AuthenticationLayout;

  const router = useRouter();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: APP_INIT });
  }, [dispatch]);

  return (
    <>
      {!HIDDEN_HEADER.includes(router.pathname) && <AppHeader />}

      <main className="main">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </main>

      {!HIDDEN_FOOTER.includes(router.pathname) && <AppFooter />}

      <AppToastify />
    </>
  );
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.instanceOf(Object),
};

App.defaultProps = {
  pageProps: {},
};
export default wrapper.withRedux(App);
