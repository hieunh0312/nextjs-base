import { connect } from "react-redux";

import Home from "./Home";

const mapStateToProps = (state) => ({
  isAppInitialized: state.App.isAppInitialized,
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
