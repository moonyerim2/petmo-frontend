import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { callPostsApi } from "../../../api";
import PostList from "./PostList.jsx";

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

  useEffect(() => {
    (async () => {
      const payload = {
        boardAddress: "송파동",
        animalTypes: ["강아지", "고양이"],
        categoryType: "전체",
        lastBoardId: 3,
      };

      const response = await callPostsApi(payload);
      setPostList(response.data);
    })();
  }, []);

  return (
    <Wrapper>
      <PostList postList={postList} />
    </Wrapper>
  );
}

export default Board;
