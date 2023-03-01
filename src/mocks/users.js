import { rest } from "msw";
import { BASE_URL } from "../constants";

const UserInfo = (() => {
  let staticInfo = {
    email: "asd@naver.com",
    address: {
      addressName: "서울특별시 광진구",
      regionDepth1: "서울특별시",
      regionDepth2: "광진구",
    },
    nickname: "모찌",
    hasPet: false,
    first: true,
  };

  let profileInfo = {
    nickname: "모찌누나",
    profile: "모찌/비숑/6살",
    regionDepth2: "광진구",
    animals: [],
  };

  const getStaticInfo = () => staticInfo;

  const getProfileInfo = () => profileInfo;

  const setPetData = (petData) => {
    staticInfo = { ...staticInfo, hasPet: true, first: false };
    profileInfo = { ...profileInfo, animals: petData };
  };

  const deleteAddress = () => {
    staticInfo.address = {};
    profileInfo.regionDepth2 = "";
  };

  const setAddress = (addressData) => {
    staticInfo.address = addressData;
    profileInfo.regionDepth2 = staticInfo.address.regionDepth2;
  };

  return {
    setPetData,
    setAddress,
    deleteAddress,
    getStaticInfo,
    getProfileInfo,
  };
})();

export const usersHandler = [
  rest.get(`${BASE_URL}/users/static-info`, (req, res, ctx) => {
    return res(ctx.json(UserInfo.getStaticInfo()));
  }),

  rest.post(`${BASE_URL}/users/address`, async (req, res, ctx) => {
    UserInfo.setAddress(await req.json());
    return res(ctx.status(200));
  }),

  rest.delete(`${BASE_URL}/users/address`, (_, res, ctx) => {
    UserInfo.deleteAddress();
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

  rest.post(`${BASE_URL}/users/animals`, async (req, res, ctx) => {
    UserInfo.setPetData(await req.json());
    return res(ctx.status(200));
  }),
];
