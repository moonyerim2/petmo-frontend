import { rest } from "msw";
import { BASE_URL } from "../constants";
import { commentsData } from "../mocks";

export const commentsHandler = [
  rest.get(`${BASE_URL}/comments/1`, (req, res, ctx) => {
    return res(ctx.json(commentsData));
  }),
  rest.post(`${BASE_URL}/comments/add`, (req, res, ctx) => {
    return res(ctx.status(201));
  }),
  rest.post(`${BASE_URL}/comments/reply`, (req, res, ctx) => {
    return res(ctx.status(201));
  }),
];
