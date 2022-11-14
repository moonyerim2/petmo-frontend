import React from "react";
import styled from "styled-components";

const HeaderBox = styled.div`
  box-sizing: border-box;
  background: rgba(255, 255, 255, 1);
  width: 100%;
  height: 56px;
  display: flex;
`;

const Select = styled.select`
  border: none;
  font-weight: Bold;
  font-size: 18px;
  opacity: 1;
  text-align: left;
  padding: 17px;
`;

function FeedHeader() {
  return (
    <HeaderBox>
      <Select>
        <option value="공덕동">공덕동</option>
      </Select>
    </HeaderBox>
  );
}

export default FeedHeader;
