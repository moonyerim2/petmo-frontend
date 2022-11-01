import { rest } from "msw";

const BASE_URL = "http://api.server.com";

export const handlers = [
  rest.post(`${BASE_URL}/login`, (req, res, ctx) => {
    console.log(req);
    return res(ctx.status(200), ctx.cookie("session", "abc-123"));
  }),

  rest.post(`${BASE_URL}/join`, (req, res, ctx) => {
    console.log(req);
    return res(ctx.status(201));
  }),
];
