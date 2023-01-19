import { rest } from "msw";
import { BASE_URL } from "../constants";

export const handlers = [
  rest.post(`${BASE_URL}/auth/sign-in`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.cookie("SESSION", "abc-123"));
  }),

  rest.get(`${BASE_URL}/oauth2/authorization/naver`, (req, res, ctx) => {
    return res(ctx.status(302), ctx.cookie("SESSION", "abc-123"));
  }),

  rest.get(`${BASE_URL}/oauth2/authorization/kakao`, (req, res, ctx) => {
    return res(ctx.status(302), ctx.cookie("SESSION", "abc-123"));
  }),

  rest.get(`${BASE_URL}/users/static-info`, (req, res, ctx) => {
    return res(
      ctx.json({
        email: "asd@naver.com",
        address: {
          addressName: "서울특별시 광진구",
          regionDepth1: "서울특별시",
          regionDepth2: "광진구",
        },
        nickname: "모찌",
        hasPet: false,
        first: true,
      })
    );
  }),

  rest.post(`${BASE_URL}/auth/sign-up`, (req, res, ctx) => {
    return res(ctx.status(201));
  }),

  rest.post(`${BASE_URL}/users/address`, async (req, res, ctx) => {
    return res(ctx.status(200));
  }),

  rest.delete(`${BASE_URL}/users/address`, (_, res, ctx) => {
    return res(ctx.status(200));
  }),

  rest.post(`${BASE_URL}/users/address/search/ip`, async (req, res, ctx) => {
    return res(
      ctx.json([
        {
          addressName: "서울특별시 강서구 마곡동",
          regionDepth1: "서울특별시",
          regionDepth2: "강서구",
          regionDepth3: "마곡동",
        },
        {
          addressName: "서울특별시 강서구 마곡동",
          regionDepth1: "서울특별시",
          regionDepth2: "강서구",
          regionDepth3: "마곡동",
        },
      ])
    );
  }),

  rest.get(`${BASE_URL}/users/address/search/query`, async (req, res, ctx) => {
    return res(
      ctx.json([
        {
          id: 1,
          regionDepth1: "경기",
          regionDepth2: "시흥",
        },
        {
          id: 2,
          regionDepth1: "경기",
          regionDepth2: "시흥",
        },
      ])
    );
  }),

  rest.post(`${BASE_URL}/registerPost`, async (req, res, ctx) => {
    console.log(req);
    return res(ctx.status(200));
  }),

  rest.post(`${BASE_URL}/users/animals`, async (req, res, ctx) => {
    console.log(req);
    return res(ctx.status(200));
  }),
];
