import { useCallback } from "react";

import { sessionStatuses } from "assets/constants";
import { DispatchFunction } from "store/actions/interfaces";
import { authTypes as TYPES } from "store/types/AuthTypes";

export default class User {
  dispatch: DispatchFunction = () => {};
  constructor(dispatch: DispatchFunction) {
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
