import React from "react";

import { configureStore } from "@reduxjs/toolkit";
import i18n from "localization";
import { I18nextProvider } from "react-i18next";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { combineReducers } from "redux";
import thunk from "redux-thunk";

import ErrorBoundary from "components/errorHandlers";
import { authReducer } from "store/reducers/AuthReducer";
import { errorReducer } from "store/reducers/ErrorReducer";
import { userReducer } from "store/reducers/UserReducer";

export const rootReducer = combineReducers({
  errorReducer,
  userReducer,
  authReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export const Wrapper = ({
  children,
}: {
  children: React.ReactElement;
}): React.ReactElement => (
  <I18nextProvider i18n={i18n}>
    <BrowserRouter>
      <ErrorBoundary>
        <Provider store={store}>{children}</Provider>
      </ErrorBoundary>
    </BrowserRouter>
  </I18nextProvider>
);

Wrapper.displayName = "Wrapper";
