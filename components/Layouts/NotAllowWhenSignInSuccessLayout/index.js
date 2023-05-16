import { connect } from "react-redux";

import NotAllowWhenSignInSuccessLayout from "./NotAllowWhenSignInSuccessLayout";

const mapStateToProps = (state) => ({
  isAppInitialized: state.App.isAppInitialized,
});

const mapDispatchToProps = () => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotAllowWhenSignInSuccessLayout);
