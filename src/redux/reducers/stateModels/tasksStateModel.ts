import { Theme } from "./../../../models/thtme";
import { light } from "../../../themes/themes";
import { dark } from "./../../../themes/themes";

export interface IinitialState {
  msg: string;
  count: number;
  theme: Theme;
  selectedTheme: string;
  historyStack: HistoryObject[];
  drawer: boolean;
}

export interface HistoryObject {
  path: string;
  pathName: string;
}

export const initialStateValue: IinitialState = {
  msg: "helo",
  drawer: false,
  count: 0,
  theme: dark,
  selectedTheme: "dark",
  historyStack: [
    { path: "/home", pathName: "home" },
    { path: "/about", pathName: "about" },
  ],
};
