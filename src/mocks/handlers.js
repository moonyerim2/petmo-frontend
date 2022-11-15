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

  rest.get(`${BASE_URL}/user`, (req, res, ctx) => {
    return res(
      ctx.json({
        userId: 123,
        town: "시흥시",
        img: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fb9riv2%2FbtrmFpLSjbS%2FB2821m7swdX3KuuygajwV0%2Fimg.jpg&imgrefurl=https%3A%2F%2Fsunchip.tistory.com%2Fentry%2F%25ED%2591%25B8%25EB%25A5%25B8%25EB%25B9%259B-%25EB%258F%2584%25EB%258A%2594-%25ED%2594%2584%25EB%25A1%259C%25ED%2595%2584-%25EC%2582%25AC%25EC%25A7%2584-%25EB%25B3%25B4%25EC%25A0%2595%25ED%2595%2598%25EA%25B8%25B0-%25EC%2585%2580%25ED%2594%2584-%25EC%258A%25A4%25ED%258A%259C%25EB%2594%2594%25EC%2598%25A4-%25EC%2582%25AC%25EC%25A7%2584-%25EB%25B3%25B4%25EC%25A0%2595%25EB%25B2%2595-%25ED%2594%2584%25EB%25A1%259C%25ED%2595%2584-%25EC%2582%25AC%25EC%25A7%2584-%25EB%25B3%25B4%25EC%25A0%2595-%25ED%258F%25AC%25ED%2586%25A0%25EC%2583%25B5-2020cc&tbnid=IlOIgLOetyWvaM&vet=10CA8QxiAoAWoXChMI6ImflY2c-wIVAAAAAB0AAAAAEAg..i&docid=EadeBfj2qrkc7M&w=1200&h=1527&itg=1&q=%ED%94%84%EB%A1%9C%ED%95%84%EC%82%AC%EC%A7%84&ved=0CA8QxiAoAWoXChMI6ImflY2c-wIVAAAAAB0AAAAAEAg",
        nickname: "모찌",
        hasPet: null,
      })
    );
  }),

  rest.post(`${BASE_URL}/auth/sign-up`, (req, res, ctx) => {
    return res(ctx.status(201));
  }),

  rest.post(`${BASE_URL}/register-mytown`, async (req, res, ctx) => {
    const body = await req.json();
    const town = await body.town.split(" ");
    return res(
      ctx.json({
        userId: 123,
        town: `${town[1]}`,
        img: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fb9riv2%2FbtrmFpLSjbS%2FB2821m7swdX3KuuygajwV0%2Fimg.jpg&imgrefurl=https%3A%2F%2Fsunchip.tistory.com%2Fentry%2F%25ED%2591%25B8%25EB%25A5%25B8%25EB%25B9%259B-%25EB%258F%2584%25EB%258A%2594-%25ED%2594%2584%25EB%25A1%259C%25ED%2595%2584-%25EC%2582%25AC%25EC%25A7%2584-%25EB%25B3%25B4%25EC%25A0%2595%25ED%2595%2598%25EA%25B8%25B0-%25EC%2585%2580%25ED%2594%2584-%25EC%258A%25A4%25ED%258A%259C%25EB%2594%2594%25EC%2598%25A4-%25EC%2582%25AC%25EC%25A7%2584-%25EB%25B3%25B4%25EC%25A0%2595%25EB%25B2%2595-%25ED%2594%2584%25EB%25A1%259C%25ED%2595%2584-%25EC%2582%25AC%25EC%25A7%2584-%25EB%25B3%25B4%25EC%25A0%2595-%25ED%258F%25AC%25ED%2586%25A0%25EC%2583%25B5-2020cc&tbnid=IlOIgLOetyWvaM&vet=10CA8QxiAoAWoXChMI6ImflY2c-wIVAAAAAB0AAAAAEAg..i&docid=EadeBfj2qrkc7M&w=1200&h=1527&itg=1&q=%ED%94%84%EB%A1%9C%ED%95%84%EC%82%AC%EC%A7%84&ved=0CA8QxiAoAWoXChMI6ImflY2c-wIVAAAAAB0AAAAAEAg",
        nickname: "모찌",
        hasPet: null,
      })
    );
  }),

  rest.delete(`${BASE_URL}/delete-mytown`, (_, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        userId: 123,
        town: "시흥시",
        img: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fb9riv2%2FbtrmFpLSjbS%2FB2821m7swdX3KuuygajwV0%2Fimg.jpg&imgrefurl=https%3A%2F%2Fsunchip.tistory.com%2Fentry%2F%25ED%2591%25B8%25EB%25A5%25B8%25EB%25B9%259B-%25EB%258F%2584%25EB%258A%2594-%25ED%2594%2584%25EB%25A1%259C%25ED%2595%2584-%25EC%2582%25AC%25EC%25A7%2584-%25EB%25B3%25B4%25EC%25A0%2595%25ED%2595%2598%25EA%25B8%25B0-%25EC%2585%2580%25ED%2594%2584-%25EC%258A%25A4%25ED%258A%259C%25EB%2594%2594%25EC%2598%25A4-%25EC%2582%25AC%25EC%25A7%2584-%25EB%25B3%25B4%25EC%25A0%2595%25EB%25B2%2595-%25ED%2594%2584%25EB%25A1%259C%25ED%2595%2584-%25EC%2582%25AC%25EC%25A7%2584-%25EB%25B3%25B4%25EC%25A0%2595-%25ED%258F%25AC%25ED%2586%25A0%25EC%2583%25B5-2020cc&tbnid=IlOIgLOetyWvaM&vet=10CA8QxiAoAWoXChMI6ImflY2c-wIVAAAAAB0AAAAAEAg..i&docid=EadeBfj2qrkc7M&w=1200&h=1527&itg=1&q=%ED%94%84%EB%A1%9C%ED%95%84%EC%82%AC%EC%A7%84&ved=0CA8QxiAoAWoXChMI6ImflY2c-wIVAAAAAB0AAAAAEAg",
        nickname: "모찌",
        hasPet: null,
      })
    );
  }),

  rest.post(`${BASE_URL}/users/address/search/ip`, async (req, res, ctx) => {
    return res(
      ctx.json([
        {
          id: 1,
          addressName: "서울특별시 강서구 마곡동",
          regionDepth1: "서울특별시",
          regionDepth2: "강서구",
          regionDepth3: "마곡동",
        },
        {
          id: 2,
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
