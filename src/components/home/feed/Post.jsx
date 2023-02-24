import React from "react";
import PropTypes from "prop-types";
import { SummaryCard } from "../../card";

function Post({ post }) {
  return <SummaryCard {...post} />;
}

Post.propTypes = {
  post: PropTypes.object,
};

export default Post;
