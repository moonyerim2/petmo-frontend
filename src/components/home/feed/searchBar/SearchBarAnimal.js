import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import styled from "@emotion/styled";

const Wrapper = styled(Box)`
  background-color: #f1f1f5;
  width: 100%;
  height: 56px;
  display: flex;
  align-items: center;
  padding: 5px 0px;
`;
const TagBox = styled(Tabs)`
  &&.MuiTabs-indicator {
  }
`;

const Tag = styled(Tab)`
  &&.MuiButtonBase-root {
    min-width: 0px;
    background-color: #ffffff;
    width: 69px;
    height: 36px;
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 100%;
    border: 1px solid #f0f0f6;
    border-radius: 200px;
    color: #000000;
    margin: 4px;
    padding: 11px 0px;
  }
  &&.Mui-selected {
    background: #111111;
    border-radius: 200px;
    color: #ffffff;
  }
`;

export default function SearchBarAnimal() {
  const [value, setValue] = React.useState(0);

  const handleClick = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Wrapper sx={{ height: 46, padding: 0 }}>
      <TagBox
        value={value}
        onChange={handleClick}
        variant="scrollable"
        scrollButtons={false}
        aria-label="scrollable prevent tabs example"
        TabIndicatorProps={{
          style: {
            display: "none",
          },
        }}
      >
        <Tag label="전체" />
        <Tag label="강아지" />
        <Tag label="고양이" />
        <Tag label="물고기" />
        <Tag label="햄스터" />
        <Tag label="파충류" />
        <Tag label="새" />
        <Tag label="토끼" />
        <Tag label="기타" />
      </TagBox>
    </Wrapper>
  );
}
