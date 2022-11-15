import React, { useState } from "react";
import { BottomButton } from "../common";
import PetList from "./PetList";
import { tags, registerPetButtonProps } from "../../constants";
import { addArrayElement, removeArrayElement } from "../../util";
import { callRegisterPetApi } from "../../api";
import { useNavigate } from "react-router-dom";

const MAX_PET_NUM = 3;

function PetSelectForm() {
  const [selectedPet, setSelectedPet] = useState([]);
  const navigate = useNavigate();

  const onClickPetListItem = (e, species) => {
    const isFull = selectedPet.length === MAX_PET_NUM;
    const hasSpecies = selectedPet.includes(species);
    if (isFull && !hasSpecies) return;

    const newSelectedPet = hasSpecies
      ? removeArrayElement(selectedPet, species)
      : addArrayElement(selectedPet, species);

    setSelectedPet(newSelectedPet);
  };

  const onClickRegisterPetButton = async () => {
    const response = await callRegisterPetApi(selectedPet);
    if (response.status === 200) {
      navigate(-1);
    }
  };

  return (
    <>
      <PetList
        petList={tags.pet}
        selectedPet={selectedPet}
        onClickListItem={onClickPetListItem}
      />
      <BottomButton
        buttonProps={registerPetButtonProps}
        isDisabled={!selectedPet.length}
        onClick={onClickRegisterPetButton}
      />
    </>
  );
}

export default PetSelectForm;
