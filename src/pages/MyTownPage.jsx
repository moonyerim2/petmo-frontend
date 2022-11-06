import React, { useState } from "react";
import {
  AddressSearchOpenButton,
  PageHeader,
  SearchTown,
  Description,
} from "../components";
import { SubTitle1, Wrapper } from "../styled";

function MyTownPage() {
  const [isSearchMode, setIsSearchMode] = useState(false);

  const onClickSetUpTownButton = () => {
    setIsSearchMode(true);
  };

  return (
    <Wrapper>
      {isSearchMode ? (
        <SearchTown />
      ) : (
        <>
          <PageHeader pageTitle="내 동네 설정하기" />
          <SubTitle1>동네 선택</SubTitle1>
          <Description />
          <AddressSearchOpenButton onClick={onClickSetUpTownButton} />
        </>
      )}
    </Wrapper>
  );
}

export default MyTownPage;
