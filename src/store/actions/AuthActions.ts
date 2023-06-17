/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-empty-function */

import { useCallback } from "react";

import { sessionStatuses } from "assets/constants";
import { authTypes as TYPES } from "store/types/AuthTypes";

export default class User {
  dispatch: Function = () => {};
  constructor(dispatch: Function) {
    this.dispatch = dispatch;
  }

  addUserData = useCallback(
    (status: sessionStatuses) =>
      this.dispatch({
        type: TYPES.SET_SESSION_STATUS,
        status,
      }),
    [this],
  );
}
