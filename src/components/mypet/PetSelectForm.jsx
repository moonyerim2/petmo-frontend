import React, { useState } from "react";
import { BottomButton } from "../common";
import PetList from "./PetList";
import { tags, registerPetButtonProps } from "../../constants";
import { addArrayElement, removeArrayElement } from "../../util";
import { callRegisterPetApi } from "../../api";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../hooks";

const MAX_PET_NUM = 3;

function PetSelectForm() {
  const [selectedPets, setSelectedPet] = useState([]);
  const navigate = useNavigate();
  const { updateUserData } = useUser();

  const onClickPetListItem = (e, species) => {
    const isFull = selectedPets.length === MAX_PET_NUM;
    const hasSpecies = selectedPets.includes(species);
    if (isFull && !hasSpecies) return;

    const newSelectedPet = hasSpecies
      ? removeArrayElement(selectedPets, species)
      : addArrayElement(selectedPets, species);

    setSelectedPet(newSelectedPet);
  };

  const onClickRegisterPetButton = async () => {
    const payload = selectedPets.map((pet) => {
      return { animalTypes: pet };
    });

    const response = await callRegisterPetApi({ pets: payload });
    if (response.status === 200) {
      updateUserData();
      navigate(-1);
    }
  };

  return (
    <>
      <PetList
        petList={tags.pet}
        selectedPet={selectedPets}
        onClickListItem={onClickPetListItem}
      />
      <BottomButton
        buttonProps={registerPetButtonProps}
        isDisabled={!selectedPets.length}
        onClick={onClickRegisterPetButton}
      />
    </>
  );
}

export default PetSelectForm;
