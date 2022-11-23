import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import BookmarkCard from "./BookmarkCard";

const Wrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 604px;
  padding-top: 4px;
`;

function BookmarkBoard({ cards }) {
  return (
    <Wrapper>
      {cards.map((it) => (
        <BookmarkCard key={it.id} {...it} />
      ))}
    </Wrapper>
  );
}

export default BookmarkBoard;

BookmarkBoard.propTypes = {
  cards: PropTypes.array,
};
