import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { useSetRecoilState } from "recoil";
import { user } from "../../../store";
import { callRegisterMyTownApi } from "../../../api";

const AddressItem = styled.li`
  ${({ theme: { fontSizes, colors } }) =>
    css`
      ${{
        display: "flex",
        alignItems: "center",
        height: "46px",
        fontSize: fontSizes.body2,
        borderBottom: `1px solid ${colors.lineMedium}`,
      }}
    `}
`;

function AddressList({ searchResults, setIsSearchMode }) {
  const setUser = useSetRecoilState(user);

  const onClick = async ({ target }) => {
    const data = await callRegisterMyTownApi({ town: target.innerText });
    setUser(data);
    setIsSearchMode(false);
  };

  return (
    <ul>
      {searchResults.map(({ id, town }) => (
        <AddressItem key={id} tabIndex={0} onClick={onClick}>
          {town}
        </AddressItem>
      ))}
    </ul>
  );
}

AddressList.propTypes = {
  searchResults: PropTypes.array,
  setIsSearchMode: PropTypes.func,
};

export default AddressList;
