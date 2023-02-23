import { rest } from "msw";
import { BASE_URL } from "../constants";

export const boardHandler = [
  rest.post(`${BASE_URL}/registerPost`, async (req, res, ctx) => {
    return res(ctx.status(200));
  }),
];
