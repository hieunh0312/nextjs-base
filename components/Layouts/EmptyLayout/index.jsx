import { memo } from "react";
import PropTypes from "prop-types";

function EmptyLayout({ children }) {
  return children;
}

EmptyLayout.propTypes = {
  children: PropTypes.node,
};

EmptyLayout.defaultProps = {
  children: null,
};

export default memo(EmptyLayout);
