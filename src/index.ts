import React from "react";
import PropTypes from "prop-types";

interface IProps {
  children: () => React.ReactNode;
}

export default function Do(props: IProps) {
  return props.children();
}
