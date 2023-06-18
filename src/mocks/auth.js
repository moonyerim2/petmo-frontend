import { rest } from "msw";
import { BASE_URL } from "../constants";

export const authHandler = [
  rest.post(`${BASE_URL}/auths/sign-in`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.cookie("SESSION", "abc-123"));
  }),

  rest.post(`${BASE_URL}/auths/sign-up`, (req, res, ctx) => {
    return res(ctx.status(201));
  }),

  rest.get(`${BASE_URL}/oauth2/authorization/naver`, (req, res, ctx) => {
    return res(ctx.status(302), ctx.cookie("SESSION", "abc-123"));
  }),

  rest.get(`${BASE_URL}/oauth2/authorization/kakao`, (req, res, ctx) => {
    return res(ctx.status(302), ctx.cookie("SESSION", "abc-123"));
  }),
];
