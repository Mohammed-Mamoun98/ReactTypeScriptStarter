import { Theme } from "./../../../models/thtme";
import { light } from "../../../themes/themes";
import { dark } from "./../../../themes/themes";

export interface IinitialState {
  msg: string;
  count: number;
  theme: Theme;
  selectedTheme: string;
}

export const initialStateValue: IinitialState = {
  msg: "helo",
  count: 0,
  theme: dark,
  selectedTheme: "dark",
};
