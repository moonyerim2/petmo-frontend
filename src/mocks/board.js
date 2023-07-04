import uuid from "react-uuid";
import { rest } from "msw";
import { BASE_URL } from "../constants";
import { allPostsData } from "./data/allPostsData";
import { rabbitPostsData } from "./data/rabbitPostsData";
import { singlePostData } from "./data/singlePostData";

export const boardHandler = [
  rest.get(`${BASE_URL}/posts/list`, async (req, res, ctx) => {
    const animalTypes = req.url.searchParams.get("animalTypes");
    const categoryType = req.url.searchParams.get("categoryType");

    if (categoryType === "전체" && animalTypes === "전체")
      return res(ctx.json(allPostsData()));
    if (categoryType === "자유" && animalTypes === "토끼")
      return res(ctx.json(rabbitPostsData()));
    return res(ctx.status(400));
  }),

  rest.get(`${BASE_URL}/board/:boardId`, async (req, res, ctx) => {
    return res(ctx.json(singlePostData()));
  }),

  rest.post(`${BASE_URL}/likes/post`, async (req, res, ctx) => {
    return res(ctx.status(201));
  }),

  rest.post(`${BASE_URL}/bookmarks`, async (req, res, ctx) => {
    return res(ctx.status(201));
  }),

  rest.post(`${BASE_URL}/board/add`, async (req, res, ctx) => {
    return res(ctx.json(uuid()), ctx.status(201));
  }),
];
