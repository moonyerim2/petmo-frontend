import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Li = styled.li`
  position: relative;
  width: 98px;
  text-align: center;
  line-height: ${({ theme: { lineHeights } }) => lineHeights[140]};
  font-size: ${({ theme: { fontSizes } }) => fontSizes.body2};
  overflow: hidden;
`;

const Image = styled.img`
  display: block;
  margin-bottom: 8px;
  width: 100%;
  height: 100%;
`;

const CheckDimLayer = styled.div`
  display: ${({ isChecked }) => (isChecked ? "block" : "none")};
  position: absolute;
  left: 0;
  top: 0;
  width: 98px;
  height: 98px;
  background-color: rgba(250, 60, 137, 0.6);
  border-radius: 8px;
  backdrop-filter: blur(2px);
  background-image: url(${process.env.PUBLIC_URL + "/img/bigCheck.svg"});
  background-repeat: no-repeat;
  background-position: 50%;
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
  const [isChecked, setIsChecked] = useState(false);

  const onClick = () => {
    if (!isChecked) {
      setIsChecked(true);
    } else {
      setIsChecked(false);
    }
  };

  return (
    <Li className="pet-item">
      <button type="button" onClick={onClick}>
        <Image
          src={process.env.PUBLIC_URL + "/img/pet/" + petImage[species]}
          alt="동물 이미지"
        />
        <span className="species">{species}</span>
        <CheckDimLayer isChecked={isChecked} />
      </button>
    </Li>
  );
}

PetListItem.propTypes = {
  species: PropTypes.string,
};

export default PetListItem;
