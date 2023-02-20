import React from "react";
import PropTypes from "prop-types";
import { BottomModal, PetRegisterModalContent } from "../../../components";

function PetRegisterModal({ isOpen, setIsOpen }) {
  return (
    <BottomModal
      content={[<PetRegisterModalContent key={1} setIsOpen={setIsOpen} />]}
      isOpen={isOpen}
      onClickDimLayer={() => setIsOpen(false)}
    />
  );
}

PetRegisterModal.propTypes = {
  isOpen: PropTypes.bool,
  setIsOpen: PropTypes.func,
};

export default PetRegisterModal;
