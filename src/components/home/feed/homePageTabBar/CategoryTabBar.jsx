import React, { useState } from "react";
import styled, { useTheme } from "styled-components";
import { useSetRecoilState } from "recoil";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { tabBarTags } from "../../../../constants";
import { selectedCategoryTabAtom } from "../../../../store";

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
  const setSelectedCategoryTab = useSetRecoilState(selectedCategoryTabAtom);

  const handleClick = (_, newTabIndex) => {
    setTabIndex(newTabIndex);
    setSelectedCategoryTab(tabBarTags.topic[newTabIndex]);
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
        {tabBarTags.topic.map((topic) => (
          <Tag key={topic} label={topic} />
        ))}
      </StyledTabs>
    </Box>
  );
}

export default CategoryTabBar;
