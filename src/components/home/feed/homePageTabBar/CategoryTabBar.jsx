import React, { useState } from "react";
import styled, { useTheme } from "styled-components";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { tags } from "../../../../constants";

const StyledTabs = styled(Tabs)`
  padding: 0 20px;

  &&.MuiTabs-root {
    min-height: 46px;
  }

  &&.MuiTabs-indicator {
    background-color: ${({ theme: { colors } }) => colors.main};
  }
`;

const Tag = styled(Tab)`
  &&.MuiButtonBase-root {
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

function CategoryTabBar() {
  const { colors } = useTheme();
  const [TabIndex, setTabIndex] = useState(0);

  const handleClick = (_, newTabIndex) => {
    setTabIndex(newTabIndex);
  };

  return (
    <Box>
      <StyledTabs
        value={TabIndex}
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
      </StyledTabs>
    </Box>
  );
}

export default CategoryTabBar;
