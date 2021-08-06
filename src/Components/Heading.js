import { props } from "bluebird";
import React from "react";

export const Heading = (props) => {
  const { className, children, type } = props;
  if (type === "h3") {
    return <h3 className={className}>{children}</h3>;
  } else {
    return <h1 className={className}>{children}</h1>;
  }
};
