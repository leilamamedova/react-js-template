import { createTheme } from "@mui/material";
import { orange, red } from "@mui/material/colors";

const Theme = createTheme({
  palette: {
    secondary: orange,
    error: red,
  },
});

export default Theme;
