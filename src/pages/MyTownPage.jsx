import React, { useState } from "react";
import { useEffect } from "react";
import { callGetMytownApi } from "../api/mytown";
import {
  AddressSearchOpenButton,
  PageHeader,
  SearchTown,
  Description,
  Address,
} from "../components";
import { SubTitle1, Wrapper } from "../styled";

function MyTownPage() {
  const [isSearchMode, setIsSearchMode] = useState(false);
  const [mytown, setMytown] = useState("");

  useEffect(() => {
    (async () => {
      const data = await callGetMytownApi();
      setMytown(data.town);
    })();
  }, [mytown]);

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
          {mytown ? (
            <Address town={mytown} />
          ) : (
            <AddressSearchOpenButton onClick={onClickSetUpTownButton} />
          )}
        </>
      )}
    </Wrapper>
  );
}

export default MyTownPage;
