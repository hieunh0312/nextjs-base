import React, { memo, useEffect } from "react";
import { useRouter } from "next/router";
import PropTypes from "prop-types";

import AppLoading from "@/components/App/AppLoading";

import { LOCATION, ONLY_AUTH_ROUTES, ONLY_GUESTS_ROUTES } from "@/constants";
import { isProfileFalse } from "@/utils";

import { PageProps } from "./props";

function AuthenticationLayout(props = PageProps) {
  // TODO: Update accessToken, profile
  const { accessToken, profile, isAppInitialized, children } = props;

  const router = useRouter();

  useEffect(() => {
    if (isAppInitialized && router.isReady) {
      if (accessToken) {
        if (ONLY_GUESTS_ROUTES.includes(router.pathname)) {
          router.push(router.query.redirect || LOCATION.HOME());
        }
      } else if (ONLY_AUTH_ROUTES.includes(router.pathname)) {
        router.push({
          pathname: LOCATION.SIGN_IN,
          query: { redirect: router.asPath },
        });
      }
    }
  }, [accessToken, isAppInitialized, router]);

  if (isProfileFalse(profile)) {
    return (
      <div className="d-flex align-items-center justify-content-center py-5">
        <AppLoading />
      </div>
    );
  }

  return children;
}

AuthenticationLayout.propTypes = {
  isAppInitialized: PropTypes.bool.isRequired,
  profile: PropTypes.instanceOf(Object),
  children: PropTypes.node,
  accessToken: PropTypes.string,
};

AuthenticationLayout.defaultProps = PageProps;

export default memo(AuthenticationLayout);
