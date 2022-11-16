import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import styled, { useTheme } from "styled-components";
import { tags } from "../../../../constants";

const TagBox = styled(Tabs)`
  padding-left: 20px;

  &&.MuiTabs-root {
    min-height: 46px;
  }

  &&.MuiTabs-indicator {
    background-color: ${({ theme: { colors } }) => colors.main};
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
    color: ${({ theme: { colors } }) => colors.main};
  }
`;

export default function SearchBarCategory() {
  const [value, setValue] = React.useState(0);
  const { colors } = useTheme();

  const handleClick = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box>
      <TagBox
        value={value}
        onChange={handleClick}
        variant="scrollable"
        scrollButtons={false}
        aria-label="scrollable prevent tabs example"
        TabIndicatorProps={{
          style: {
            backgroundColor: colors.main,
          },
        }}
      >
        <Tag label="전체" />
        {tags.topic.map((topic) => (
          <Tag key={topic} label={topic} />
        ))}
      </TagBox>
    </Box>
  );
}
