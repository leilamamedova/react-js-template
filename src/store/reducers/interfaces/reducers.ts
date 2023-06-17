import { IAuthReducer } from "store/reducers/interfaces/authReducer";
import { IErrorReducer } from "store/reducers/interfaces/errorReducer";
import { IUserReducer } from "store/reducers/interfaces/userReducer";

export interface IReducers {
  authReducer: IAuthReducer;
  errorReducer: IErrorReducer;
  userReducer: IUserReducer;
}
