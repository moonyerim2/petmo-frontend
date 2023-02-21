import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { callPostsApi } from "../../../api";
import PostList from "./PostList.jsx";
import {
  selectedAnimalTabsAtom,
  selectedCategoryTabAtom,
  userSelector,
} from "../../../store";

const Wrapper = styled.div`
  box-sizing: border-box;
  background: rgba(241, 241, 245, 1);
  width: 100%;

  margin-top: 158px;
  overflow: scroll;
  -ms-overflow-style: none;

  &&::-webkit-scrollbar {
    display: none;
  }
`;

function Board() {
  const [postList, setPostList] = useState([]);
  const {
    address: { regionDepth2 },
  } = useRecoilValue(userSelector);
  const selectedAnimalTabs = useRecoilValue(selectedAnimalTabsAtom);
  const selectedCategoryTab = useRecoilValue(selectedCategoryTabAtom);

  useEffect(() => {
    (async () => {
      const payload = {
        boardAddress: regionDepth2,
        animalTypes: selectedAnimalTabs,
        categoryType: selectedCategoryTab,
        lastBoardId: 3,
      };

      const response = await callPostsApi(payload);
      setPostList(response.data);
    })();
  }, [regionDepth2, selectedAnimalTabs, selectedCategoryTab]);

  return (
    <Wrapper>
      <PostList postList={postList} />
    </Wrapper>
  );
}

export default Board;
