import { rest } from "msw";
import { BASE_URL } from "../constants";

const UserInfo = (() => {
  let staticInfo = {
    pk: 2,
    username: "momo",
    email: "momo@gmail.com",
    password:
      "pbkdf2_sha256$320000$oFc3nbNMC9l8mtO7ZRmgoY$Zi5oWFNWP8xPfLB2FNoraFSr0BOT6qC6uxomvUv0TvA=",
    profile:
      "https://www.lifewithcats.tv/wp-content/uploads/2011/04/Jumping-Cat.jpg",
    user_address: {
      addressName: "서울특별시 강남구 잠원동",
      regionDepth1: "서울특별시",
      regionDepth2: "강남구",
      regionDepth3: "잠원동",
    },
    hasPet: true,
    pets: [
      {
        animalTypes: "강아지",
      },
      {
        animalTypes: "파충류",
      },
    ],
    first: true,
  };

  let profileInfo = {
    username: "모찌누나",
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
    staticInfo.user_address = {};
    profileInfo.regionDepth2 = "";
  };

  const setAddress = (addressData) => {
    staticInfo.address = addressData;
    profileInfo.regionDepth2 = staticInfo.user_address.regionDepth2;
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

  rest.post(`${BASE_URL}/users/address/get/ip`, async (req, res, ctx) => {
    return res(
      ctx.json([
        {
          address_name: "인천광역시 연수구 송도동",
          region_1depth_name: "인천광역시",
          region_2depth_name: "연수구",
          region_3depth_name: "송도동",
        },
        {
          address_name: "인천광역시 연수구 송도2동",
          region_1depth_name: "인천광역시",
          region_2depth_name: "연수구",
          region_3depth_name: "송도2동",
        },
      ])
    );
  }),

  rest.get(`${BASE_URL}/users/address/get/query`, async (req, res, ctx) => {
    return res(
      ctx.json([
        {
          address_name: "인천광역시 연수구 송도동1",
          region_1depth_name: "인천광역시",
          region_2depth_name: "연수구",
          region_3depth_name: "송도동",
        },
        {
          address_name: "인천광역시 연수구 송도2동2",
          region_1depth_name: "인천광역시",
          region_2depth_name: "연수구",
          region_3depth_name: "송도2동",
        },
      ])
    );
  }),

  rest.post(`${BASE_URL}/users/animals`, async (req, res, ctx) => {
    UserInfo.setPetData(await req.json());
    return res(ctx.status(200));
  }),
];
