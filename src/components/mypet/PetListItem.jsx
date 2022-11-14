import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { petItemButtonProps } from "../../constants";

const Li = styled.li`
  width: 98px;
  text-align: center;
  line-height: ${({ theme: { lineHeights } }) => lineHeights[140]};
  font-size: ${({ theme: { fontSizes } }) => fontSizes.body2};
`;

const Image = styled.img`
  display: block;
  margin-bottom: 8px;
  width: 100%;
  height: 100%;
`;

const petImage = {
  강아지: "dog.png",
  고양이: "cat.png",
  물고기: "fish.png",
  햄스터: "hamster.png",
  파충류: "reptile.png",
  새: "birds.png",
  토끼: "rabbit.png",
  기타: "others.png",
};

function PetListItem({ species }) {
  return (
    <Li className="pet-item">
      <button {...petItemButtonProps}>
        <Image
          src={process.env.PUBLIC_URL + "/img/pet/" + petImage[species]}
          alt="동물 이미지"
        />
        <span className="species">{species}</span>
      </button>
    </Li>
  );
}

PetListItem.propTypes = {
  species: PropTypes.string,
};

export default PetListItem;
