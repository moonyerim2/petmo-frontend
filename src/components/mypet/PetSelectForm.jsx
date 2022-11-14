import React, { useState } from "react";
import { BottomButton } from "../common";
import PetList from "./PetList";
import { tags, registerPetButtonProps } from "../../constants";
import { addArrayElement, removeArrayElement } from "../../util";

const MAX_PET_NUM = 3;

function PetSelectForm() {
  const [selectedPet, setSelectedPet] = useState([]);

  const onClickPetListItem = (e, species) => {
    const isFull = selectedPet.length === MAX_PET_NUM;
    const hasSpecies = selectedPet.includes(species);
    if (isFull && !hasSpecies) return;

    const newSelectedPet = hasSpecies
      ? removeArrayElement(selectedPet, species)
      : addArrayElement(selectedPet, species);

    setSelectedPet(newSelectedPet);
  };

  return (
    <>
      <PetList
        petList={tags.pet}
        selectedPet={selectedPet}
        onClickListItem={onClickPetListItem}
      />
      <BottomButton buttonProps={registerPetButtonProps} isDisabled={true} />
    </>
  );
}

export default PetSelectForm;
