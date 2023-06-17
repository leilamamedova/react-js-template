import { createStyles } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useLoadingStyles: any = makeStyles(() =>
  createStyles({
    icon: {
      margin: "auto",
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      position: "absolute",
      color: "orange",
      width: "60px !important",
      height: "60px !important",
    },
    backdrop: {
      zIndex: 999,
      position: "absolute",
      width: "100%",
      height: "100%",
      background: "#ffffff6e",
      top: 0,
      left: 0,
    },
  }),
);
