import React, { useCallback, useState, useEffect } from "react";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { callPostsApi } from "../../../api";
import PostList from "./PostList.jsx";
import NoPost from "./NoPost";
import {
  selectedAnimalTabsAtom,
  selectedCategoryTabAtom,
  userSelector,
} from "../../../store";
import { useInfiniteScroll } from "../../../hooks";

const Wrapper = styled.div`
  background: ${({ theme: { color } }) => color.gray100};
  margin-top: 160px;
  overflow: scroll;
  -ms-overflow-style: none;

  &&::-webkit-scrollbar {
    display: none;
  }
`;

function Board() {
  const [postList, setPostList] = useState([]);
  const {
    user_address: { regionDepth2 },
  } = useRecoilValue(userSelector);
  const selectedAnimalTabs = useRecoilValue(selectedAnimalTabsAtom);
  const selectedCategoryTab = useRecoilValue(selectedCategoryTabAtom);

  const fetchPostList = useCallback(async () => {
    const payload = {
      boardAddress: regionDepth2,
      animalTypes: selectedAnimalTabs,
      categoryType: selectedCategoryTab,
      lastBoardId: 3,
    };

    const response = await callPostsApi(payload);
    setPostList((prevPostList) => [...prevPostList, ...response.data]);
  }, [regionDepth2, selectedAnimalTabs, selectedCategoryTab]);

  useEffect(() => {
    setPostList(() => []);
    fetchPostList();
  }, [regionDepth2, selectedAnimalTabs, selectedCategoryTab]);

  useInfiniteScroll(fetchPostList);

  return (
    <Wrapper>
      {postList.length ? <PostList postList={postList} /> : <NoPost />}
    </Wrapper>
  );
}

export default Board;
