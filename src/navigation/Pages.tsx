import React, { Suspense } from "react";

import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { permit } from "utils";

import {
  allowedRoutes,
  routes,
  appPrefix,
  permissions,
  sessionStatuses,
} from "assets/constants";
import AppLayout from "components/layout/AppLayout";
import LoadingComponent from "components/loading/LoadingComponent";
import { IReducers } from "store/reducers/interfaces/reducers";

const TestPage = LazyImportPage("Test");

function LazyImportPage(
  route,
): React.LazyExoticComponent<React.ComponentType<any>> {
  return React.lazy(() => import(`pages/${route}`));
}

/*
 * Routing with lazy imported pages.
 */

const Pages = (): React.ReactElement => {
  const authState = useSelector((state: IReducers) => state.authReducer);

  return (
    <Suspense fallback={<LoadingComponent />}>
      {authState.sessionStatus === sessionStatuses.active && (
        <AppLayout>
          <Routes>
            <Route
              path={appPrefix + routes.index}
              element={permit(<p>Index</p>, permissions.index_page)}
            />
          </Routes>
        </AppLayout>
      )}
      {authState.sessionStatus !== sessionStatuses.active && (
        <Routes>
          <Route
            path={appPrefix + allowedRoutes.login}
            element={<p>Login</p>}
          />
          <Route
            path={appPrefix + allowedRoutes.alreadyAuthorized}
            element={<p>AlreadyAuthorizedPage</p>}
          />
          <Route path={appPrefix + routes.index} element={<TestPage />} />
        </Routes>
      )}
    </Suspense>
  );
};

export default Pages;

Pages.displayName = "Pages";
