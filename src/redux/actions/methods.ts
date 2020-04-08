import { light } from "../../themes/themes";
import { dark } from "./../../themes/themes";
import { Theme } from "./../../models/thtme";

export const handleThemePick = (theme: string) => {
  switch (theme) {
    case "light":
      return light;
      break;
    case "dark":
      return dark;
      break;
  }
};
