import React from "react";
import styled from "styled-components";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FeedIcon from "../../../css/icon/FeedIcon.svg";
import coloredFeed from "../../../css/icon/coloredFeed.svg";
import BookmarkIcon from "../../../css/icon/BookmarkIcon.svg";
import coloredBookmark from "../../../css/icon/coloredBookmark.svg";
import ProfileIcon from "../../../css/icon/ProfileIcon.svg";
import coloredProfile from "../../../css/icon/coloredProfile.svg";

const Wrapper = styled(Box)`
  height: 57px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  bottom: 0;
  background-color: white;
`;
const NavButtonBox = styled(BottomNavigation)`
  &.MuiBottomNavigation-root {
    width: 320px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 20px;
  }
`;

const NavButton = styled(BottomNavigationAction)`
  &.MuiButtonBase-root {
    padding: 0px;
    margin: 0px;
  }
  &&.Mui-selected {
    color: #fa3c89;
  }
`;

const Icon = styled.img`
  color: #fa3c89;
`;
function Nav() {
  const [value, setValue] = React.useState(0);

  return (
    <Wrapper sx={{ width: 500 }}>
      <NavButtonBox
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <NavButton
          label="피드"
          icon={<Icon src={value === 0 ? coloredFeed : FeedIcon} />}
        />
        <NavButton
          label="북마크"
          icon={<Icon src={value === 1 ? coloredBookmark : BookmarkIcon} />}
        />
        <NavButton
          label="프로필"
          icon={<Icon src={value === 2 ? coloredProfile : ProfileIcon} />}
        />
      </NavButtonBox>
    </Wrapper>
  );
}
export default Nav;
