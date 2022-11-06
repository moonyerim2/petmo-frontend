import React from "react";
import Card from "../card/Card";
import PropTypes from "prop-types";

function CardList({ cardsDummyList }) {
  return (
    <>
      {cardsDummyList.map((it) => (
        <Card key={it.id} {...it} />
      ))}
    </>
  );
}
CardList.propTypes = {
  cardsDummyList: PropTypes.array,
};
export default CardList;
