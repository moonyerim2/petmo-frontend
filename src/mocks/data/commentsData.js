import uuid from "react-uuid";

export const commentsData = () => [
  {
    commentId: uuid(),
    author: "오즈",
    address: "광진구",
    content: "강아지가 너무 귀엽네요~!",
    depth: 1,
    deleted: false,
    children: [
      {
        commentId: uuid(),
        author: "설이맘",
        address: "송파구",
        content: "동의2222",
        depth: 2,
        deleted: false,
        createdData: "2022-12-11 16:32:23",
      },
      {
        commentId: uuid(),
        author: "훈이",
        address: "광진구",
        content: "설이맘님 안녕하세요~",
        depth: 2,
        deleted: false,
        createdData: "2022-12-12 16:32:23",
      },
    ],
    createdData: "2022-12-10 16:32:23",
  },
  {
    commentId: uuid(),
    author: "또치",
    address: "광진구",
    content: "귀여워요~",
    depth: 1,
    deleted: false,
    children: [
      {
        commentId: uuid(),
        author: "광진구불주먹",
        address: "광진구",
        content: "넵넵2222",
        depth: 2,
        deleted: false,
        createdData: "2022-12-13 16:32:23",
      },
      {
        commentId: uuid(),
        author: "안냥",
        address: "광진구",
        content: "333333333333333333",
        depth: 2,
        deleted: false,
        createdData: "2022-12-13 16:32:23",
      },
    ],
    createdData: "2022-12-11 16:32:23",
  },
];
