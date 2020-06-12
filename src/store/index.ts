import { atom, selector } from "recoil";

export const sideBarState = atom({
  key: "sideBarState", // unique ID (with respect to other atoms/selectors)
  default: false
})



export const defaultItemState = atom({
  key: "defaultItemState",
  default: ""
})

export const filteredDefaultItem = selector({
  key: "filteredDefaultItem",
  get: ({ get }) => !!sessionStorage.getItem("defaultItem")
    ? [sessionStorage.getItem("defaultItem")]
    : [get(defaultItemState)]
})