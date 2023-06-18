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
    const addressName = target.innerText;
    const region = addressName.split(" ");
    callRegisterMyTownApi({
      addressName: target.innerText,
      regionDepth1: region[0],
      regionDepth2: region[1],
      regionDepth3: region[2],
    });

    const response = await callGetUserApi();
    setUser(response.data);
    setIsSearchMode(false);
  };

  return (
    <ul>
      {searchResults.map(({ address_name }, i) => (
        <AddressItem key={i} tabIndex={0} onClick={onClick}>
          {address_name}
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
