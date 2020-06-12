import { atom } from "recoil";

export const sideBarState = atom({
  key: "sideBarState", // unique ID (with respect to other atoms/selectors)
  default: false
})