import React from "react";

function FeatureWrapperBrowse({ children, ...restProps }) {
  return <div {...restProps}>{children}</div>;
}

export default FeatureWrapperBrowse;
