import { atom } from "recoil";

export const selectedAnimalTabsAtom = atom({
  key: "selectedAnimalTabsAtom",
  default: ["전체"],
});

export const selectedCategoryTabAtom = atom({
  key: "selectedCategoryTabAtom",
  default: "전체",
});
