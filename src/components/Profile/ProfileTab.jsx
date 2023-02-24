import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import styled from "@emotion/styled";
import Card from "../card/Card";
import ProfileCommentCard from "./ProfileCommentCard";
import PropTypes from "prop-types";

const BigBox = styled(Box)`
  padding: 0px;
`;
const StyledBox = styled(Box)`
  padding: 0px 12px;
  &&.MuiTabs-indicator {
    background-color: #fa3c89;
  }
`;
const StyledTab = styled(Tab)`
  padding: 0px;
  &&.MuiButtonBase-root {
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    padding: 8px;
    width: 50%;
  }
  &&.Mui-selected {
    color: #fa3c89;
  }
`;

const Board = styled.div`
  box-sizing: border-box;
  width: 100%;
  background: #f0f0f6;
`;
const StyledTabPanel = styled(TabPanel)`
  padding: 0px;
`;
export default function ProfileTab({ userPosts, userComments }) {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BigBox sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <StyledBox sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList
            onChange={handleChange}
            aria-label="lab API tabs example"
            TabIndicatorProps={{
              style: { background: "#FA3C89" },
            }}
          >
            <StyledTab label="게시글" value="1" />
            <StyledTab label="작성댓글" value="2" />
          </TabList>
        </StyledBox>
        <StyledTabPanel value="1">
          <Board>
            {userPosts.map((it) => (
              <Card key={it.id} {...it} />
            ))}
          </Board>
        </StyledTabPanel>
        <StyledTabPanel value="2">
          {userComments.map((it) => (
            <ProfileCommentCard key={it.commentId} {...it} />
          ))}
        </StyledTabPanel>
      </TabContext>
    </BigBox>
  );
}
ProfileTab.propTypes = {
  userPosts: PropTypes.array,
  userComments: PropTypes.array,
};
