import { style } from "@vanilla-extract/css";
import { palette } from "../private/color";

export const placeholderContainer = style([
  {
    border: `1.5px solid ${palette.grey[300]}`,
    backgroundColor: palette.grey[100],
  },
]);

export const box = style([
  {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
]);

export const xLine = style([{ strokeWidth: 1.5, stroke: palette.grey[300] }]);
