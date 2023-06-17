import { sessionStatuses } from "assets/constants";

export interface IAuthReducer {
  sessionStatus: string;
}

export interface IAction {
  type: string;
  status: sessionStatuses;
}
