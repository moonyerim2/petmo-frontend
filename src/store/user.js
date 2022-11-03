import { atom } from "recoil";
import { getCookie } from "../util";

export const authenticated = atom({
  key: "authenticated",
  default: getCookie("session"),
});
