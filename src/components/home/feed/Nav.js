import React from "react";
import styled from "styled-components";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FeedIcon from "../../../css/icon/FeedIcon.svg";
import BookmarkIcon from "../../../css/icon/BookmarkIcon.svg";
import ProfileIcon from "../../../css/icon/ProfileIcon.svg";

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

const Icon = styled.img``;
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
        <NavButton label="피드" icon={<Icon src={FeedIcon} />} />
        <NavButton label="북마크" icon={<Icon src={BookmarkIcon} />} />
        <NavButton label="프로필" icon={<Icon src={ProfileIcon} />} />
      </NavButtonBox>
    </Wrapper>
  );
}
export default Nav;
