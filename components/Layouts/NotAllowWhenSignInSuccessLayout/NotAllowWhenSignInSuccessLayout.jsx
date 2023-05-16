import React, { memo } from "react";
import { useRouter } from "next/router";
import PropTypes from "prop-types";

import AppLoading from "@/components/App/AppLoading";

import { LOCATION } from "@/constants";
import { isProfileFalse } from "@/utils";

import { PageProps } from "./props";

function NotAllowWhenSignInSuccessLayout(props = PageProps) {
  const { isAppInitialized, myProfile, children } = props;

  const router = useRouter();

  if (myProfile?.id) {
    router.push(router.query.redirect || LOCATION.HOME());
    return null;
  }

  if (!isAppInitialized && isProfileFalse(myProfile)) {
    return (
      <div className="d-flex align-items-center justify-content-center py-5">
        <AppLoading />
      </div>
    );
  }

  return children;
}

NotAllowWhenSignInSuccessLayout.propTypes = {
  isAppInitialized: PropTypes.bool,
  children: PropTypes.node,
  myProfile: PropTypes.instanceOf(Object),
};

NotAllowWhenSignInSuccessLayout.defaultProps = PageProps;

export default memo(NotAllowWhenSignInSuccessLayout);
