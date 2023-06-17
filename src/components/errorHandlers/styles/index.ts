import { styled } from "@mui/system";

import { ErrorIcon } from "assets/icons";

export const Container = styled("div")({
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  textAlign: "center",
});

export const Icon = styled(ErrorIcon)({
  fontSize: 40,
  color: "rgba(196, 35, 35)",
});

export const Title = styled("h1")({
  marginTop: 0,
  marginBottom: 40,
});

export const Button = styled("div")({
  width: 100,
  cursor: "pointer",
  borderRadius: 5,
  fontWeight: 500,
  padding: 7,
  backgroundColor: "#E7F1FE",
  color: "#1871ED",
  textAlign: "center",
  display: "inline",
  marginRight: 10,
});
