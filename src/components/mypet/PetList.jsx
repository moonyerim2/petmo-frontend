import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import PetListItem from "./PetListItem";

const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 8px auto 0;
  max-width: 320px;

  .pet-item:not(:nth-child(3n)) {
    margin: 0 13px 20px 0;
  }

  .pet-item:nth-last-child(-n + 2) {
    margin-bottom: 0;
  }
`;

function PetList({ petList }) {
  return (
    <Ul>
      {petList.map((pet) => {
        return <PetListItem key={pet} species={pet} />;
      })}
    </Ul>
  );
}

PetList.propTypes = {
  petList: PropTypes.array,
};

export default PetList;
