import React, { useState } from "react";
import styled, { css } from "styled-components";
import { useRecoilValue } from "recoil";
import { useNavigate } from "react-router-dom";
import { Select, Option } from "../../common";
import { DimLayer } from "../../../styled";
import { userSelector } from "../../../store";

const HeaderBox = styled.div`
  display: flex;
  align-items: center;
  padding-left: 20px;

  ${({ theme: { sizes } }) => css`
    ${{ ...sizes.size1 }}
  `}
`;

function FeedHeader() {
  const {
    user_address: { regionDepth2 },
  } = useRecoilValue(userSelector);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const onClickSelect = ({ target }) => {
    const isSeletElement =
      target.classList.contains("town-select") ||
      target.parentElement.classList.contains("town-select");

    if (!isOpen && isSeletElement) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  };

  return (
    <HeaderBox onClick={onClickSelect}>
      <DimLayer isOpen={isOpen} />
      <Select className="town-select" defaultValue={10}>
        <Option value={10}>{regionDepth2}</Option>
        <Option value={20}>전국지역</Option>
        <Option value={30} onClick={() => navigate("/mytown")}>
          내 동네 설정하기
        </Option>
      </Select>
    </HeaderBox>
  );
}

export default FeedHeader;
