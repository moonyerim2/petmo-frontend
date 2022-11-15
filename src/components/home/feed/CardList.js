import React from "react";
import Card from "../card/Card";
import PropTypes from "prop-types";

function CardList({ cardsDummyList, type }) {
  return (
    <>
      {cardsDummyList.map((it) => (
        <Card key={it.id} type={type} {...it} />
      ))}
    </>
  );
}
CardList.propTypes = {
  cardsDummyList: PropTypes.array,
  type: PropTypes.node,
};
export default CardList;
