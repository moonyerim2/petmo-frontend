import { rest } from "msw";
import { BASE_URL } from "../constants";
import { commentsData } from "../mocks";

export const commentsHandler = [
  rest.get(`${BASE_URL}/comments/1`, (req, res, ctx) => {
    return res(ctx.json(commentsData));
  }),
];
