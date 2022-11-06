import React from "react";
import PropTypes from "prop-types";
import CommonHeader from "./CommonHeader";
import { GoBackButton } from "../../common";

function PageHeader({ pageTitle, rightButton }) {
  const headerComponents = {
    leftButton: <GoBackButton /> || null,
    pageTitle: pageTitle,
    rightButton: rightButton || null,
  };

  return (
    <>
      <CommonHeader {...headerComponents} />
    </>
  );
}

PageHeader.propTypes = {
  pageTitle: PropTypes.string,
  rightButton: PropTypes.node,
};

export default PageHeader;
