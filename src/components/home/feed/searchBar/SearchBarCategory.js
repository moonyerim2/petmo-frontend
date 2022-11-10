import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import styled from "@emotion/styled";

const TagBox = styled(Tabs)`
  padding: 0px 12px;
  &&.MuiTabs-indicator {
    background-color: #fa3c89;
  }
`;

const Tag = styled(Tab)`
  &&.MuiButtonBase-root {
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    padding: 8px;
    min-width: 0px;
  }
  &&.Mui-selected {
    color: #fa3c89;
  }
`;

export default function SearchBarCategory() {
  const [value, setValue] = React.useState(0);

  const handleClick = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ height: 46, padding: 0 }}>
      <TagBox
        value={value}
        onChange={handleClick}
        variant="scrollable"
        scrollButtons={false}
        aria-label="scrollable prevent tabs example"
        TabIndicatorProps={{
          style: {
            backgroundColor: "#FA3C89",
          },
        }}
      >
        <Tag label="전체" />
        <Tag label="자유" />
        <Tag label="반려질문" />
        <Tag label="반려고수" />
        <Tag label="장소후기" />
        <Tag label="축하해요" />
        <Tag label="반려구조대" />
      </TagBox>
    </Box>
  );
}
