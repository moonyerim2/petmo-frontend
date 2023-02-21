import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import styled from "styled-components";
import { tags } from "../../../../constants";

const Wrapper = styled(Box)`
  background-color: ${({ theme: { colors } }) => colors.bgMedium};
  height: 56px;
  padding: 10px 20px;
  font-family: Pretendard, -apple-system, BlinkMacSystemFont, "Malgun Gothic",
    "맑은 고딕", helvetica, "Apple SD Gothic Neo", sans-serif;

  &.MuiTabs-root {
    -webkit-overflow-scrolling: initial;
  }
`;

const Tag = styled(Tab)`
  &&.MuiButtonBase-root {
    background-color: ${({ theme: { colors } }) => colors.white};
    font-weight: 500;
    font-size: 14px;
    line-height: 100%;
    border-radius: 200px;
    color: ${({ theme: { colors } }) => colors.black};
    margin-right: 8px;
  }

  &&.Mui-selected {
    background: ${({ theme: { colors } }) => colors.black};
    color: ${({ theme: { colors } }) => colors.white};
  }

  &&.MuiTab-root {
    padding: 11px 16px;
    min-width: 0;
    min-height: 36px;
  }
`;

function AnimalTabBar() {
  const [tabIndex, setTabIndex] = React.useState(0);

  const handleClick = (_, newTabIndex) => {
    setTabIndex(newTabIndex);
  };

  return (
    <Wrapper>
      <Tabs
        value={tabIndex}
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
        {tags.pet.map((species) => (
          <Tag key={species} label={species} />
        ))}
      </Tabs>
    </Wrapper>
  );
}

export default AnimalTabBar;
