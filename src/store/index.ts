import { atom, selector, RecoilState } from "recoil";

// 设置全局的token
export const tokenState = atom({
  key: "tokenState",
  default: "",
});

export const sideBarState = atom({
  key: "sideBarState", // unique ID (with respect to other atoms/selectors)
  default: false,
});

export const defaultItemState = atom({
  key: "defaultItemState",
  default: "",
});

export const filteredDefaultItem = selector({
  key: "filteredDefaultItem",
  get: ({ get }) =>
    !!sessionStorage.getItem("defaultItem")
      ? [sessionStorage.getItem("defaultItem")]
      : [get(defaultItemState)],
});

/**
 * 储存token到storage
 */
export const filteredTokenState = selector({
  key: "filteredTokenState",
  get: ({ get }) =>
    !!localStorage.getItem("gdcToken")
      ? localStorage.getItem("gdcToken")
      : get(tokenState),
  set: ({ set }, newValue) => {
    localStorage.setItem("gdcToken", newValue as string);
    console.log("filteredTokenState" + newValue);
    return set(tokenState as RecoilState<unknown>, newValue);
  },
});
