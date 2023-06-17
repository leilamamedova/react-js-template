import React, { useEffect } from "react";

import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import { allowedRoutes, routes, sessionStatuses } from "assets/constants";
import Pages from "navigation/Pages";
import { IReducers } from "store/reducers/interfaces/reducers";

/**
 * Component that handles auth redirection logic and renders Pages
 */

const ContainerWithHistory = (): React.ReactElement => {
  const authState = useSelector((state: IReducers) => state.authReducer);
  const location = useLocation();
  const navigate = useNavigate();

  const redirectIfUserIsNotAuthenticated = (pathname): void => {
    if (
      authState.sessionStatus === sessionStatuses.inactive &&
      !Object.values(allowedRoutes).includes(pathname)
    ) {
      navigate(allowedRoutes.login);
    }
  };

  const redirectIfUserIsAlreadyAuthenticated = (pathname): void => {
    if (
      authState.sessionStatus === sessionStatuses.active &&
      Object.values(allowedRoutes).includes(pathname)
    ) {
      navigate(routes.index);
    }
  };

  useEffect(() => {
    redirectIfUserIsNotAuthenticated(location.pathname);
    redirectIfUserIsAlreadyAuthenticated(location.pathname);
  }, [authState, location.pathname]);

  return (
    <div className='d-flex flex-grow-1'>
      <Pages />
    </div>
  );
};

export default ContainerWithHistory;

ContainerWithHistory.displayName = "ContainerWithHistory";
