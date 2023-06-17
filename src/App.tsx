import React from "react";

import { ThemeProvider } from "@mui/material";
import { ToastContainer } from "react-toastify";

import Theme from "assets/styles/Theme";
import ContainerWithHistory from "components/containers";

import "assets/styles/App.css";
import "react-toastify/dist/ReactToastify.min.css";

const App = (): React.ReactElement => (
  <div className='App'>
    <ThemeProvider theme={Theme}>
      <ContainerWithHistory />
      <ToastContainer
        theme='light'
        position='bottom-right'
        autoClose={3000}
        limit={5}
        hideProgressBar={false}
        rtl={false}
        newestOnTop
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </ThemeProvider>
  </div>
);

export default App;

App.displayName = "App";
