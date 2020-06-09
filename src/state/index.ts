import { atom } from "recoil";

const sideBar = atom({
  key: "sideBar", // unique ID (with respect to other atoms/selectors)
  default: false
})