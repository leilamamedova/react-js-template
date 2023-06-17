import React from "react";

import { IAppLayout } from "components/layout/interfaces";

export const RequestContextStore = React.createContext(null);
export const StoreContext = React.createContext(null);

const AppLayout = ({ children }: IAppLayout): React.ReactElement => {
  return (
    <>
      <p>{children}</p>
    </>
  );
};

export default AppLayout;

AppLayout.displayName = "AppLayout";
