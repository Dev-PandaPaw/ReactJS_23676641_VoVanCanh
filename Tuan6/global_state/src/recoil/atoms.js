import { atom } from "recoil";

export const counterState = atom({
  key: "counterState",
  default: 0,
});

export const themeState = atom({
  key: "themeState",
  default: "light",
  effects_UNSTABLE: [
    ({ setSelf, onSet }) => {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme === "light" || savedTheme === "dark") {
        setSelf(savedTheme);
      }

      onSet((newTheme) => {
        localStorage.setItem("theme", newTheme);
      });
    },
  ],
});

export const userState = atom({
  key: "userState",
  default: null,
});

export const todosState = atom({
  key: "todosState",
  default: [],
});
