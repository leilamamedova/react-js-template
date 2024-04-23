import { CircularProgress, Skeleton } from "@mui/material";
import { styled } from "@mui/system";

export const Loading = styled(CircularProgress)({
  margin: "auto",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  position: "absolute",
  color: "orange",
  width: "60px !important",
  height: "60px !important",
});

export const SkeletonComponent = styled(Skeleton)({
  zIndex: 999,
  position: "absolute",
  width: "100%",
  height: "100%",
  background: "#ffffff6e",
  top: 0,
  left: 0,
});
