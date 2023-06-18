import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import {
  AddressSearchOpenButton,
  PageHeader,
  SearchTown,
  Description,
  Address,
} from "../components";
import { userSelector } from "../store";
import { SubTitle1, PageWrapper } from "../styled";

function MyTownPage() {
  const [isSearchMode, setIsSearchMode] = useState(false);
  const {
    user_address: { regionDepth2 },
  } = useRecoilValue(userSelector);

  const onClickRegisterTownButton = () => {
    setIsSearchMode(true);
  };

  return (
    <PageWrapper>
      {isSearchMode ? (
        <SearchTown setIsSearchMode={setIsSearchMode} />
      ) : (
        <>
          <PageHeader pageTitle="내 동네 설정하기" />
          <SubTitle1>동네 선택</SubTitle1>
          <Description />
          {regionDepth2 ? (
            <Address town={regionDepth2} />
          ) : (
            <AddressSearchOpenButton onClick={onClickRegisterTownButton} />
          )}
        </>
      )}
    </PageWrapper>
  );
}

export default MyTownPage;
