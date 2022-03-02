import React from "react";

const FeatureWrapperBrowse = ({ children, ...restProps }) => {
  return <div {...restProps}>{children}</div>;
}

export default FeatureWrapperBrowse;
