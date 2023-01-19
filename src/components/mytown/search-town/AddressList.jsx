import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { useSetRecoilState } from "recoil";
import { callRegisterMyTownApi, callGetUserApi } from "../../../api";
import { user } from "../../../store";

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
    callRegisterMyTownApi({ town: target.innerText });
    const response = await callGetUserApi();
    setUser(response.data);
    setIsSearchMode(false);
  };

  return (
    <ul>
      {searchResults.map(({ regionDepth1, regionDepth2 }, i) => (
        <AddressItem key={i} tabIndex={0} onClick={onClick}>
          {regionDepth1} {regionDepth2}
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
