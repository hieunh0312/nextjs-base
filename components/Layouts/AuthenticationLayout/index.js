import { connect } from "react-redux";

import AuthenticationLayout from "./AuthenticationLayout";

const mapStateToProps = (state) => ({
  isAppInitialized: state.App.isAppInitialized,
});

export default connect(mapStateToProps, null)(AuthenticationLayout);
